<!--
  Purpose: Display application logo with proper theming and alt text.
  Convention: Comments concise; use Tailwind utilities; ensure responsive sizing.
  Accessibility: Provide meaningful `alt` and avoid decorative-only noise.
-->
<script setup lang="ts">
const { header } = useAppConfig()
const color_mode = useColorMode()
const logo = computed(() => (color_mode.value === 'dark' ? header.logo.dark : header.logo.light))
</script>
<template>
  <ClientOnly>
    <img :src="logo" :alt="header.logo.alt" />
  </ClientOnly>
</template>
