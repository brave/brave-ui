/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledSlider, StyledBullet, StyleToggle } from './style'

export interface Props {
  onToggle?: (e: React.MouseEvent<HTMLDivElement>) => void
  id?: string
  disabled?: boolean
  checked?: boolean
  size?: 'default' | 'small'
  testId?: string
}

export default class Toggle extends React.PureComponent<Props, {}> {
  static defaultProps = {
    size: 'default'
  }

  render () {
    const { id, onToggle, disabled, checked, size, testId } = this.props

    return (
      <StyledWrapper id={id} >
        <StyleToggle
          onClick={!disabled ? onToggle : undefined}
          data-test-id='toggle'
          data-test-id2={testId}
          data-toggled={checked}
          size={size}
          disabled={disabled}
          // tabIndex={0}
        >
          <StyledSlider
            size={size}
            disabled={disabled}
            checked={checked}
          />
          <StyledBullet
            size={size}
            checked={checked}
            disabled={disabled}
          />
        </StyleToggle>
      </StyledWrapper>
    )
  }
}
