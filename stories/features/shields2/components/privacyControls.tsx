/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { BlockedInfo } from '../../../../src/features/shields2'
import { Toggle, SelectBox } from '../../../../src/features/shields'

// Group Components
import StaticList from './list/static'
import DynamicList from './list/dynamic'

// Fake data
import { getLocale } from '../fakeLocale'
import data from '../fakeData'

interface Props {
  favicon: string
  hostname: string
  setBlockedListOpen: () => void
  isBlockedListOpen: boolean
}

interface State {
  deviceRecognitionOpen: boolean
  scriptsBlockedOpen: boolean
}

export default class PrivacyControls extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      deviceRecognitionOpen: false,
      scriptsBlockedOpen: false
    }
  }

  get tabIndex () {
    const { isBlockedListOpen } = this.props
    return isBlockedListOpen ? -1 : 0
  }

  onOpenScriptsBlockedOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget) {
      event.currentTarget.blur()
    }
    this.props.setBlockedListOpen()
    this.setState({ scriptsBlockedOpen: !this.state.scriptsBlockedOpen })
  }

  onOpenScriptsBlockedOpenViaKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event) {
      if (event.key === ' ') {
        event.currentTarget.blur()
        this.props.setBlockedListOpen()
        this.setState({ scriptsBlockedOpen: !this.state.scriptsBlockedOpen })
      }
    }
  }

  onOpenDeviceRecognitionOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget) {
      event.currentTarget.blur()
    }
    this.props.setBlockedListOpen()
    this.setState({ deviceRecognitionOpen: !this.state.deviceRecognitionOpen })
  }

  onOpenDeviceRecognitionOpenViaKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event) {
      if (event.key === ' ') {
        event.currentTarget.blur()
        this.props.setBlockedListOpen()
        this.setState({ deviceRecognitionOpen: !this.state.deviceRecognitionOpen })
      }
    }
  }

  render () {
    const { favicon, hostname, isBlockedListOpen } = this.props
    const { deviceRecognitionOpen, scriptsBlockedOpen } = this.state
    return (
      <>
        <BlockedInfo>
          <div
            tabIndex={this.tabIndex}
            onClick={this.onOpenScriptsBlockedOpen}
            onKeyDown={this.onOpenScriptsBlockedOpenViaKeyboard}
          >
            <span>V</span>
            <span>123123</span>
            <span>{getLocale('scriptsBlocked')}</span>
          </div>
          <Toggle disabled={isBlockedListOpen} />
          {
            scriptsBlockedOpen &&
              <DynamicList
                favicon={favicon}
                hostname={hostname}
                stats={'222'}
                name={getLocale('scriptsOnThisSite')}
                list={data.blockedScriptsResouces}
                onClose={this.onOpenScriptsBlockedOpen}
              />
          }
        </BlockedInfo>
        <BlockedInfo>
          <div />
          <div />
          <SelectBox disabled={isBlockedListOpen}>
            <option value='block_third_party'>{getLocale('thirdPartyCookiesBlocked')}</option>
            <option value='block'>{getLocale('allCookiesBlocked')}</option>
            <option value='allow'>{getLocale('allCookiesAllowed')}</option>
          </SelectBox>
        </BlockedInfo>
        <BlockedInfo>
          <div
            tabIndex={this.tabIndex}
            onClick={this.onOpenDeviceRecognitionOpen}
            onKeyDown={this.onOpenDeviceRecognitionOpenViaKeyboard}
          >
            <span>V</span>
            <span>123123</span>
          </div>
          <SelectBox disabled={isBlockedListOpen}>
            <option value='block_third_party'>{getLocale('thirdPartyFingerprintingBlocked')}</option>
            <option value='block'>{getLocale('allFingerprintingBlocked')}</option>
            <option value='allow'>{getLocale('allFingerprintingAllowed')}</option>
          </SelectBox>
          {
            deviceRecognitionOpen &&
              <StaticList
                favicon={favicon}
                hostname={hostname}
                stats={'222'}
                name={getLocale('deviceRecognitionAttempts')}
                list={data.blockedFakeResources}
                onClose={this.onOpenDeviceRecognitionOpen}
              />
          }
        </BlockedInfo>
      </>
    )
  }
}
