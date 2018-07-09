/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledTitle, StyledContent } from './style'

const coins = require('./assets/coins')

interface Props {
  id?: string
}

/*
  TODO
  - add local
 */
export default class PanelEmpty extends React.PureComponent<Props, {}> {
  render () {

    return (
      <StyledWrapper id={this.props.id}>
        {coins}
        <StyledTitle>Sadly, no tokens yet.</StyledTitle>
        <StyledContent>
          <b>3 ways to fill your wallet:</b><br/>
          • You can add funds. <br/>
          • You can earn tokens from Brave Ads.<br/>
          • Occasionally, you will also receive  token grants from Brave. So keep an eye out for the alert!
        </StyledContent>
      </StyledWrapper>
    )
  }
}
