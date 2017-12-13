/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'

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
  const req = require.context('../stories', true, /\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
