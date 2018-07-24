/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledIcon } from './style'

export interface Props {
  text: string
  size: Size
  color: Color
  onClick?: () => void
  id?: string
  disabled?: boolean
  icon?: {image: React.ReactNode, position: 'left' | 'right'}
}

export type Color = 'brand' | 'action' | 'subtle'
export type Size = 'large' | 'medium' | 'small'

export default class ButtonSecondary extends React.PureComponent<Props, {}> {
  render () {
    const { icon, text } = this.props

    return (
      <StyledWrapper {...this.props}>
          {
            icon && icon.position === 'left'
            ? <StyledIcon icon={icon}>{icon.image}</StyledIcon>
            : null
          }
          {text}
          {
            icon && icon.position === 'right'
            ? <StyledIcon icon={icon}>{icon.image}</StyledIcon>
            : null
          }
      </StyledWrapper>
    )
  }
}
