
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import StyledParagraph, { StyleProps } from './style'

export type ParagraphProps = StyleProps & {
  id?: string
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
    const { id, customStyle, text } = this.props
    return (
      <StyledParagraph id={id} customStyle={customStyle}>
        {text && text.toString()}
      </StyledParagraph>
    )
  }
}

export default Paragraph
