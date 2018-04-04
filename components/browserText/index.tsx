/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import './style.css'

export interface BrowserTextProps {
  id?: string
  onClick?: () => void
  text?: string | number
  // Component styles
  noSelect?: boolean
  fontSize?: string
  color?: string
  padding?: string
  bold?: boolean
}

class BrowserText extends React.PureComponent<BrowserTextProps, {}> {
  get componentStyles () {
    const { fontSize, color, padding, noSelect, bold } = this.props
    return {
      '--fontSize': fontSize,
      '--color': color,
      '--padding': padding,
      '--noSelect': noSelect && 'none',
      '--cursor': noSelect && 'default',
      '--bold': bold && 'bold'
    }
  }

  render () {
    const { id, onClick, text } = this.props
    return (
      <p
        id={id}
        className='browserTextStyles'
        onClick={onClick}
        style={this.componentStyles}>
        {
          text != null
            ? text.toString()
            : null
        }
      </p>
    )
  }
}

export default BrowserText
