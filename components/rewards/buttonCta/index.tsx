/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledContent, StyledIcon } from './style'

export interface Props {
  text: string
  color: Color
  onClick: () => void
  id?: string
  disabled?: boolean
  icon?: {image: React.ReactNode, position: 'left' | 'right'}
}

export type Color = 'brand' | 'action'

export default class ButtonCta extends React.PureComponent<Props, {}> {
  render () {
    const { color, disabled, icon, text } = this.props
    return (
      <StyledWrapper {...this.props}>
          <StyledContent color={color} disabled={disabled}>
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
          </StyledContent>
      </StyledWrapper>
    )
  }
}
