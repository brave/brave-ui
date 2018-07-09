/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledLogo,
  StyledTitle,
  StyledTM,
  StyledLeft,
  StyledRight,
  StyleTitle,
  StyleText,
  StyledNotification,
  StyledContent
} from './style'
import Toggle from '../toggle';

const logo = require('./assets/bat')
const bellIcon = require('./assets/bell')

export interface Props {
  id?: string
  enabled: boolean
  onToggle: () => void
  newNotifications?: boolean
}

/*
  TODO
  - add notifications if needed
  - add local
 */
export default class MainToggle extends React.PureComponent<Props, {}> {
  render () {
    const { id, enabled, onToggle, newNotifications } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledLeft>
          <StyledLogo>{logo}</StyledLogo>
          <StyledTitle>
            Brave Rewards <StyledTM>TM</StyledTM>
          </StyledTitle>
        </StyledLeft>
        <StyledRight>
          {
            enabled
            ? <StyledNotification newNotifications={newNotifications}>
              {bellIcon}
            </StyledNotification>
            : null
          }
          <Toggle checked={enabled} onClick={onToggle} size={'large'} />
        </StyledRight>
        {
          !enabled
          ? <StyledContent>
            <StyleTitle>Why Brave Rewards…</StyleTitle>
            <StyleText>
              Do you know that you’ve been paying for the web content with your data for the digital ads?
              You didn’t have a voice in it and worse, you’re exposed to privacy and security risks. <br/>
              <b>Brave Rewards allows you to take control back.</b>
            </StyleText>
            <StyleTitle>How does it work?</StyleTitle>
            <StyleText>
              Your attention is valuable. Get paid for the ads. And pay directly the favorite content
              creators at your will. That way, they can grow and continue delivering the content that delights you.
            </StyleText>
          </StyledContent>
          : null
        }
      </StyledWrapper>
    )
  }
}
