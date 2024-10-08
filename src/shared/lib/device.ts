export const deviceDetection = () => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  const isTablet = window.matchMedia('(max-width: 1023px)').matches
  const isDesktopMin = window.matchMedia('(max-width: 1439px)').matches
  const isDesktop = window.matchMedia('(min-width: 1440px)').matches

  if (isMobile) return 'mobile'
  if (isTablet) return 'tablet'
  if (isDesktopMin) return 'desktop-min'
  if (isDesktop) return 'desktop'

  return undefined
}
