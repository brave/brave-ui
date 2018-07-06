/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledContent } from './style'

export interface Props {
  text: string
  type: Type
  size: Size
  color: Color
  onClick: () => void
  id?: string
  disabled?: boolean
  icon?: {image: string, position: 'left' | 'right'}
}

export type Type = 'primary' | 'secondary' | 'ghost' | 'cta'
export type Color = 'brand' | 'action' | 'subtle'
export type Size = 'xlarge' | 'large' | 'medium' | 'small'

/*
  TODO
  - add icon option
  - add hover and pressed state
 */
export default class Button extends React.PureComponent<Props, {}> {
  render () {

    return (
      <StyledWrapper {...this.props}>
          <StyledContent {...this.props}>
            {this.props.text}
          </StyledContent>
      </StyledWrapper>
    )
  }
}
