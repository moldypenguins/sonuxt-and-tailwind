// // composables/useThemes.ts
// const appConfig = useAppConfig()

// function changeTheme() {
//   updateAppConfig({
//     ui: {
//       ...appConfig.ui,
//       ...themes.sonic.colors
//     }
//   })
// }

// export const useThemes = () => {
//   const { gsuite } = useRuntimeConfig().public as any

//   const execute = async (action: string) => await grecaptcha.execute(gsuite.recaptcha.siteKey, { action })

//   const verify = async (token: string) => await $fetch<RecaptchaResponse>(`/api/recaptcha/${token}`)

//   return {
//     hidden,
//     execute,
//     verify,
//     toggleBadge,
//     hideBadge: () => toggleBadge(true),
//     showBadge: () => toggleBadge(false),
//     config: gsuite
//   }
// }
// export const useThemes = () => {
//   return
// }
