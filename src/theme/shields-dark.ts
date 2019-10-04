import ITheme from './theme-interface'
import darkTheme from './brave-dark'
import colors from './colors'

const shieldsDarkTheme: ITheme = {
  ...darkTheme,
  name: 'Shields Dark',
  color: {
    ...darkTheme.color,
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
