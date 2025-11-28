<!--
  Purpose: Global application header (branding, navigation, language switch).
  Convention: Comments concise; use i18n for text; prefer Tailwind utilities.
  Accessibility: Provide semantic <header> structure and keyboard-friendly navigation.
-->
<script setup lang="ts">
const route = useRoute()
const { header } = useAppConfig()

const items = computed(() => [
  {
    label: 'Docs',
    to: '/docs',
    active: route.path.startsWith('/docs')
  },
  {
    label: 'Pricing',
    to: '/pricing'
  },
  {
    label: 'Blog',
    to: '/blog'
  },
  {
    label: 'Changelog',
    to: '/changelog'
  }
])
</script>

<template>
  <UHeader :to="header?.to || '/'">
    <template #left>
      <AppLogo class="w-auto h-8 shrink-0 align-middle" />
      <span v-if="header?.title">{{ header.title }}</span>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UContentSearchButton />
      <UColorModeSelect />
      <LocaleSelect />
      <UButton icon="i-lucide-log-in" color="neutral" variant="ghost" to="/login" class="lg:hidden" />
      <UButton label="Sign in" color="neutral" variant="outline" to="/login" class="hidden lg:inline-flex" />
      <UButton icon="i-lucide-square-pen" color="neutral" variant="ghost" to="/signup" class="lg:hidden" />
      <UButton
        label="Sign up"
        trailing-icon="i-lucide-arrow-right"
        color="neutral"
        variant="solid"
        to="/signup"
        class="hidden lg:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <USeparator class="my-6" />
      <UButton label="Sign in" color="neutral" variant="subtle" to="/login" block class="mb-3" />
      <UButton label="Sign up" color="neutral" to="/signup" block />
    </template>
  </UHeader>
</template>
