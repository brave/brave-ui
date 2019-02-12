/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Fake data
import { getLocale } from '../fakeLocale'

interface Props {
  isBlockedListOpen: boolean
}

export default class Footer extends React.PureComponent<Props, {}> {
  render () {
    const { isBlockedListOpen } = this.props
    return (
      <footer>
        <button disabled={isBlockedListOpen}>{getLocale('changeDefaults')}</button>
      </footer>
    )
  }
}
