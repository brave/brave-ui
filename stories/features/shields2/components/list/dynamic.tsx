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

export default class DynamicList extends React.PureComponent<Props, {}> {
  getList = (list: any[], isBlocked: boolean) => {
    return list.map((item, index) => {
      if (item.blocked === isBlocked) {
        return null
      }
      return (
        <li key={index}>
          <span title={item.name}>{item.name}</span>
          {
            item.blocked
              ? <button>{getLocale('block')}</button>
              : <button>{getLocale('allow')}</button>
          }
        </li>
      )
    })
  }
  render () {
    const { stats, favicon, hostname, name, list, onClose } = this.props
    return (
      <BlockedListContent>
        <header>
          <img src={favicon} /> {hostname}
        </header>
        <details open={true}>
          <summary onClick={onClose}>
            {stats > 99 ? '99+' : stats} - {name}
          </summary>
          <section id='blocked'>
            <div>blocked scripts <button>allow all</button></div>
            {this.getList(list, true)}
          </section>
          <section id='allowed'>
            <div>allowed scripts <button>block all</button></div>
            {this.getList(list, false)}
          </section>
        </details>
        <footer>
          <button onClick={onClose}>{getLocale('cancel')}</button>
          <button onClick={onClose}>{getLocale('applyOnce')}</button>
        </footer>
      </BlockedListContent>
    )
  }
}
