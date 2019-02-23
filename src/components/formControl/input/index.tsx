/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { InputComponent, StyledIcon, StyledInput } from './style'

export interface InputProps {
  testId?: string
  icon?: React.ReactNode
  type?: 'text' | 'email' | 'search' | 'password'
  value?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

/**
 * Input Component
 * Used for cases where text inputs of type text, email, search and password are required
 * @prop {string} testId - the id
 * @prop {React.ReactNode} icon - optional icon to be hosted on the left side of the input
 * @prop {'text' | 'email' | 'search' | 'password'} type - the input type attribute
 * @prop {string} value - the user typed input value
 * @prop {boolean} disabled - whether or not should the input be disabled
 * @prop {(event: React.ChangeEvent<HTMLInputElement>) => void} onChange - listener for the onChange event
 * @prop {string} placeholder - default input text when there's nothing typed
 */
export default class Input extends React.PureComponent<InputProps, {}> {
  static defaultProps = {
    type: 'text'
  }
  render () {
    const { testId, icon, onChange, value, disabled, type, placeholder } = this.props

    return (
      <InputComponent data-test-id={testId} disabled={disabled}>
        {
          icon
            ? <StyledIcon>{icon}</StyledIcon>
            : null
        }
        <StyledInput
          type={type}
          onChange={onChange}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
        />
      </InputComponent>
    )
  }
}
