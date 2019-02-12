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
  adsTrackersBlocked: number
  scriptsBlocked: number
  httpsUpgrades: number
  fingerprintingBlocked: number
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
          <div>
            {this.totalBlocked}<br />
            {this.totalBlockedString} {this.stringConjunction} {this.httpsUpgradesString}
          </div>
        </section>
      </header>
    )
  }
}
