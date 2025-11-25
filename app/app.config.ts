import type { Direction } from '@nuxt/ui'

const themes = useThemes()

export default defineAppConfig({
  dir: 'ltr' as Direction,
  toaster: {
    position: 'bottom-right' as const,
    duration: 5000,
    max: 5,
    expand: true
  },
  ui: { colors: themes.sonic.colors },
  socials: {
    twitter: 'Atinux',
    github: 'Atinux/content-wind',
    mastodon: '@atinux@webtoo.ls',
    bluesky: 'atinux.com'
  },
  icon: {
    aliases: {
      'dark-mode': 'lucide-moon',
      'light-mode': 'lucide-sun'
    }
  }
})
