/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import {
  BlockedInfoRow,
  BlockedInfoRowData,
  ArrowDownIcon,
  BlockedInfoRowStats,
  BlockedInfoRowText
} from '../../../../src/features/shields2'
import { Toggle } from '../../../../src/features/shields'

// Group Components
import StaticList from './list/static'

// Fake data
import { getLocale } from '../fakeLocale'
import data from '../fakeData'

interface Props {
  favicon: string
  hostname: string
  setBlockedListOpen: () => void
  isBlockedListOpen: boolean
  adsTrackersBlocked: number
  httpsUpgrades: number
}

interface State {
  trackersBlockedOpen: boolean
  connectionsUpgradedOpen: boolean
}

export default class InterfaceControls extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      trackersBlockedOpen: false,
      connectionsUpgradedOpen: false
    }
  }

  get tabIndex () {
    const { isBlockedListOpen } = this.props
    return isBlockedListOpen ? -1 : 0
  }

  onOpen3rdPartyTrackersBlocked = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget) {
      event.currentTarget.blur()
    }
    this.props.setBlockedListOpen()
    this.setState({ trackersBlockedOpen: !this.state.trackersBlockedOpen })
  }

  onOpen3rdPartyTrackersBlockedViaKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event) {
      if (event.key === ' ') {
        event.currentTarget.blur()
        this.props.setBlockedListOpen()
        this.setState({ trackersBlockedOpen: !this.state.trackersBlockedOpen })
      }
    }
  }

  onOpenConnectionsUpgradedToHTTPS = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget) {
      event.currentTarget.blur()
    }
    this.props.setBlockedListOpen()
    this.setState({ connectionsUpgradedOpen: !this.state.connectionsUpgradedOpen })
    // setNativeProps
  }

  onOpenConnectionsUpgradedToHTTPSViaKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event) {
      if (event.key === ' ') {
        event.currentTarget.blur()
        this.props.setBlockedListOpen()
        this.setState({ connectionsUpgradedOpen: !this.state.connectionsUpgradedOpen })
      }
    }
  }

  render () {
    const { isBlockedListOpen, favicon, hostname, adsTrackersBlocked, httpsUpgrades } = this.props
    const { trackersBlockedOpen, connectionsUpgradedOpen } = this.state
    return (
      <>
        <BlockedInfoRow>
          <BlockedInfoRowData
            tabIndex={this.tabIndex}
            onClick={this.onOpen3rdPartyTrackersBlocked}
            onKeyDown={this.onOpen3rdPartyTrackersBlockedViaKeyboard}
          >
            <ArrowDownIcon />
            <BlockedInfoRowStats>{adsTrackersBlocked > 99 ? '99+' : adsTrackersBlocked}</BlockedInfoRowStats>
            <BlockedInfoRowText>{getLocale('thirdPartyTrackersBlocked')}</BlockedInfoRowText>
          </BlockedInfoRowData>
          <Toggle disabled={isBlockedListOpen} />
          {
            trackersBlockedOpen &&
              <StaticList
                favicon={favicon}
                hostname={hostname}
                stats={adsTrackersBlocked}
                name={getLocale('thirdPartyTrackersBlocked')}
                list={data.blockedFakeResources}
                onClose={this.onOpen3rdPartyTrackersBlocked}
              />
          }
        </BlockedInfoRow>
        <BlockedInfoRow>
          <BlockedInfoRowData
            tabIndex={this.tabIndex}
            onClick={this.onOpenConnectionsUpgradedToHTTPS}
            onKeyDown={this.onOpen3rdPartyTrackersBlockedViaKeyboard}
          >
            <ArrowDownIcon />
            <BlockedInfoRowStats>{httpsUpgrades > 99 ? '99+' : httpsUpgrades}</BlockedInfoRowStats>
            <BlockedInfoRowText>{getLocale('connectionsUpgradedHTTPS')}</BlockedInfoRowText>
          </BlockedInfoRowData>
          <Toggle disabled={isBlockedListOpen} />
          {
            connectionsUpgradedOpen &&
              <StaticList
                favicon={favicon}
                hostname={hostname}
                stats={httpsUpgrades}
                name={getLocale('connectionsUpgradedHTTPS')}
                list={data.blockedFakeResources}
                onClose={this.onOpenConnectionsUpgradedToHTTPS}
              />
          }
        </BlockedInfoRow>
      </>
    )
  }
}
