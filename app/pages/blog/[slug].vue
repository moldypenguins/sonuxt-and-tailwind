<script setup lang="ts">
import type { PostsEnCollectionItem, PostsFrCollectionItem } from '@nuxt/content'

const { locale } = useI18n()
const route = useRoute()

const { data: post } = await useAsyncData(
  `${route.path}-${locale.value}`,
  async () => {
    let content = await queryCollection(`posts_${locale.value}`).path(route.path).first()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollection('posts_en').path(route.path).first()
    }
    return content as PostsEnCollectionItem | PostsFrCollectionItem
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(
  `${route.path}-${locale.value}-surround`,
  async () => {
    let content = await queryCollectionItemSurroundings(`posts_${locale.value}`, route.path, {
      fields: ['description']
    })
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollectionItemSurroundings('posts_en', route.path, {
        fields: ['description']
      })
    }
    return content
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)

const title = post.value.seo?.title || post.value.title
const description = post.value.seo?.description || post.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

if (post.value.image?.src) {
  defineOgImage({
    url: post.value.image.src
  })
} else {
  defineOgImageComponent('Saas', {
    headline: 'Blog'
  })
}
</script>

<template>
  <UContainer v-if="post">
    <UPageHeader :title="post.title" :description="post.description">
      <template #headline>
        <UBadge v-bind="post.badge" variant="subtle" />
        <span class="text-muted">&middot;</span>
        <time class="text-muted">{{
          new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })
        }}</time>
      </template>

      <div class="flex flex-wrap items-center gap-3 mt-4">
        <UButton
          v-for="(author, index) in post.authors"
          :key="index"
          :to="author.to"
          color="neutral"
          variant="subtle"
          target="_blank"
          size="sm"
        >
          <UAvatar v-bind="author.avatar" alt="Author avatar" size="2xs" />

          {{ author.name }}
        </UButton>
      </div>
    </UPageHeader>

    <UPage>
      <UPageBody>
        <ContentRenderer v-if="post" :value="post" />

        <USeparator v-if="surround?.length" />

        <UContentSurround :surround="surround" />
      </UPageBody>

      <template v-if="post?.body?.toc?.links?.length" #right>
        <UContentToc :links="post.body.toc.links" />
      </template>
    </UPage>
  </UContainer>
</template>
