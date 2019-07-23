/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import welcomeLightTheme from '../../../src/theme/welcome-light'
import welcomeDarkTheme from '../../../src/theme/welcome-dark'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { FullPageStory } from '../../storyUtils'
// Components
import WelcomePage from './page/index'

// Themes
const themes = [welcomeLightTheme, welcomeDarkTheme]

storiesOf('Feature Components/Welcome', module)
  .addDecorator(FullPageStory)
  .addDecorator(withThemesProvider(themes))
  .addDecorator(withKnobs)
  .add('Page', () => {
    return (
      <WelcomePage isDefaultSearchGoogle={boolean('Is default search google?', true)}/>
    )
  })
