/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Implementator notes:
 * This file is the home of default, primary and secondary icons
 * There are other several buttons that may benefit
 * from it, which is still an early draft.
 *
 * Plan is to make the component easy to change, so if your
 * addition requires a lot of changes, consider creating another
 * component using this as a boilerlate
 */

import * as React from 'react'
import StyledPushButton from './style'

export interface PushButtonTheme {
  minWidth?: string
  minHeight?: string
  fontSize?: string
}

export interface PushButtonProps {
  id?: string
  color?: string
  disabled?: boolean
  onClick?: (e: any) => void
  customStyle?: PushButtonTheme
  children?: React.ReactNode
}

class PushButton extends React.PureComponent<PushButtonProps, {}> {
  render () {
    const { id, color, customStyle, onClick, disabled, children } = this.props
    return (
      <StyledPushButton
        id={id}
        color={color ? color : 'default'}
        customStyle={customStyle}
        onClick={onClick}
        disabled={disabled ? disabled : false}
      >
        {children}
      </StyledPushButton>
    )
  }
}

export default PushButton
