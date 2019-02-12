/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { BlockedListContent } from '../../../../../src/features/shields2'

// Fake data
import { getLocale } from '../../fakeLocale'

interface Props {
  favicon: string
  hostname: string
  stats: number
  name: string
  list: any[]
  onClose?: (event?: any) => void
}

export default class StaticList extends React.PureComponent<Props, {}> {
  render () {
    const { stats, favicon, hostname, name, list, onClose } = this.props
    return (
      <BlockedListContent>
        <header>
          <img src={favicon} /> {hostname}
        </header>
        <details open={true}>
          <summary onClick={onClose}>
            {stats} - {name}
          </summary>
          <ul>
            {list.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </details>
        <footer>
          <button onClick={onClose}>{getLocale('goBack')}</button>
        </footer>
      </BlockedListContent>
    )
  }
}
