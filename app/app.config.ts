// Purpose: Nuxt app configuration (themes, UI defaults, metadata)
// Convention: Keep comments concise, consistent, and helpful.
// Notes: Reflect environment changes via `shared/environment.ts` when needed.
import type { Direction } from '@nuxt/ui'

const site_name = process.env.NUXT_PUBLIC_SITE_NAME || 'Sonuxt & Tailwind'

export default defineAppConfig({
  dir: 'ltr' as Direction,
  favicon: {
    private: 'tails.ico',
    public: 'sonic.ico'
  },
  header: {
    title: site_name,
    to: '/',
    search: true,
    colorMode: true,
    logo: {
      light: 'tails.svg',
      dark: 'sonic.svg',
      alt: site_name
    },
    links: [
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
    ]
  },
  credits: `Built with simple-icons:nuxt and simple-icons:tailwindcss • Copyright © 2010 - ${new Date().getFullYear()} CR Development`,
  toaster: {
    position: 'bottom-right' as const,
    duration: 5000,
    max: 5,
    expand: true
  }
})
