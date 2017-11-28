/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

/**
 * Implementor notes:
 * This button is almost unopinonated in styles
 * and should be used only when BrowserButton can't
 * such as actions in buttons that have no UI (link-like buttons).
 * This has limited usage on purpose.
 * Consider either using browserButton or creating a new component as needed
 * as this file shouldn't be changed much.
**/

export default class ActionButton extends PureComponent {
  get componentStyles () {
    const customStyle = {}
    const { props } = this

    if ('height' in props) {
      customStyle['--height'] = props.height
    }

    if ('fontSize' in props) {
      customStyle['--fontSize'] = props.fontSize
    }

    if ('color' in props) {
      customStyle['--color'] = props.color
    }

    if ('padding' in props) {
      customStyle['--padding'] = props.padding
    }

    return customStyle
  }

  render () {
    const { id, onClick, text } = this.props
    return (
      <button
        id={id}
        className={css(styles.actionButton)}
        onClick={onClick}
        style={this.componentStyles}>
        {text}
      </button>
    )
  }
}

const styles = StyleSheet.create({
  actionButton: {
    display: 'block',
    padding: 'var(--padding, 0)',
    height: 'var(--height)',
    fontSize: 'var(--fontSize, inherit)',
    lineHeight: 1,
    background: 'none',
    color: 'var(--color, inherit)',
    border: 'none',
    cursor: 'pointer',
    outline: 'inherit'
  }
})
