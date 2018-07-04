/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import {
  StyledWrapper,
  StyledDonationTitle,
  StyledSend,
  StyledIconSend,
  StyledIconFace,
  StyledFunds,
  StyledFundsText
} from './style'

import Amount from '../amount';

const send = require('./assets/send')
const sadFace = require('./assets/sadFace')

type Donation = {tokens: number, converted: number, selected?: boolean}

export interface Props {
  id?: string
  actionText: string
  title: string
  balance: number
  donationAmounts: Donation[]
  donateType?: 'big' | 'small'
  children?: React.ReactNode
  onDonate: (amount: number) => void
  onAmountSelection?: (tokens: number) => void
  theme?: Theme
}

interface State {
  missingFunds: boolean
  amount: number
}

export interface Theme {
  paddingSend?: CSS.PaddingProperty<1>
  paddingFunds?: CSS.PaddingProperty<1>
  paddingBox?: CSS.PaddingProperty<1>
  sendBgColor?: CSS.Color
  disabledSendColor?: CSS.Color
}

export default class Donate extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      amount: this.getCurrentAmount(this.props.donationAmounts),
      missingFunds: false
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.balance !== prevProps.balance ||
      this.props.donationAmounts !== prevProps.donationAmounts
    ) {
      this.validateAmount(this.props.balance)
    }

    if (this.props.donationAmounts !== prevProps.donationAmounts) {
      this.setState({amount: this.getCurrentAmount(this.props.donationAmounts)})
    }
  }

  getCurrentAmount (amounts: Donation[]) {
    const amount = amounts && amounts.find((amount: Donation) => !!amount.selected)
    return amount && amount.tokens || 0
  }

  validateDonation = () => {
    if (this.validateAmount(this.props.balance)) {
      return
    }

    if (this.props.onDonate) {
      this.props.onDonate(this.state.amount)
    }
  }

  validateAmount (balance: number, tokens?:number) {
    if (tokens == null) {
      tokens = this.state.amount
    }

    const valid = tokens > balance
    this.setState({missingFunds: valid})
    return valid
  }

  onAmountChange = (tokens: number) => {
    this.setState({amount: tokens})
    this.validateAmount(this.props.balance, tokens)

    if (this.props.onAmountSelection) {
      this.props.onAmountSelection(tokens)
    }
  }

  render () {
    const { id, donationAmounts, actionText, children, theme, title } = this.props
    const disabled = this.state.amount === 0

    const donateType = this.props.donateType ? this.props.donateType : 'big'
    const sendColor = disabled ? (theme && theme.disabledSendColor ? theme.disabledSendColor : '#3e45b2') : '#a1a8f2'

    return <>
      <StyledWrapper id={id} theme={theme}>
        <StyledDonationTitle>{title}</StyledDonationTitle>
        {
          donationAmounts && donationAmounts.map((donation: Donation) => {
            return <Amount
              key={`${id}-${donation.tokens}`}
              amount={donation.tokens}
              selected={donation.selected}
              onClick={this.onAmountChange}
              converted={donation.converted}
              type={donateType}
            />
          })
        }
        {children}
      </StyledWrapper>
      {
        this.state.missingFunds
          ? <StyledFunds theme={theme}>
            <StyledIconFace>{sadFace}</StyledIconFace>
            <StyledFundsText>Not enough tokens. Please <a href="#">add funds</a>.</StyledFundsText>
          </StyledFunds>
          : <StyledSend disabled={disabled} onClick={this.validateDonation()} theme={theme}>
            <StyledIconSend>{send(sendColor)}</StyledIconSend>{actionText}
          </StyledSend>
      }
    </>
  }
}
