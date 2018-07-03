/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledContent,
  StyledImageWrapper,
  StyledImage,
  StyledVerified,
  StyledTitleWrap,
  StyledTitle,
  StyledProvider,
  StyledProviderWrap,
  StyledInlineVerified
} from './style'

export type Provider = 'twitter' | 'youtube' | 'twitch'

export interface Props {
  id?: string
  src?: string
  title: string
  type?: 'big' | 'small'
  provider?: Provider
  verified?: boolean
}

const verifiedIcon = require('./assets/verified')

/*
  TODO
  - add local
  - add fallback image
 */
export default class Profile extends React.PureComponent<Props, {}> {
  getProviderName (provider: Provider) {
    switch (provider) {
      case 'youtube':
        return 'on YouTube'
      case 'twitter':
        return 'on Twitter'
      case 'twitch':
        return 'on Twitch'
    }
  }

  getSrc (src?: string) {
    if (!src) {
      return ''
    }

    return src
  }

  render () {
    const { id, type, provider, src, title, verified } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledImageWrapper>
          <StyledImage src={this.getSrc(src)} type={type} />
          {
            verified && type === 'small'
            ? <StyledVerified>{verifiedIcon}</StyledVerified>
            : null
          }
        </StyledImageWrapper>
        <StyledContent type={type}>
          <StyledTitleWrap type={type}>
            <StyledTitle type={type}>{title}</StyledTitle>
            {
              provider
              ? <StyledProvider type={type}>{this.getProviderName(provider)}</StyledProvider>
              : null
            }
          </StyledTitleWrap>
          {
            verified && type === 'big'
            ? <StyledProviderWrap>
              <StyledInlineVerified src={verifiedIcon} /> Brave Verified Publisher
            </StyledProviderWrap>
            : null
          }
        </StyledContent>
      </StyledWrapper>
    )
  }
}
