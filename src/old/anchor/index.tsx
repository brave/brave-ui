/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import StyledAnchor from './style'

export interface AnchorTheme {
  textDecoration?: string
  color?: string
  fontSize?: string
  userSelect?: string
}

export interface AnchorProps {
  id?: string
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  text?: string | number
  customStyle?: AnchorTheme
}

class Anchor extends React.PureComponent<AnchorProps, {}> {
  render () {
    const { id, href, target, customStyle, text } = this.props

    return (
      <StyledAnchor
        id={id}
        href={href}
        target={target}
        customStyle={customStyle}
        rel='noreferrer noopener'
      >
        {
          text && text.toString()
        }
      </StyledAnchor>
    )
  }
}

export default Anchor
