import ITheme from './theme-interface'
import defaultTheme from './brave-default'
import colors from './colors'

const welcomeLightTheme: ITheme = {
  ...defaultTheme,
  name: 'Welcome Light',
  color: {
    ...defaultTheme.color,
    text: colors.neutral900,
    panelBackground: '#F9F9FD',
    panelBackgroundSecondary: colors.neutral000
  }
}

export default welcomeLightTheme
