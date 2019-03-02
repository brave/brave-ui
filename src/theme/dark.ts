// import colors from '../color/colorPalette'
import ITheme from './theme-interface'
import colors from '../components/style/color/color-palette'
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
