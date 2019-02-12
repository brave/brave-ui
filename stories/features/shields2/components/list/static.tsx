/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  BlockedListHeader,
  BlockedListSummary,
  BlockedListContent,
  BlockedList,
  BlockedListItem,
  BlockedListFooter,
  ArrowUpIcon
} from '../../../../../src/features/shields2'

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
        <BlockedListHeader>
          <img src={favicon} /> {hostname}
        </BlockedListHeader>
        <details open={true}>
          <BlockedListSummary onClick={onClose}>
          <ArrowUpIcon />
          <span>{stats > 99 ? '99+' : stats}</span>
          <span>{name}</span>
          </BlockedListSummary>
          <BlockedList>
            {list.map((item, index) => <BlockedListItem key={index}>{item}</BlockedListItem>)}
          </BlockedList>
        </details>
        <BlockedListFooter>
          <button onClick={onClose}>{getLocale('goBack')}</button>
        </BlockedListFooter>
      </BlockedListContent>
    )
  }
}
