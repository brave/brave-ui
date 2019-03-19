import ITheme from './theme-interface'
import defaultTheme from './brave-default'
import colors from './colors'

const shieldsDarkTheme: ITheme = {
  ...defaultTheme,
  name: 'Shields Dark',
  textColor: colors.white,
  panelBackground: colors.grey900,
  inputBorder: colors.grey700,
  separatorLine: colors.grey800
}

export default shieldsDarkTheme
