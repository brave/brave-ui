/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledLabel } from './style'

export type Type = 'dark' | 'light'

export interface Props {
  id?: string
  text: React.ReactNode
  children: React.ReactNode
  type?: Type
  disabled?: boolean
}

export default class ControlWrapper extends React.PureComponent<Props, {}> {
  static defaultProps = {
    type: 'light',
    disabled: false
  }

  render () {
    const { id, text, children, type, disabled } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledLabel type={type} disabled={disabled}>{text}</StyledLabel>
        {children}
      </StyledWrapper>
    )
  }
}
