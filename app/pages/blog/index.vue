<script setup lang="ts">
import type {
  BlogEnCollectionItem,
  BlogFrCollectionItem,
  PostsEnCollectionItem,
  PostsFrCollectionItem
} from '@nuxt/content'

const { locale } = useI18n()
const route = useRoute()

const { data: page } = await useAsyncData(
  'blog',
  async () => {
    let content = await queryCollection(`blog_${locale.value}`).first()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollection('blog_en').first()
    }
    return content as BlogEnCollectionItem | BlogFrCollectionItem
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)
const { data: posts } = await useAsyncData(
  `${route.path}-${locale.value}`,
  async () => {
    let content = await queryCollection(`posts_${locale.value}`).all()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollection('posts_en').all()
    }
    return content as (PostsEnCollectionItem | PostsFrCollectionItem)[]
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')
</script>

<template>
  <UContainer>
    <UPageHeader v-bind="page" class="py-[50px]" />

    <UPageBody>
      <UBlogPosts>
        <UBlogPost
          v-if="posts && posts.length > 0"
          v-for="(post, index) in posts"
          :key="index"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="naked"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>
