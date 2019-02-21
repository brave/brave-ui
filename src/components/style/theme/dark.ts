// import colors from '../color/colorPalette'
import ITheme from './themeInterface'
import colors from '../color/colorPalette'
import defaultTheme from './default'

const darkTheme: ITheme = {
  ...defaultTheme,
  name: 'Dark', // this is needed for theming addon

  fontColor: {
    default: colors.white,
    defaultFade15: colors.whiteFade15,
    defaultFade30: colors.whiteFade30,
    defaultFade50: colors.whiteFade50
  }
}

export default darkTheme
