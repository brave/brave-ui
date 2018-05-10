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
  size?: string
  color?: string
  padding?: string
  weight?: 'bold' | 'normal' | 'thin'
}

class TextLabel extends React.PureComponent<TextLabelProps, {}> {
  render () {
    const { id, onClick, size, color, padding, noSelect, weight, text } = this.props
    return (
      <StyledTextLabel
        id={id}
        onClick={onClick}
        size={size}
        color={color}
        padding={padding}
        noSelect={noSelect}
        weight={weight}
        text={text}
      >
        { text && text.toString() }
      </StyledTextLabel>
    )
  }
}

export default TextLabel
