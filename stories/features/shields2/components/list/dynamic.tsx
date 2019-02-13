/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  BlockedListHeader,
  BlockedListSummary,
  BlockedListContent,
  BlockedListItemHeader,
  BlockedListDynamic,
  BlockedListItemWithOptions,
  BlockedListFooterWithOptions,
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

export default class DynamicList extends React.PureComponent<Props, {}> {
  getList = (list: any[], isBlocked: boolean) => {
    return list.map((item, index) => {
      if (item.blocked === isBlocked) {
        return null
      }
      return (
        <BlockedListItemWithOptions key={index}>
          <span title={item.name}>{item.name}</span>
          {
            item.blocked
              ? <button>{getLocale('block')}</button>
              : <button>{getLocale('allow')}</button>
          }
        </BlockedListItemWithOptions>
      )
    })
  }
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
          <BlockedListDynamic>
            <BlockedListItemHeader id='blocked'>
              <span>{list.filter(item => item.blocked === true).length}</span>
              <span>blocked scripts</span>
              <button>allow all</button>
            </BlockedListItemHeader>
            {this.getList(list, true)}
            <BlockedListItemHeader id='allowed'>
              <span>{list.filter(item => item.blocked === false).length}</span>
              <span>allowed scripts</span>
              <button>block all</button>
            </BlockedListItemHeader>
            {this.getList(list, false)}
          </BlockedListDynamic>
        </details>
        <BlockedListFooterWithOptions>
          <button onClick={onClose}>{getLocale('cancel')}</button>
          <button onClick={onClose}>{getLocale('applyOnce')}</button>
        </BlockedListFooterWithOptions>
      </BlockedListContent>
    )
  }
}
