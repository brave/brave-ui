/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  BlockedListHeader,
  BlockedListSummary,
  BlockedListStatic,
  BlockedListContent,
  BlockedListFooter,
  ArrowUpIcon,
  Favicon,
  SiteInfoText,
  BlockedInfoRowStats,
  BlockedListSummaryText
} from '../../../../../../src/features/shields'

// Group components
import StaticResourcesList from '../../shared/resourcesBlockedList/staticResourcesList'

// Shared components
import Button from '../../../../../../src/components/buttonsIndicators/button'

// Fake data
import { getLocale } from '../../../fakeLocale'

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
          <Favicon src={favicon} />
          <SiteInfoText>{hostname}</SiteInfoText>
        </BlockedListHeader>
        <details open={true}>
          <BlockedListSummary onClick={onClose}>
          <ArrowUpIcon />
            <BlockedInfoRowStats>{stats > 99 ? '99+' : stats}</BlockedInfoRowStats>
            <BlockedListSummaryText>{name}</BlockedListSummaryText>
            </BlockedListSummary>
            <BlockedListStatic fixedHeight={true}>
              <StaticResourcesList list={list} />
            </BlockedListStatic>
        </details>
        <BlockedListFooter>
          <Button level='primary' onClick={onClose} text={getLocale('goBack')} />
        </BlockedListFooter>
      </BlockedListContent>
    )
  }
}
