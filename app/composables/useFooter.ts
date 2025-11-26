// Purpose: Provide footer navigation/state for the app.
// Convention: Comments are concise; define explicit return types and avoid any.
// i18n: Source user-visible strings from locale messages/content.
export function useFooter() {
  const links = [
    {
      label: 'Figma',
      to: '/figma'
    },
    {
      label: 'Templates',
      to: '/templates'
    },
    {
      label: 'Showcase',
      to: '/showcase'
    },
    {
      label: 'Community',
      to: '/community'
    },
    {
      label: 'Team',
      to: '/team'
    }
  ]

  return {
    links
  }
}
