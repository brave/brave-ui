/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { Toggle } from '../../../../src/features/shields'
import {
  ShieldsHeader,
  MainToggle,
  TotalBlockedStats,
  SiteOverview,
  SiteInfo,
  MainToggleHeading,
  MainToggleText,
  ToggleStateText,
  Favicon,
  SiteInfoText,
  TotalBlockedStatsNumber,
  TotalBlockedStatsText,
  DisabledContentView,
  ShieldIcon,
  DisabledContentText
} from '../../../../src/features/shields2'

// Fake data
import { getLocale } from '../fakeLocale'

interface Props {
  enabled: boolean
  favicon: string
  hostname: string
  isBlockedListOpen: boolean
  adsTrackersBlocked: number
  scriptsBlocked: number
  httpsUpgrades: number
  fingerprintingBlocked: number
  fakeOnChange: () => void
}

export default class Header extends React.PureComponent<Props, {}> {
  get totalBlocked () {
    const { adsTrackersBlocked, httpsUpgrades, scriptsBlocked, fingerprintingBlocked } = this.props
    const total = adsTrackersBlocked + httpsUpgrades + scriptsBlocked + fingerprintingBlocked
    return total > 99 ? '99+' : total
  }

  get totalBlockedString () {
    const { adsTrackersBlocked, scriptsBlocked, fingerprintingBlocked } = this.props
    const blockedItems = adsTrackersBlocked + scriptsBlocked + fingerprintingBlocked
    if (blockedItems === 1) {
      return getLocale('itemBlocked')
    } else if (blockedItems > 1) {
      return getLocale('itemsBlocked')
    } else {
      return null
    }
  }

  get httpsUpgradesString () {
    const { httpsUpgrades } = this.props
    if (httpsUpgrades === 1) {
      return getLocale('connectionUpgraded')
    } else if (httpsUpgrades > 1) {
      return getLocale('connectionsUpgraded')
    } else {
      return null
    }
  }

  get stringConjunction () {
    const { adsTrackersBlocked, scriptsBlocked, httpsUpgrades, fingerprintingBlocked } = this.props
    const blockedItems = adsTrackersBlocked + scriptsBlocked + fingerprintingBlocked
    if (!blockedItems || !httpsUpgrades) {
      return null
    }
    return ` ${getLocale('and')} `
  }

  render () {
    const { fakeOnChange, enabled, favicon, hostname, isBlockedListOpen } = this.props
    return (
      <ShieldsHeader status={enabled ? 'enabled' : 'disabled'}>
        <MainToggle status={enabled ? 'enabled' : 'disabled'}>
          <div>
            <MainToggleHeading>
              {getLocale('shields')}
              <ToggleStateText status={enabled ? 'enabled' : 'disabled'}>
                {enabled ? ` ${getLocale('up')} ` : ` ${getLocale('down')} `}
              </ToggleStateText>
              {getLocale('forThisSite')}
            </MainToggleHeading>
            {enabled ? <MainToggleText>{getLocale('enabledMessage')}</MainToggleText> : null}
          </div>
          <Toggle size='large' checked={enabled} onChange={fakeOnChange} disabled={isBlockedListOpen} />
        </MainToggle>
        <SiteOverview status={enabled ? 'enabled' : 'disabled'}>
          <SiteInfo>
            <Favicon src={favicon} />
            <SiteInfoText>{hostname}</SiteInfoText>
          </SiteInfo>
          {
            enabled
            ? (
              <TotalBlockedStats>
                <TotalBlockedStatsNumber>{this.totalBlocked}</TotalBlockedStatsNumber>
                <TotalBlockedStatsText>
                  {this.totalBlockedString} {this.stringConjunction} {this.httpsUpgradesString}
                </TotalBlockedStatsText>
              </TotalBlockedStats>
            )
            : (
              <DisabledContentView>
                <div><ShieldIcon /></div>
                <DisabledContentText>{getLocale('disabledMessage')}</DisabledContentText>
              </DisabledContentView>
            )
          }
        </SiteOverview>
      </ShieldsHeader>
    )
  }
}
