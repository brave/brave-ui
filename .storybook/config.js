import 'emptykit.css'
import { initLocale } from '../src/helpers'
import { configure, addDecorator, addParameters } from '@storybook/react'
import locales from '../stories/assets/locale'
import DarkTheme from '../src/theme/brave-dark'
import DefaultTheme from '../src/theme/brave-default'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'

addParameters({
  backgrounds: [
    { name: 'Neutral300', value: '#DEE2E6', default: true },
    { name: 'Grey700', value: '#5E6175' },
    { name: 'White', value: '#FFF' },
    { name: 'Grey900', value: '#1E2029' }
  ]
})

addParameters({
  options: {
    name: 'Brave UI',
    panelPosition: 'right',
    showNav: true,
    showPanel: true,
    sortStoriesByKind: true
  }
})

const themes = [DefaultTheme, DarkTheme]
addDecorator(withThemesProvider(themes))

function loadStories () {
  initLocale(locales)
  const req = require.context('../stories', true, /\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
