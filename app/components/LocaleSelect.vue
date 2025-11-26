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
