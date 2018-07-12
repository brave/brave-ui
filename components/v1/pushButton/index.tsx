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
import { StyledPushButton, StyledPushButtonLink } from './style'

export interface PushButtonTheme {
  minWidth?: string,
  minHeight?: string,
  fontSize?: string,
  textTransform?: string
}

export interface PushButtonProps {
  id?: string,
  color?: string,
  size?: 'small'| 'medium' | 'large'
  disabled?: boolean,
  onClick?: (e: any) => void,
  theme?: PushButtonTheme,
  children?: React.ReactNode
}

class PushButton extends React.PureComponent<PushButtonProps, {}> {
  render () {
    const { id, color, size, theme, onClick, disabled, children } = this.props
    return (
      <StyledPushButton
        id={id}
        color={color ? color : 'default'}
        size={size ? size : 'medium'}
        theme={theme}
        onClick={onClick}
        disabled={disabled ? disabled : false}
      >
        {children}
      </StyledPushButton>
    )
  }
}

export interface PushButtonLinkProps {
  id?: string,
  color?: string,
  size?: 'small'| 'medium' | 'large'
  disabled?: boolean,
  href?: string,
  target?: '_blank' | '_parent' | '_self' | '_top',
  theme?: PushButtonTheme,
  children?: React.ReactNode
}

class PushButtonLink extends React.PureComponent<PushButtonLinkProps, {}> {
  render () {
    const { id, color, size, theme, href, target, disabled, children } = this.props
    return (
      <StyledPushButtonLink
        id={id}
        color={color ? color : 'default'}
        size={size ? size : 'medium'}
        theme={theme}
        href={href}
        target={target}
        disabled={disabled ? disabled : false}
        rel='noreferrer noopener'
      >
        {children}
      </StyledPushButtonLink>
    )
  }
}

export {
  PushButton,
  PushButtonLink
}
