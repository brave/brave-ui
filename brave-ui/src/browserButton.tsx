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
import { applyClass } from './helpers'
import './browserButton.css'
import './theme.css'

export interface BrowserButtonProps {
  id?: string,
  theme?: string,
  disabled?: boolean,
  onClick?: () => void,
  children?: React.ReactNode,
  // component styles
  size?: string,
  fontSize?: string
}

class BrowserButton extends React.PureComponent<BrowserButtonProps, {}> {
  get componentStyles () {
    const { size, fontSize } = this.props
    return {
      // custom props
      '--size': size,
      '--fontSize': fontSize
    }
  }

  render () {
    const { id, theme, onClick, disabled, children } = this.props
    return (
      <button
        id={id}
        style={this.componentStyles}
        onClick={onClick}
        disabled={disabled}
        className={applyClass({
          browserButton: true,
          browserButton_primaryColor: theme === 'primary',
          browserButton_secondaryColor: theme === 'secondary',
          browserButton_disabled: disabled
        })}>
        {children}
      </button>
    )
  }
}

export default BrowserButton
