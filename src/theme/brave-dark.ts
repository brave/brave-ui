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
    contextMenuHoverBackground: colors.blurple500,
    contextMenuHoverForeground: colors.white,
    defaultControl: colors.grey400,
    defaultControlInteracting: colors.white,
    defaultControlActive: colors.grey500,
    panelBackground: colors.grey900,
    text: colors.white
  }
}

export default darkTheme
