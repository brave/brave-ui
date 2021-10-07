import ITheme from './theme-interface'
import colors from './colors'
import defaultTheme from './brave-default'

const darkTheme: ITheme = {
  ...defaultTheme,
  name: 'Brave Dark',
  color: {
    ...defaultTheme.color,
    // brand
    interactive05: colors.blurple300,
    interactive07: colors.grey000,
    interactive08: colors.grey700,
    // regular controls
    defaultControl: colors.grey400,
    defaultControlInteracting: colors.white,
    defaultControlActive: colors.grey500,
    // disabled controls
    disabled: colors.neutral800,
    // text
    contextMenuForeground: colors.white,
    contextMenuHoverForeground: colors.white,
    text: colors.white,
    text01: colors.grey000,
    text02: colors.grey400,
    text03: colors.grey600,
    // backgrounds
    contextMenuBackground: colors.black,
    contextMenuHoverBackground: colors.blurple500,
    panelBackground: colors.grey900,
    background01: '#17171F',
    background02: colors.grey900,
    // dividers and outlines
    divider01: colors.grey800,
    // alerts
    errorText: '#FF4B6A',
    errorBackground: 'rgba(227, 36, 68, 0.2)',
    warningBackground: 'rgba(255, 221, 99, 0.2)',
    successBackground: 'rgba(81, 207, 102, 0.3)'
  }
}

export default darkTheme
