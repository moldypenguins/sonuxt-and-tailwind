<!--
  Purpose: Home/landing page.
  Convention: Comments concise; source text via content/i18n; use Tailwind utilities.
  Accessibility: Semantic headings and logical focus order.
-->
<script setup lang="ts">
import type { IndexEnCollectionItem, IndexFrCollectionItem } from '@nuxt/content'

const { locale } = useI18n()

const { data: page } = await useAsyncData(
  'index',
  async () => {
    let content = await queryCollection(`index_${locale.value}`).first()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      content = await queryCollection('index_en').first()
    }
    return content as IndexEnCollectionItem | IndexFrCollectionItem
  },
  {
    watch: [locale] // Refetch when locale changes
  }
)

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  titleTemplate: '%s - Sonuxt & Tailwind',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div v-if="page">
    <UPageHero :title="page.title" :description="page.description" :links="page.hero.links">
      <template #top>
        <HeroBackground />
      </template>
      <template #title>
        <AppHeroLogo />
      </template>
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
      class="text-display"
    >
      <UPageCard variant="subtle">
        <div
          class="relative overflow-hidden rounded-sm border border-dashed border-accented opacity-75 flex items-center justify-center aspect-video"
        >
          <svg v-if="!section.image?.src" class="absolute inset-0 h-full w-full stroke-inverted/10 px-0" fill="none">
            <defs>
              <pattern
                id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
              </pattern>
            </defs>
            <rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%" />
          </svg>

          <NuxtImg v-else :src="section.image.src" :alt="section.image.src" class="object-cover w-full h-full" />
        </div>
      </UPageCard>
    </UPageSection>

    <UPageSection :title="page.features.title" :description="page.features.description">
      <UPageGrid>
        <UPageCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" spotlight />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns class="xl:columns-4">
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
        >
          <template #footer>
            <UUser v-bind="testimonial.user" size="lg" />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <USeparator />

    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
