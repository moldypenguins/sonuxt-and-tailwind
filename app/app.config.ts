import type { Direction } from '@nuxt/ui'

export default defineAppConfig({
  dir: 'ltr' as Direction,
  toaster: {
    position: 'bottom-right' as const,
    duration: 5000,
    max: 5,
    expand: true
  },
  ui: {
    colors: {
      primary: 'tails',
      secondary: 'sonic',
      tertiary: 'rose',
      success: 'green',
      info: 'cyan',
      warning: 'amber',
      error: 'red',
      neutral: 'zinc'
    }
  },
  theme: {
    extend: {
      colors: {
        sonic: {
          '50': 'oklch(98.4% 0.003 247.858)',
          '100': 'oklch(96.8% 0.007 247.896)',
          '200': 'oklch(92.9% 0.013 255.508)',
          '300': 'oklch(86.9% 0.022 252.894)',
          '400': 'oklch(70.4% 0.04 256.788)',
          '500': 'oklch(55.4% 0.046 257.417)',
          '600': 'oklch(44.6% 0.043 257.281)',
          '700': 'oklch(37.2% 0.044 257.287)',
          '800': 'oklch(27.9% 0.041 260.031)',
          '900': 'oklch(20.8% 0.042 265.755)',
          '950': 'oklch(12.9% 0.042 264.695)'
        },
        tails: {
          '50': 'oklch(98.5% 0.002 247.839)',
          '100': 'oklch(96.7% 0.003 264.542)',
          '200': 'oklch(92.8% 0.006 264.531)',
          '300': 'oklch(87.2% 0.01 258.338)',
          '400': 'oklch(70.7% 0.022 261.325)',
          '500': 'oklch(55.1% 0.027 264.364)',
          '600': 'oklch(44.6% 0.03 256.802)',
          '700': 'oklch(37.3% 0.034 259.733)',
          '800': 'oklch(27.8% 0.033 256.848)',
          '900': 'oklch(21% 0.034 264.665)',
          '950': 'oklch(13% 0.028 261.692)'
        }
      }
    }
  }
})
