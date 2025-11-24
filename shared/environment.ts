export default {
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: process.env.NUXT_PUBLIC_SITE_NAME || 'Sonuxt & Tailwind',
    description: process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'A NuxtUI and TailwindCSS Starter Template.'
  }
}
