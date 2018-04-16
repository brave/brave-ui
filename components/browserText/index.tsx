/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import StyledBrowserText from './style'

export interface BrowserTextProps {
  id?: string
  onClick?: () => void
  text?: string | number
  // Component styles
  noSelect?: boolean
  fontSize?: string
  color?: string
  padding?: string
  bold?: boolean
}

class BrowserText extends React.PureComponent<BrowserTextProps, {}> {
  render () {
    return (
      <StyledBrowserText
        id={this.props.id}
        onClick={this.props.onClick}
        fontSize={this.props.fontSize}
        color={this.props.color}
        padding={this.props.padding}
        noSelect={this.props.noSelect}
        bold={this.props.bold}
        text={this.props.text}
      >
        { this.props.text != null ? this.props.text.toString() : null }
      </StyledBrowserText>
    )
  }
}

export default BrowserText
