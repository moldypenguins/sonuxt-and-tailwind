// Purpose: Nuxt app configuration (themes, UI defaults, metadata)
// Convention: Keep comments concise, consistent, and helpful.
// Notes: Reflect environment changes via `shared/environment.ts` when needed.
import type { Direction } from '@nuxt/ui'

export default defineAppConfig({
  dir: 'ltr' as Direction,
  toaster: {
    position: 'bottom-right' as const,
    duration: 5000,
    max: 5,
    expand: true
  },
  socials: {
    github: 'moldypenguins',
    discord: 'moldypenguins',
    telegram: 'moldypenguins'
  }
})
