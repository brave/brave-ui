import ITheme from './theme-interface'
import defaultTheme from './brave-default'
import colors from './colors'

const shieldsLightTheme: ITheme = {
  ...defaultTheme,
  name: 'Shields Light',
  color: {
    ...defaultTheme.color,
    text: colors.neutral900,
    panelBackgroundSecondary: colors.neutral000,
    modalOverlayBackground: 'rgba(255, 255, 255, 70%)'
  }
}

export default shieldsLightTheme
