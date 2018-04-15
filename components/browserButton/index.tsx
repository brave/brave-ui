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
import { StyledBrowserButton } from './style'

export interface BrowserButtonProps {
  id?: string,
  color?: string,
  disabled?: boolean,
  onClick?: () => void,
  children?: React.ReactNode,
  // component styles
  size?: string,
  fontSize?: string
}

class BrowserButton extends React.PureComponent<BrowserButtonProps, {}> {
  render () {
    return (
      <StyledBrowserButton
        id={this.props.id}
        color={this.props.color ? this.props.color : 'default'}
        onClick={this.props.onClick}
        disabled={this.props.disabled ? this.props.disabled : false}
        size={this.props.size}
        fontSize={this.props.fontSize}
      >
        {this.props.children}
      </StyledBrowserButton>
    )
  }
}

export default BrowserButton
