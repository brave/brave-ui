/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledSlider, StyledBullet } from './style'

export interface Props {
  id?: string
  disabled?: boolean
  checked?: boolean
  size?: 'large' | 'medium' | 'small'
  onClick?: () => void
  theme?: Theme
}

interface Theme {
  onColor?: CSS.Color
  offColor?: CSS.Color
}

export default class Toggle extends React.PureComponent<Props, {}> {
  render () {
    const { id, onClick, size, disabled, checked, theme } = this.props

    const props: Props = {
      id,
      disabled,
      checked,
      size: size ? size : 'medium'
    }

    if (!disabled) {
      props.onClick = onClick
    }

    return (
      <StyledWrapper {...props}>
        <StyledSlider size={props.size} />
        <StyledBullet size={props.size} checked={checked} theme={theme}/>
      </StyledWrapper>
    )
  }
}
