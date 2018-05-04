/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import StyledTextLabel from './style'

export interface TextLabelProps {
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

class TextLabel extends React.PureComponent<TextLabelProps, {}> {
  render () {
    return (
      <StyledTextLabel
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
      </StyledTextLabel>
    )
  }
}

export default TextLabel
