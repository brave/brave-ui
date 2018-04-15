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
    return (
      <div>
        <StyledBrowserSelectTitle>
          {this.props.titleName}
        </StyledBrowserSelectTitle>
        <StyledBrowserSelectWrapper
          multiple={this.props.multiple ? this.props.disabled : false}
          disabled={this.props.disabled ? this.props.disabled : false}
        >
          <StyledBrowserSelect
            id={this.props.id}
            multiple={this.props.multiple ? this.props.disabled : false}
            autoFocus={this.props.autoFocus}
            disabled={this.props.disabled ? this.props.disabled : false}
            value={this.props.value}
            onChange={this.props.onChange}
          >
            {this.props.children}
          </StyledBrowserSelect>
        </StyledBrowserSelectWrapper>
      </div>
    )
  }
}

export default BrowserSelect
