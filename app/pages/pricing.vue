<!--
  Purpose: Pricing page with plans and features.
  Convention: Comments concise; no hardcoded strings; keep plan order stable.
  Accessibility: Ensure tables/cards are screen-reader friendly.
-->
<script setup lang="ts">
import type { Collections, PricingEnCollectionItem, PricingFrCollectionItem } from '@nuxt/content'

const { locale } = useI18n()

const { data: page } = await useAsyncData(
  'pricing',
  async () => {
    const collection = `pricing_${locale.value}` as keyof Collections
    const content = await queryCollection(collection).first()
    // fallback to default locale
    if (!content && locale.value !== 'en') {
      return await queryCollection('pricing_en').first()
    }
    return content as PricingEnCollectionItem | PricingFrCollectionItem
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

const isYearly = ref('0')

const items = ref([
  {
    label: 'Monthly',
    value: '0'
  },
  {
    label: 'Yearly',
    value: '1'
  }
])
</script>

<template>
  <div v-if="page">
    <UPageHero :title="page.title" :description="page.description">
      <template #links>
        <UTabs
          v-model="isYearly"
          :items="items"
          color="neutral"
          size="xs"
          class="w-48"
          :ui="{
            list: 'ring ring-accented rounded-full',
            indicator: 'rounded-full',
            trigger: 'w-1/2'
          }"
        />
      </template>
    </UPageHero>

    <UContainer>
      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.plans"
          :key="index"
          v-bind="plan"
          :price="isYearly === '1' ? plan.price.year : plan.price.month"
          :billing-cycle="isYearly === '1' ? '/year' : '/month'"
        />
      </UPricingPlans>
    </UContainer>

    <UPageSection>
      <UPageLogos>
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon" class="w-12 h-12 shrink-0 text-muted" />
      </UPageLogos>
    </UPageSection>

    <UPageSection :title="page.faq.title" :description="page.faq.description">
      <UAccordion
        :items="page.faq.items"
        :unmount-on-hide="false"
        :default-value="['0']"
        type="multiple"
        class="max-w-3xl mx-auto"
        :ui="{
          trigger: 'text-base text-highlighted',
          body: 'text-base text-muted'
        }"
      />
    </UPageSection>
  </div>
</template>
