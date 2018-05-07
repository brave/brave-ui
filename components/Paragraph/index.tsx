
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import StyledParagraph from './style'

export interface ParagraphProps {
  id?: string,
  size?: string,
  color?: string,
  weight?: string,
  italic?: boolean,
  text?: string
}

/**
 * Implementor notes:
 * Paragraph is similar to TextLabel but instead of `white-space: no-wrap`
 * it allows the container to shrink and add to its height
 * in smaller screens instead of ellipsing.
 */

class Paragraph extends React.PureComponent<ParagraphProps, {}> {
  render () {
    const { id, size, color, weight = 'normal', italic, text } = this.props
    return (
      <StyledParagraph
        id={id}
        size={size}
        color={color}
        weight={weight}
        italic={italic}
      >
        {text && text.toString()}
      </StyledParagraph>
    )
  }
}

export default Paragraph
