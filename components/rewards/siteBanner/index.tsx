/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
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
  StyledLogoImage,
  StyledCenter,
  StyledIconRecurringBig,
  StyledIconRemove,
  StyledSocialItem,
  StyledSocialIcon,
  StyledOption,
  StyledIconRecurring,
  StyledLogoText
} from './style'

import Donate from '../donate';
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
  onClose?: () => void
  onAmountSelection: (tokens: number) => void
  theme?: Theme
}

export interface Theme {
  logoBgColor: CSS.Color
}

interface State {
  monthly: boolean
}

const close = require('./assets/close')
const monthly = require('./assets/monthly')

/*
  TODO
  - add local
 */
export default class SiteBanner extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      monthly: false
    }
  }

  getLogo (logo: string | undefined, domain: string) {
    if (!logo) {
      return <StyledLogoText>{(domain && domain.substring(0,1)) || ''}</StyledLogoText>
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
      return <StyledSocialItem key={`s-${item.type}`} href={this.getSocialLink(item)} target={'_blank'}>
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

  onDonate = (amount: number) => {
    if (this.props.onDonate) {
      this.props.onDonate(amount, this.state.monthly)
    }
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
      domain,
      onAmountSelection,
      theme
    } = this.props

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
                <StyledLogoBorder padding={!logo} theme={theme}>
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
              <Donate
                balance={balance}
                donationAmounts={donationAmounts}
                title={'Donation amount'}
                onDonate={this.onDonate}
                actionText={'Send my donation'}
                onAmountSelection={onAmountSelection}
                theme={{
                  paddingFunds: '14px 12px 16px 24px',
                  paddingSend: '16px 19px 16px 55px',
                  paddingBox: '0 19px 0 55px'
                }}
              >
                <Checkbox
                  value={{make: false}}
                  onChange={this.onMonthlyChange.bind(this)}
                  theme={{checkColor: '#fff', borderColor: '#a1a8f2'}}
                >
                  <div data-key='make'>
                    <StyledOption>Make this monthly</StyledOption> <StyledIconRecurring>{monthly()}</StyledIconRecurring>
                  </div>
                </Checkbox>
              </Donate>
            </StyledDonation>
          </StyledContentWrapper>
        </StyledBanner>
      </StyledWrapper>
    )
  }
}
