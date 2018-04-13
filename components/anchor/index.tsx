/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledAnchor } from './style'

export interface AnchorProps {
  id?: string,
  href: string
  noStyle?: boolean
  target?: '_blank' | '_parent' | '_self' | '_top'
  text?: string | number
}

class Anchor extends React.PureComponent<AnchorProps, {}> {
  render () {
    return (
      <StyledAnchor
        id={this.props.id}
        noStyle={this.props.noStyle ? this.props.noStyle : false}
        href={this.props.href}
        target={this.props.target}
        rel='noreferrer noopener'
      >
        {
          this.props.text != null
            ? this.props.text.toString()
            : null
        }
      </StyledAnchor>
    )
  }
}

export default Anchor
