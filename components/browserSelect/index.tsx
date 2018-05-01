/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  StyledBrowserSelect,
  StyledBrowserSelectTitle,
  StyledBrowserSelectWrapper
} from './style'

export interface BrowserSelectProps {
  titleName?: string,
  id?: string,
  multiple?: boolean,
  autoFocus?: boolean,
  disabled?: boolean,
  value?: string,
  onChange?: (e: any) => void,
  children: React.ReactNode
}

class BrowserSelect extends React.PureComponent<BrowserSelectProps, {}> {
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
        <StyledBrowserSelectTitle>{titleName}</StyledBrowserSelectTitle>
        <StyledBrowserSelectWrapper
          multiple={multiple}
          disabled={disabled}
        >
          <StyledBrowserSelect
            id={id}
            multiple={multiple}
            autoFocus={autoFocus}
            disabled={disabled}
            value={value}
            onChange={onChange}
          >
            {children}
          </StyledBrowserSelect>
        </StyledBrowserSelectWrapper>
      </div>
    )
  }
}

export default BrowserSelect
