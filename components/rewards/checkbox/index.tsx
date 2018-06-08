/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledCheckboxWrapper, StyledCheckboxSlider, StyledCheckboxBullet } from './style'

export interface CheckboxProps {
  id?: string,
  disabled?: boolean,
  checked?: boolean,
  size?: 'large' | 'medium' | 'small',
  onClick?: () => void
}

class Checkbox extends React.PureComponent<CheckboxProps, {}> {
  render () {
    const { id, onClick, size, disabled, checked } = this.props

    const props: CheckboxProps = {
      id,
      disabled: disabled ? disabled : false,
      size: size ? size : 'medium',
      checked: checked ? checked : false
    }

    if (!disabled) {
      props.onClick = onClick
    }

    return (
      <StyledCheckboxWrapper {...props}>
        <StyledCheckboxSlider size={props.size} />
        <StyledCheckboxBullet size={props.size} checked={props.checked} />
      </StyledCheckboxWrapper>
    )
  }
}

export default Checkbox
