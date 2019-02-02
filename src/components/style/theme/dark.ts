// import colors from '../color/colorPalette'
import ITheme from './themeInterface'
import colors from '../color/colorPalette'
import defaultTheme from './default'

const darkTheme: ITheme = {
  ...defaultTheme,
  name: 'Dark', // this is needed for theming addon
  brandPrimary: colors.blurple500
}
export default darkTheme
