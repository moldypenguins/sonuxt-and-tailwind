<!--
  Purpose: Theme selection component using configured palettes.
  Convention: Comments concise; prefer Tailwind utilities and color vars.
  Performance: Lazy-load if heavy; avoid blocking JS.
-->
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const appConfig = useAppConfig()
const themes = appConfig.themes.available

const colors = Object.keys(themes.default.colors)

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: 'Theme',
    chip: appConfig.ui.colors.primary,
    children: colors.map((color) => ({
      label: color,
      chip: color,
      checked: appConfig.ui.colors.primary === color,
      type: 'checkbox',
      onSelect: (e) => {
        e.preventDefault()
        appConfig.ui.colors.primary = color
      }
    }))
  }
])
</script>

<template>
  <UDropdownMenu :items="items" :content="{ side: 'right', align: 'start' }">
    <UButton
      icon="i-lucide-swatch-book"
      color="neutral"
      variant="ghost"
      class="data-[state=open]:bg-elevated"
      aria-label="Switch theme"
    />

    <template #item-leading="{ item }">
      <div class="inline-flex items-center justify-center shrink-0 size-5">
        <span
          class="rounded-full ring ring-bg bg-(--chip-light) dark:bg-(--chip-dark) size-2"
          :style="{
            '--chip-light': `var(--color-${(item as any).chip}-500)`,
            '--chip-dark': `var(--color-${(item as any).chip}-400)`
          }"
        />
      </div>
    </template>
  </UDropdownMenu>
</template>
