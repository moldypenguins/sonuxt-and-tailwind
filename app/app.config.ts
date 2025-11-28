// Purpose: Nuxt app configuration (themes, UI defaults, metadata)
// Convention: Keep comments concise, consistent, and helpful.
// Notes: Reflect environment changes via `shared/environment.ts` when needed.
import env from '~~/env'

export default defineAppConfig({
  head: {
    title: env.SITE_TITLE,
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    link: [
      { rel: 'icon', href: '/favicon.ico', sizes: 'any' }
      // { rel: 'icon', type: 'image/svg+xml', href: '/sonic.svg' },
      // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
    ],
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: env.SITE_DESCRIPTION }
      // { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      // { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#f8be01' },
      // { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#2057b5' }
    ]
  },
  header: {
    title: env.SITE_TITLE,
    description: env.SITE_DESCRIPTION,
    search: true,
    colorMode: true,
    logo: {
      light: 'tails.svg',
      dark: 'sonic.svg',
      alt: ''
    },
    links: [
      {
        label: 'About',
        icon: 'i-lucide-circle-question-mark',
        to: '/about'
      },
      {
        label: 'Docs',
        icon: 'i-lucide-book',
        to: '/docs'
      },
      {
        label: 'Pricing',
        icon: 'i-lucide-credit-card',
        to: '/pricing'
      },
      {
        label: 'Blog',
        icon: 'i-lucide-pencil',
        to: '/blog'
      },
      {
        label: 'Changelog',
        icon: 'i-lucide-history',
        to: '/changelog'
      },
      {
        label: 'Contact',
        icon: 'i-lucide-contact',
        to: '/contact'
      }
    ]
  },
  footer: {
    credits: `Built with simple-icons:nuxt and simple-icons:tailwindcss • Copyright © 2010 - ${new Date().getFullYear()} CR Development`
  },
  socials: [
    {
      'icon': 'simple-icons:github',
      'to': 'https://github.com/moldypenguins',
      'target': '_blank',
      'aria-label': 'GitHub'
    },
    {
      'icon': 'simple-icons:discord',
      'to': 'https://discordapp.com/users/moldypenguins',
      'target': '_blank',
      'aria-label': 'Discord'
    },
    {
      'icon': 'simple-icons:telegram',
      'to': 'https://t.me/moldypenguins',
      'target': '_blank',
      'aria-label': 'Telegram'
    }
  ],
  toaster: {
    position: 'bottom-right' as const,
    duration: 5000,
    max: 5,
    expand: true
  }
})
