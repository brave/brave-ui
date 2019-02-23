// import colors from '../color/colorPalette'
import ITheme from './themeInterface'
import colors from '../color/colorPalette'
import defaultTheme from './default'

const darkTheme: ITheme = {
  ...defaultTheme,
  name: 'Brave Dark', // this is needed for theming addon
  color: {
    ...defaultTheme.color,
    brandBrave: colors.blurple500
  }
}

export default darkTheme
