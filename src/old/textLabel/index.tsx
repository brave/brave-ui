/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import StyledTextLabel from './style'

export interface TextLabelTheme {
  fontSize?: string
  color?: string
  padding?: string
  fontWeight?: string
  lineHeight?: string
  cursor?: string
}

export interface TextLabelProps {
  id?: string
  onClick?: (e: any) => void
  customStyle?: TextLabelTheme
  text?: string | number
}

class TextLabel extends React.PureComponent<TextLabelProps, {}> {
  render () {
    const { id, onClick, customStyle, text } = this.props
    return (
      <StyledTextLabel id={id} onClick={onClick} customStyle={customStyle}>
        {text && text.toString()}
      </StyledTextLabel>
    )
  }
}

export default TextLabel
