/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Page from '../../../../components/page'

// Styles
import theme from './theme'

// Assets
// import locale from './fakeLocale'
// import data from './fakeData'

class RewardsWelcome extends React.PureComponent {
  render () {
    return (
      <Page theme={theme.page}>
        Rewards Welcome
      </Page>
    )
  }
}

export default RewardsWelcome
