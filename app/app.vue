<!--
  Purpose: Root application shell (layout landmarks, theme wrappers)
  Convention: Comments are concise, consistent, and explain intent over implementation.
  Accessibility: Ensure <header>, <main>, <footer> landmarks and focus management.
-->
<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const language = computed(() => locales[locale.value].code)
const direction = computed(() => locales[locale.value].dir)

const rt = useRuntimeConfig()
const { favicon } = useAppConfig()

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    //{ name: 'theme-color', key: 'theme-color', content: '' }
  ],
  link: [{ rel: 'icon', href: favicon.public }],
  htmlAttrs: { lang: language, dir: direction }
})

useSeoMeta({
  titleTemplate: `%s - ${rt.public.siteTitle}`
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

const links = [
  {
    label: 'Docs',
    icon: 'i-lucide-book',
    to: '/docs/getting-started'
  },
  {
    label: 'Pricing',
    icon: 'i-lucide-credit-card',
    to: '/pricing'
  },
  {
    label: 'Blog',
    icon: 'i-lucide-pencil',
    to: '/blog'
  },
  {
    label: 'Changelog',
    icon: 'i-lucide-history',
    to: '/changelog'
  }
]

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
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
