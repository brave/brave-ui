/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { initLocale } from '../src/helpers'
import locales from '../stories/assets/locale'
import Theme from '../src/theme/brave-default'
import { ThemeProvider } from '../src/theme'

setOptions({
  name: 'Brave UI',
  url: 'https://github.com/brave/brave-ui'
})

// addon-info
// see https://github.com/storybooks/storybook/tree/master/addons/info#options-and-defaults
// for defaults
setDefaults({
  header: false
})

function loadStories () {
  initLocale(locales)
  const req = require.context('../stories', true, /\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module)
