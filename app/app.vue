<!--
  Purpose: Root application shell (layout landmarks, theme wrappers)
  Convention: Comments are concise, consistent, and explain intent over implementation.
  Accessibility: Ensure <header>, <main>, <footer> landmarks and focus management.
-->
<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import * as locales from '@nuxt/ui/locale'

const { header } = useAppConfig()
const { locale } = useI18n()
const language = computed(() => locales[locale.value].code)
const direction = computed(() => locales[locale.value].dir)

useHead({
  htmlAttrs: { lang: language, dir: direction }
})

useSeoMeta({
  titleTemplate: `%s - ${header.title}`
})

const { data: navigation } = await useAsyncData(
  'navigation',
  () => queryCollectionNavigation(`docs_${locale.value}` as keyof Collections),
  {
    transform: (data) => data.find((item) => item.path === '/docs')?.children || []
  }
)
const { data: files } = useLazyAsyncData(
  'search',
  () => queryCollectionSearchSections(`docs_${locale.value}` as keyof Collections),
  {
    server: false
  }
)

provide('navigation', navigation)
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="header.links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
}
</style>
