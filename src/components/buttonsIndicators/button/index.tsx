/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  StyledText,
  StyledIcon
} from './style'

export interface Props {
  text: string
  size?: Size
  type?: Type
  brand?: Brand
  level?: Level
  main?: boolean
  onClick?: () => void
  id?: string
  disabled?: boolean
  icon?: {image: React.ReactNode, position: 'before' | 'after'}
  className?: string
}

export type Level = 'primary' | 'secondary' | 'tertiary'
export type Type = 'default' | 'accent' | 'warn' | 'subtle'
export type Brand = 'brave' | 'rewards'
export type Size = 'call-to-action' | 'large' | 'medium' | 'small'

export default class ThemedButton extends React.PureComponent<Props, {}> {
  static displayName = 'Button'

  static defaultProps = {
    brand: 'brave',
    size: 'medium',
    type: 'default',
    level: 'primary',
    main: false
  }

  getButtonComponent (): any {
    switch (this.props.level) {
      case 'primary':
        return PrimaryButton
      case 'secondary':
        return SecondaryButton
      case 'tertiary':
        return TertiaryButton
    }
    throw new Error(`Unknown component level: ${this.props.level || '[undefined]'}`)
  }

  render () {
    // separate DOM-related props out of props we want to pass to all children
    const { disabled, className, onClick, id, ...deepProps } = this.props
    const { icon, text } = deepProps
    if (!onClick && !disabled) {
      console.warn('Button component not provided an onClick handler as a prop')
    }
    let ButtonComponent = this.getButtonComponent()
    return (
      <ButtonComponent id={id} className={className} onClick={onClick} disabled={disabled} {...deepProps}>
        {
          text
          ? <StyledText {...deepProps}>
              {text}
            </StyledText>
          : null
        }
        {
          icon && icon.image
          ? <StyledIcon {...deepProps}>
              {icon.image}
            </StyledIcon>
          : null
        }
      </ButtonComponent>
    )
  }
}
