/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import {configure} from '@storybook/react'

function loadStories () {
  const req = require.context('../stories', true, /\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
