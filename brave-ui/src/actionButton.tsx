/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import './actionButton.css'

/**
* Implementor notes:
* This button is almost unopinonated in styles
* and should be used only when BrowserButton can't
* such as actions in buttons that have no UI (link-like buttons).
* This has limited usage on purpose.
* Consider either using browserButton or creating a new component as needed
* as this file shouldn't be changed much.
**/

export interface ActionButtonProps {
  id?: string,
  onClick?: () => void,
  text?: string | number,
  // Component style
  height?: string,
  fontSize?: string,
  color?: string,
  padding?: string
}

class ActionButton extends React.PureComponent<ActionButtonProps, {}> {
  get componentStyles () {
    const { height, fontSize, color, padding } = this.props
    return {
      '--height': height,
      '--fontSize': fontSize,
      '--color': color,
      '--padding': padding
    }
  }

  render () {
    const { id, onClick, text } = this.props
    return (
      <button
        id={id}
        className='actionButton'
        onClick={onClick}
        style={this.componentStyles}>
        {text && text.toString()}
      </button>
    )
  }
}

export default ActionButton
