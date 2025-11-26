<!--
  Purpose: Full-width layout for landing or media-heavy pages.
  Convention: Comments are concise and consistent; use Tailwind utilities.
  A11y: Maintain readable content width and proper headings.
-->
<template>
  <div class="py-10 m-auto sm:px-8">
    <main class="px-4 mx-auto max-w-2xl prose">
      <slot>
        <h1 class="text-2xl">Page not found</h1>
      </slot>
    </main>
  </div>
</template>
