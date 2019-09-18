import ITheme from './theme-interface'
import colors from './colors'
import defaultTheme from './brave-default'

const darkTheme: ITheme = {
  ...defaultTheme,
  name: 'Brave Dark',
  color: {
    ...defaultTheme.color,
    contextMenuBackground: colors.black,
    contextMenuForeground: colors.white,
    defaultControl: colors.white,
    defaultButtonBorder: colors.grey400
  }
}

export default darkTheme
