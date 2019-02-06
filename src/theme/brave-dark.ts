// import colors from '../color/colorPalette'
import ITheme from './theme-interface'
import colors from './palette'
import defaultTheme from './brave-default'

const darkTheme: ITheme = {
  ...defaultTheme,
  name: 'Brave Dark', // this is needed for theming addon
  color: {
    ...defaultTheme.color,
    primary: colors.blurple500
  }
}

export default darkTheme
