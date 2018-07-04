/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledDonation,
  StyledContent,
  StyledBanner,
  StyledBannerImage,
  StyledClose,
  StyledContentWrapper,
  StyledLogoWrapper,
  StyledLogoBorder,
  StyledTextWrapper,
  StyledTitle,
  StyledText,
  StyledRecurring,
  StyledRemove,
  StyledWallet,
  StyledTokens,
  StyledDonationTitle,
  StyledSend,
  StyledIconSend,
  StyledLogoImage,
  StyledCenter,
  StyledIconRecurring,
  StyledIconRecurringBig,
  StyledIconFace,
  StyledIconRemove,
  StyledOption,
  StyledFunds,
  StyledSocialItem,
  StyledSocialIcon
} from './style'
import Amount from '../amount';
import Checkbox from '../checkbox';

type Social = {type: SocialType, name: string, handler: string}
type SocialType = 'twitter' | 'youtube' | 'twitch'
type Donation = {tokens: number, converted: number, selected?: boolean}

export interface Props {
  id?: string
  title?: string
  domain: string
  bgImage?: string
  logo?: string
  social?: Social[]
  balance: number
  currentDonation?: number
  donationAmounts: Donation[]
  children?: React.ReactNode
  onDonate: (amount: number, monthly: boolean) => void
  onAmountSelection: (tokens: number) => void
  onClose?: () => void
}

interface State {
  monthly: boolean
  missingFunds: boolean
  amount: number
}

const close = require('./assets/close')
const monthly = require('./assets/monthly')
const send = require('./assets/send')
const sadFace = require('./assets/sadFace')

/*
  TODO
  - add local
 */
export default class SiteBanner extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    const amounts = this.props.donationAmounts
    const amount = amounts && amounts.find((amount: Donation) => !!amount.selected)
    this.state = {
      monthly: false,
      amount: amount && amount.tokens || 0,
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
  }

  getLogo (logo: string | undefined, domain: string) {
    if (!logo) {
      return (domain && domain.substring(0,1)) || ''
    }

    return <StyledLogoImage src={logo} />
  }

  getSocialLink (item: Social) {
    switch (item.type) {
      case 'twitter':
        return `https://twitter.com/${item.handler}`
      case 'youtube':
        return `https://www.youtube.com/channel/${item.handler}`
      case 'twitch':
        return `https://www.twitch.tv/${item.handler}`
    }

    return ''
  }

  getSocial (social?: Social[]) {
    if (!social || social.length === 0) {
      return null
    }

    return social.map((item: Social) => {
      const icon = require(`./assets/${item.type}`)
      return <StyledSocialItem href={this.getSocialLink(item)} target={'_blank'}>
        <StyledSocialIcon>{icon}</StyledSocialIcon> {item.name || item.handler}
      </StyledSocialItem>
    })
  }

  getTitle (title?: string) {
    if (!title) {
      return 'Welcome!'
    }

    return title
  }

  getText (children?: React.ReactNode) {
    if (!children) {
      return <>
        <p>
          Thanks for stopping by. We joined Brave’s vision of protecting your privacy because
          we believe that fans like you would support us in our effort to keep the web a
          clean and safe place to be.
        </p>
        <p>
          Your donation is much appreciated and it encourages us to continue to improve our content.
        </p>
      </>
    }

    return children
  }

  onMonthlyChange (key: string, selected: boolean) {
    this.setState({monthly: selected})
  }

  validateAmount (balance: number, tokens?:number) {
    if (tokens == null) {
      tokens = this.state.amount
    }
    const valid = tokens > balance
    this.setState({missingFunds: valid})
    return valid
  }

  validateDonation = () => {
    if (this.validateAmount(this.props.balance)) {
      return
    }

    if (this.props.onDonate) {
      this.props.onDonate(this.state.amount, this.state.monthly)
    }
  }

  onAmountChange = (tokens: number) => {
    this.setState({amount: tokens})
    this.validateAmount(this.props.balance, tokens)
    this.props.onAmountSelection(tokens)
  }

  render () {
    const {
      id,
      bgImage,
      onClose,
      logo,
      social,
      children,
      title,
      currentDonation,
      balance,
      donationAmounts,
      domain
    } = this.props

    const disabled = this.state.amount === 0

    return (
      <StyledWrapper id={id}>
        <StyledBanner>
          <StyledClose onClick={onClose}>{close}</StyledClose>
          <StyledBannerImage bgImage={bgImage}>
            <StyledCenter>
              {domain}
            </StyledCenter>
          </StyledBannerImage>
          <StyledContentWrapper>
            <StyledContent>
              <StyledLogoWrapper>
                <StyledLogoBorder padding={!logo}>
                  {this.getLogo(logo, domain)}
                </StyledLogoBorder>
                {this.getSocial(social)}
              </StyledLogoWrapper>
              <StyledTextWrapper>
                <StyledTitle>{this.getTitle(title)}</StyledTitle>
                <StyledText>{this.getText(children)}</StyledText>
              </StyledTextWrapper>
              {
                currentDonation && !isNaN(currentDonation) && currentDonation > 0
                ? <StyledRecurring>
                  <StyledIconRecurringBig>{monthly('#696fdc')}</StyledIconRecurringBig>
                  You're currently donating {currentDonation} BAT to this site every month.
                  <StyledRemove>
                    <StyledIconRemove>{close}</StyledIconRemove>remove
                  </StyledRemove>
                  </StyledRecurring>
                : null
              }
            </StyledContent>
            <StyledDonation>
              <StyledWallet>
                wallet balance <StyledTokens>{balance} tokens</StyledTokens>
              </StyledWallet>
              <StyledDonationTitle>Donation amount</StyledDonationTitle>
              {
                donationAmounts && donationAmounts.map((donation: Donation) => {
                  return <Amount
                    amount={donation.tokens}
                    selected={donation.selected}
                    onClick={this.onAmountChange}
                    converted={donation.converted}
                    type={'big'}
                  />
                })
              }
              <Checkbox value={{make: false}} onChange={this.onMonthlyChange} theme={{checkColor: '#fff', borderColor: '#a1a8f2'}}>
                <div data-key='make'>
                  <StyledOption>Make this monthly</StyledOption> <StyledIconRecurring>{monthly()}</StyledIconRecurring>
                </div>
              </Checkbox>
              {
                this.state.missingFunds
                ? <StyledFunds>
                  <StyledIconFace>{sadFace}</StyledIconFace> Not enough tokens. Please <a href="#">add funds</a>.
                </StyledFunds>
                : <StyledSend disabled={disabled} onClick={this.validateDonation()}>
                  <StyledIconSend>{send(disabled ? '#3e45b2' : '#a1a8f2')}</StyledIconSend> Send my donation
                </StyledSend>
              }
            </StyledDonation>
          </StyledContentWrapper>
        </StyledBanner>
      </StyledWrapper>
    )
  }
}
