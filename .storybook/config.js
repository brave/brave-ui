import './style/github_style.css'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { initLocale } from '../src/helpers'
import locales from '../stories/assets/locale'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import DarkTheme from '../src/theme/brave-dark'
import DefaultTheme from '../src/theme/brave-default'

const themes = [DefaultTheme, DarkTheme]
addDecorator(withThemesProvider(themes))
addDecorator(
  withBackgrounds([
    { name: 'Neutral300', value: '#DEE2E6', default: true },
    { name: 'Grey700', value: '#5E6175' },
    { name: 'White', value: '#FFF' },
    { name: 'Grey900', value: '#1E2029' },
  ])
)

addDecorator(
  withOptions({
    name: 'Brave UI',
    url: 'https://github.com/brave/brave-ui',
    addonPanelInRight: true
  })
)

function loadStories() {
  initLocale(locales)
  const req = require.context('../stories', true, /\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
