/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { Toggle } from '../../../../src/features/shields'

// Fake data
import { getLocale } from '../fakeLocale'

interface Props {
  favicon: string
  hostname: string
  isBlockedListOpen: boolean
}

export default class Header extends React.PureComponent<Props, {}> {
  render () {
    const { favicon, hostname, isBlockedListOpen } = this.props
    return (
      <header>
        <section>
          <div>
            <div>
              {getLocale('shields')} {getLocale('up')} {getLocale('forThisSite')}
            </div>
            <div>{getLocale('enabledMessage')}</div>
          </div>
          <Toggle disabled={isBlockedListOpen} />
        </section>
        <section>
          <img src={favicon} />
          <span>{hostname}</span>
          <div>91 {getLocale('itemsBlocked')}</div>
        </section>
      </header>
    )
  }
}
