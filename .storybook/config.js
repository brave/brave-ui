import './styles.css'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { initLocale } from '../src/helpers'
import locales from '../stories/assets/locale'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import DarkTheme from '../src/components/style/theme/dark'
import DefaultTheme from '../src/components/style/theme/default'

const themes = [DefaultTheme, DarkTheme]
addDecorator(withThemesProvider(themes))
addDecorator(
  withBackgrounds([
    { name: 'Neutral200', value: '#E9ECEF', default: true },
    { name: 'Grey400', value: '#CED4DA' },
    { name: 'White', value: '#FFF' },
    { name: 'Grey900', value: '#1E2029' },
  ])
)

withOptions({
  name: 'Brave UI',
  url: 'https://github.com/brave/brave-ui'
})



function loadStories() {
  initLocale(locales)
  const req = require.context('../stories', true, /\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
