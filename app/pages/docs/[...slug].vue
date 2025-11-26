<!--
  Purpose: Docs catch-all route rendering markdown content via `@nuxt/content`.
  Convention: Comments concise; rely on content files and i18n; no hardcoded text.
  Accessibility: Semantic headings, skip links if needed, and focus management.
-->
<script setup lang="ts">
import type { DocsEnCollectionItem, DocsFrCollectionItem } from '@nuxt/content'

const { locale } = useI18n()
const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(
  `${route.path}-${locale.value}`,
  async () => {
    const content = await queryCollection(`docs_${locale.value}`).path(route.path).first()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      return await queryCollection('docs_en').path(route.path).first()
    }
    return content as DocsEnCollectionItem | DocsFrCollectionItem
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(
  `${route.path}-${locale.value}-surround`,
  async () => {
    let content = await queryCollectionItemSurroundings(`docs_${locale.value}`, route.path, {
      fields: ['description']
    })
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollectionItemSurroundings('docs_en', route.path, {
        fields: ['description']
      })
    }
    return content
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" :description="page.description" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
