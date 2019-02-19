/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import {
  BlockedInfoRow,
  BlockedInfoRowForSelect,
  BlockedInfoRowSingle,
  BlockedInfoRowData,
  BlockedInfoRowDataForSelect,
  ArrowDownIcon,
  BlockedInfoRowStats,
  BlockedInfoRowText
} from '../../../../src/features/shields2'
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
  scriptsBlocked: number
  fingerprintingBlocked: number
}

interface State {
  deviceRecognitionOpen: boolean
  scriptsBlockedOpen: boolean
  scriptsBlockedEnabled: boolean
}

export default class PrivacyControls extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      deviceRecognitionOpen: false,
      scriptsBlockedOpen: false,
      scriptsBlockedEnabled: true
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

  onChangeScriptsBlockedEnabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ scriptsBlockedEnabled: event.target.checked })
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
    const { favicon, hostname, isBlockedListOpen, scriptsBlocked, fingerprintingBlocked } = this.props
    const {
      deviceRecognitionOpen,
      scriptsBlockedEnabled,
      scriptsBlockedOpen
    } = this.state
    return (
      <>
        <BlockedInfoRow>
          <BlockedInfoRowData
            tabIndex={this.tabIndex}
            onClick={this.onOpenScriptsBlockedOpen}
            onKeyDown={this.onOpenScriptsBlockedOpenViaKeyboard}
          >
            <ArrowDownIcon />
            <BlockedInfoRowStats>{scriptsBlocked > 99 ? '99+' : scriptsBlocked}</BlockedInfoRowStats>
            <BlockedInfoRowText>{getLocale('scriptsBlocked')}</BlockedInfoRowText>
          </BlockedInfoRowData>
          <Toggle
            disabled={isBlockedListOpen}
            checked={scriptsBlockedEnabled}
            onChange={this.onChangeScriptsBlockedEnabled}
          />
          {
            scriptsBlockedOpen &&
              <DynamicList
                favicon={favicon}
                hostname={hostname}
                name={getLocale('scriptsOnThisSite')}
                list={data.blockedScriptsResouces}
                onClose={this.onOpenScriptsBlockedOpen}
              />
          }
        </BlockedInfoRow>
        <BlockedInfoRowSingle>
            <SelectBox disabled={isBlockedListOpen}>
              <option value='block_third_party'>{getLocale('thirdPartyCookiesBlocked')}</option>
              <option value='block'>{getLocale('allCookiesBlocked')}</option>
              <option value='allow'>{getLocale('allCookiesAllowed')}</option>
            </SelectBox>
        </BlockedInfoRowSingle>
        <BlockedInfoRowForSelect>
          <BlockedInfoRowDataForSelect
            tabIndex={this.tabIndex}
            onClick={this.onOpenDeviceRecognitionOpen}
            onKeyDown={this.onOpenDeviceRecognitionOpenViaKeyboard}
          >
            <ArrowDownIcon />
            <BlockedInfoRowStats>{fingerprintingBlocked > 99 ? '99+' : fingerprintingBlocked}</BlockedInfoRowStats>
          </BlockedInfoRowDataForSelect>
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
                stats={fingerprintingBlocked}
                name={getLocale('deviceRecognitionAttempts')}
                list={data.blockedFakeResources}
                onClose={this.onOpenDeviceRecognitionOpen}
              />
          }
        </BlockedInfoRowForSelect>
      </>
    )
  }
}
