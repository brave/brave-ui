/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import defaultTheme from '../../../src/theme/brave-default'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
// @ts-ignore
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'

// Components
import WebcompatReportModal from './index'

// Themes
const themes = [defaultTheme]

storiesOf('Feature Components/Webcompat Reporter', module)
  .addDecorator(withThemesProvider(themes))
  .addDecorator(withKnobs)
  .add('Report modal', withState({ siteUrl: 'https://www.buzzfeed.com/', submitted: false }, (store) => {
    const fakeOnSubmit = () => {
      store.set({ submitted: true })
    }
    const fakeOnClose = () => { /* noop */ }
    return (
      <div style={{ width: '375px', margin: '0 auto' }}>
        <WebcompatReportModal
          siteUrl={store.state.siteUrl}
          submitted={store.state.submitted}
          onSubmitReport={fakeOnSubmit}
          onClose={fakeOnClose}
        />
      </div>
    )
  }))
