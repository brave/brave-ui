/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  StyledSelectOption,
  StyledSelectOptionTitle,
  StyledSelectOptionWrapper
} from './style'

export interface SelectOptionTheme {
  userSelect?: string
}

export interface SelectOptionProps {
  titleName?: string
  id?: string
  multiple?: boolean
  autoFocus?: boolean
  disabled?: boolean
  value?: string
  onChange?: (e: any) => void
  children: React.ReactNode
  customStyle?: SelectOptionTheme
}

class SelectOption extends React.PureComponent<SelectOptionProps, {}> {
  render () {
    const {
      titleName,
      id,
      multiple = false,
      autoFocus = false,
      disabled = false,
      value,
      onChange,
      children
    } = this.props

    return (
      <div>
        <StyledSelectOptionTitle>{titleName}</StyledSelectOptionTitle>
        <StyledSelectOptionWrapper
          multiple={multiple}
          disabled={disabled}
        >
          <StyledSelectOption
            id={id}
            multiple={multiple}
            autoFocus={autoFocus}
            disabled={disabled}
            value={value}
            onChange={onChange}
          >
            {children}
          </StyledSelectOption>
        </StyledSelectOptionWrapper>
      </div>
    )
  }
}

export default SelectOption
