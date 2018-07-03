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
  StyledRight
} from './style'
import Toggle from '../toggle';

const logo = require('./assets/bat')

export interface Props {
  id?: string
  enabled: boolean
  onToggle: () => void
}

/*
  TODO
  - add notifications if needed
 */
export default class MainToggle extends React.PureComponent<Props, {}> {
  render () {
    const { id, enabled, onToggle } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledLeft>
          <StyledLogo>{logo}</StyledLogo>
          <StyledTitle>
            Brave Rewards <StyledTM>TM</StyledTM>
          </StyledTitle>
        </StyledLeft>
        <StyledRight>
          <Toggle checked={enabled} onClick={onToggle} />
        </StyledRight>
      </StyledWrapper>
    )
  }
}
