/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledContent } from './style'

export interface Props {
  text: string
  size: Size
  color: Color
  onClick: () => void
  id?: string
  disabled?: boolean
  icon?: {image: string, position: 'left' | 'right'}
}

export type Color = 'brand' | 'action'
export type Size = 'large' | 'medium' | 'small'

/*
  TODO
  - add icon option
 */
export default class ButtonPrimary extends React.PureComponent<Props, {}> {
  render () {
    const { size, color, disabled } = this.props
    return (
      <StyledWrapper  {...this.props}>
          <StyledContent size={size} color={color} disabled={disabled}>
            {this.props.text}
          </StyledContent>
      </StyledWrapper>
    )
  }
}
