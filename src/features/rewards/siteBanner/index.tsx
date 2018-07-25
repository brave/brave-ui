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

import Donate from '../donate/index'
import SimpleIcon from '../../../components/media/simpleIcon'
import Checkbox from '../../../components/formControls/checkbox/index'
import { getLocale } from '../../../helpers'

type Social = {type: SocialType, name: string, handler: string}
type SocialType = 'twitter' | 'youtube' | 'twitch'
type Donation = {tokens: number, converted: number, selected?: boolean}

export interface Props {
  balance: number
  donationAmounts: Donation[]
  onAmountSelection: (tokens: number) => void
  id?: string
  title?: string
  domain: string
  bgImage?: string
  logo?: string
  social?: Social[]
  currentDonation?: number
  children?: React.ReactNode
  onDonate: (amount: number, monthly: boolean) => void
  onClose?: () => void
  theme?: Theme
}

export interface Theme {
  logoBgColor: CSS.Color
}

interface State {
  monthly: boolean
}

export default class SiteBanner extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      monthly: false
    }
  }

  getLogo (logo: string | undefined, domain: string) {
    return !logo
      ? <StyledLogoText>{(domain && domain.substring(0,1)) || ''}</StyledLogoText>
      : <StyledLogoImage src={logo} />
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

  getSocial = (social?: Social[]) => {
    if (!social || social.length === 0) {
      return null
    }

    const self = this
    return social.map((item: Social) => {
      return (
        <StyledSocialItem
          key={`${self.props.id}-social-${item.type}`}
          href={self.getSocialLink(item)}
          target={'_blank'}
        >
          <StyledSocialIcon><SimpleIcon type={item.type}/></StyledSocialIcon> {item.name || item.handler}
        </StyledSocialItem>
      )
    })
  }

  getTitle (title?: string) {
    return title ? title : getLocale('welcome')
  }

  getText (children?: React.ReactNode) {
    if (!children) {
      return (
        <>
          <p>
            {getLocale('rewardsBannerText1')}
          </p>
          <p>
            {getLocale('rewardsBannerText2')}
          </p>
        </>
      )
    }

    return children
  }

  onMonthlyChange = (key: string, selected: boolean) => {
    this.setState({ monthly: selected })
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
          <StyledClose onClick={onClose}>
            <SimpleIcon type='close' theme={{ color: '#DFDFE8' }}/>
          </StyledClose>
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
                  <StyledIconRecurringBig>
                    <SimpleIcon type='monthly' theme={{ color: '#696FDC' }}/>
                  </StyledIconRecurringBig>
                  {getLocale('currentDonation', { currentDonation })}
                  <StyledRemove>
                    <StyledIconRemove><SimpleIcon type='close' theme={{ color: '#DFDFE8' }}/></StyledIconRemove>{getLocale('remove')}
                  </StyledRemove>
                </StyledRecurring>
                : null
              }
            </StyledContent>
            <StyledDonation>
              <StyledWallet>
                {getLocale('walletBalance')} <StyledTokens>{balance} {getLocale('tokens')}</StyledTokens>
              </StyledWallet>
              <Donate
                balance={balance}
                donationAmounts={donationAmounts}
                title={getLocale('donationAmount')}
                onDonate={this.onDonate}
                actionText={getLocale('sendDonation')}
                onAmountSelection={onAmountSelection}
                theme={{
                  paddingFunds: '13px 12px 13px 24px',
                  paddingSend: '16px 19px 16px 55px',
                  paddingBox: '0 19px 0 55px'
                }}
              >
                <Checkbox
                  value={{ make: this.state.monthly }}
                  onChange={this.onMonthlyChange}
                  theme={{ checkColor: '#fff', borderColor: '#a1a8f2' }}
                >
                  <div data-key='make'>
                    <StyledOption>{getLocale('makeMonthly')}</StyledOption> <StyledIconRecurring><SimpleIcon type='monthly' theme={{ color: '#696FDC' }}/></StyledIconRecurring>
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
