/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledTitle, StyledContent } from './style'

interface Props {
  id?: string
}

/*
  TODO
  - add local
 */
export default class PanelOff extends React.PureComponent<Props, {}> {
  render () {

    return (
      <StyledWrapper id={this.props.id}>
        <StyledTitle>Get Rewarded for Browsing!</StyledTitle>
        <StyledContent>
          Earn tokens for your attention to ads and pay it forward to support content creators you value!
        </StyledContent>
      </StyledWrapper>
    )
  }
}
