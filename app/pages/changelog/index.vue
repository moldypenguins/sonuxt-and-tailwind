<!--
  Purpose: Changelog listing page.
  Convention: Comments concise; reflect numeric ordering from content files.
  Accessibility: Semantic list of entries; keyboard-friendly navigation.
-->
<script setup lang="ts">
import type {
  ChangelogEnCollectionItem,
  ChangelogFrCollectionItem,
  VersionsEnCollectionItem,
  VersionsFrCollectionItem
} from '@nuxt/content'

const { locale } = useI18n()
const route = useRoute()

const { data: page } = await useAsyncData(
  'changelog',
  async () => {
    let content = await queryCollection(`changelog_${locale.value}`).first()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollection('changelog_en').first()
    }
    return content as ChangelogEnCollectionItem | ChangelogFrCollectionItem
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)
const { data: versions } = await useAsyncData(
  `${route.path}-${locale.value}`,
  async () => {
    let content = await queryCollection(`versions_${locale.value}`).order('date', 'DESC').all()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollection('versions_en').order('date', 'DESC').all()
    }
    return content as (VersionsEnCollectionItem | VersionsFrCollectionItem)[]
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
      <UChangelogVersions>
        <UChangelogVersion v-for="(version, index) in versions" :key="index" v-bind="version">
          <template #body>
            <ContentRenderer :value="version.body" />
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </UPageBody>
  </UContainer>
</template>
