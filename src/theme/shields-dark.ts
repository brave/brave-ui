import ITheme from './theme-interface'
import defaultTheme from './brave-default'
import colors from './colors'

const shieldsDarkTheme: ITheme = {
  ...defaultTheme,
  name: 'Shields Dark',
  color: {
    ...defaultTheme.color,
    lionLogo: colors.grey700,
    text: colors.white,
    panelBackground: '#17171F',
    panelBackgroundSecondary: colors.grey900,
    inputBorder: colors.grey700,
    separatorLine: colors.grey800,
    modalOverlayBackground: 'rgba(33, 37, 41, 70%)'
  }
}

export default shieldsDarkTheme
