<!--
  Purpose: Default layout wrapper for most routes.
  Convention: Keep comments concise and intent-focused; no hardcoded strings.
  Accessibility: Provide semantic landmarks and sensible focus order.
-->
<template>
  <div>
    <AppHeader />

    <UMain>
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
