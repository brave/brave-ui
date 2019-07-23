import ITheme from './theme-interface'
import defaultTheme from './brave-default'
import colors from './colors'

const welcomeDarkTheme: ITheme = {
  ...defaultTheme,
  name: 'Welcome Dark',
  color: {
    ...defaultTheme.color,
    text: colors.white,
    panelBackground: colors.grey900
  }
}

export default welcomeDarkTheme
