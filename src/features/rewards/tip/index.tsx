/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledTitle, StyledAllow, StyledAllowText, StyledClose, StyledAllowToggle } from './style'
import Donate from '../donate/index'
import Toggle from '../../../components/formControls/toggle/index'
import { getLocale } from '../../../helpers'
import SimpleIcon from '../../../components/media/simpleIcon'

type Donation = {tokens: number, converted: number, selected?: boolean}

export interface Props {
  allow: boolean
  provider: string
  balance: number
  donationAmounts: Donation[]
  onAllow: (allow: boolean) => void
  onDonate: (amount: number, allow: boolean) => void
  onAmountSelection?: (tokens: number) => void
  onClose: () => void
  id?: string
  title?: string
}

export default class Tip extends React.PureComponent<Props, {}> {
  onDonate = (amount: number) => {
    if (this.props.onDonate) {
      this.props.onDonate(amount, this.props.allow)
    }
  }

  onToggle = () => {
    if (this.props.onAllow) {
      this.props.onAllow(!this.props.allow)
    }
  }

  onAmountChange = (tokens: number) => {
    if (this.props.onAmountSelection) {
      this.props.onAmountSelection(tokens)
    }
  }

  render () {
    const { id, title, balance, donationAmounts, allow, onClose, provider } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledClose onClick={onClose}>
          <SimpleIcon type='close' theme={{ color: '#DFDFE8' }}/>
        </StyledClose>
        <StyledTitle>Send my tip to</StyledTitle>
        <Donate
          title={title || ''}
          actionText={getLocale('sendTip')}
          balance={balance}
          donationAmounts={donationAmounts}
          onAmountSelection={this.onAmountChange}
          onDonate={this.onDonate}
          donateType={'small'}
          theme={{
            sendBgColor: '#392dd1',
            paddingBox: '0 0 0 23px',
            paddingSend: '16px 0 16px 51px',
            paddingFunds: '16px 0 17px 25px',
            disabledSendColor: '#1a22a8'
          }}
        >
          <StyledAllow>
            <StyledAllowText>{getLocale('allowTip')} {provider}</StyledAllowText>
            <StyledAllowToggle>
              <Toggle
                onToggle={this.onToggle}
                checked={allow}
                theme={{ onColor: '#fb542b', offColor: '#fb542b' }}
                size={'small'}
              />
            </StyledAllowToggle>
          </StyledAllow>
        </Donate>
      </StyledWrapper>
    )
  }
}
