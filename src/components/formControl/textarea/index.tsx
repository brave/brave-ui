/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledArea } from './style'

export interface Props {
  id?: string
  value?: string
  defaultValue?: string
  readOnly?: boolean
  placeholder?: string
  disabled?: boolean
  fieldError?: boolean
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default class TextArea extends React.PureComponent<Props, {}> {
  render () {
    const { id, onChange, value, defaultValue, readOnly, placeholder, disabled, fieldError } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledArea
          onChange={onChange}
          disabled={disabled}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          defaultValue={defaultValue}
          fieldError={fieldError}
        />
      </StyledWrapper>
    )
  }
}
