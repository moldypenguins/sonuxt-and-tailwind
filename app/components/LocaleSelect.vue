<!--
  Purpose: Language switcher integrated with `@nuxtjs/i18n`.
  Convention: Comments concise; avoid hardcoded text; rely on locale messages.
  Accessibility: Ensure dropdown is keyboard-accessible with visible focus states.
-->
<script setup lang="ts">
const { setLocale, locales, locale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales.values)"
    @update:model-value="setLocale(locale)"
  />
</template>
