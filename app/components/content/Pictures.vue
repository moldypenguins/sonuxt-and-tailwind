<!--
  Purpose: Gallery/grid of pictures with responsive layout.
  Convention: Comments concise; prefer Tailwind utilities; lazy-load images.
  Accessibility: Alt text and focusable controls where applicable.
-->
<script setup lang="ts">
defineProps<{
  orientation: 'horizontal' | 'vertical'
}>()
</script>

<template>
  <div
    class="flex items-center justify-between"
    :class="orientation === 'vertical' ? 'flex-col space-y-4' : 'flex-row   space-x-4'"
  >
    <slot />
  </div>
</template>
