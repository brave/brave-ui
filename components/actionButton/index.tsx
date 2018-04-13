/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledActionButton } from './style'

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
  render () {
    return (
      <StyledActionButton
        id={this.props.id}
        onClick={this.props.onClick}
        height={this.props.height}
        fontSize={this.props.fontSize}
        color={this.props.color}
        padding={this.props.padding}
      >
        { this.props.text ? this.props.text.toString() : null }
      </StyledActionButton>
    )
  }
}

export default ActionButton
