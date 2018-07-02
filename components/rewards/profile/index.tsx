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
  StyledInlineImage,
  StyledTitle,
  StyledProvider,
  StyledProviderWrap,
  StyledInlineVerified
} from './style'

type Provider = 'twitter' | 'youtube' | 'twitch'

export interface Props {
  id?: string
  src?: string
  title: string
  type?: 'big' | 'small' |'minimal'
  provider: Provider
  verified?: boolean
}

const verifiedIcon = require('./assets/verified.svg')

/*
  TODO
  - add local
  - add fallback image
 */
export default class Profile extends React.PureComponent<Props, {}> {
  getProviderImage (provider: Provider) {
    return require(`./assets/${provider}.svg`)
  }

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
        <StyledImageWrapper type={type} verified={verified}>
          <StyledImage src={this.getSrc(src)} type={type} />
          {
            verified && (type === 'small' || type === 'minimal')
            ? <StyledVerified src={verifiedIcon} />
            : null
          }
        </StyledImageWrapper>
        <StyledContent type={type}>
          <StyledTitleWrap type={type}>
            {
              type === 'minimal'
              ? <StyledInlineImage src={this.getProviderImage(provider)} />
              : null
            }
            <StyledTitle type={type}>{title}</StyledTitle>
            {
              type !== 'minimal'
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
