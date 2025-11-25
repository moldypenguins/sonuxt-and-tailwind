// // app/types/themesConfig.ts
// import nuxtConfig from '../../nuxt.config'
// import { defuFn } from 'defu'

// /**
//  * Themes enforces that each theme has a `colors` object whose keys are taken directly from nuxt.config.ts
//  */
// interface ThemesConfig {
//   [key: string]: {
//     colors: {
//       [K in (typeof nuxtConfig.ui.theme.colors)[number]]: string
//     }
//   }
// }

// declare global {
//   const defineThemesConfig: <C extends ThemesConfig>(config: C) => C
// }

// const inlineConfig = {
//   default: {
//     colors: {
//       primary: 'blue',
//       secondary: 'slate',
//       tertiary: 'purple',
//       success: 'green',
//       info: 'cyan',
//       warning: 'amber',
//       error: 'red',
//       neutral: 'zinc'
//     }
//   }
// }

// import cfg0 from '../../app/themes.config'

// //export default defuFn(cfg0, inlineConfig)
// {
//     sonic: {
//       icon: 'sonic.ico',
//       logo: 'sonic.svg',
//       colors: {
//         primary: 'sonic',
//         secondary: 'slate',
//         tertiary: 'purple',
//         success: 'green',
//         info: 'cyan',
//         warning: 'amber',
//         error: 'red',
//         neutral: 'zinc'
//       }
//     },
//     tails: {
//       icon: 'tails.ico',
//       logo: 'tails.svg',
//       colors: {
//         primary: 'tails',
//         secondary: 'stone',
//         tertiary: 'rose',
//         success: 'green',
//         info: 'cyan',
//         warning: 'amber',
//         error: 'red',
//         neutral: 'zinc'
//       }
//     }
//   }
