/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

export default class BrowserText extends PureComponent {
  get componentStyles () {
    const { props } = this
    const customStyle = {}

    if ('fontSize' in props) {
      customStyle['--fontSize'] = props.fontSize
    }

    if ('color' in props) {
      customStyle['--color'] = props.color
    }

    if ('padding' in props) {
      customStyle['--padding'] = props.padding
    }

    if ('noSelect' in props) {
      customStyle['--noSelect'] = 'none'
      customStyle['--cursor'] = 'default'
    }

    if ('bold' in props) {
      customStyle['--bold'] = 'bold'
    }

    return customStyle
  }

  render () {
    const { id, onClick, text } = this.props
    return (
      <p
        id={id}
        className={css(styles.browserText)}
        onClick={onClick}
        style={this.componentStyles}>
        {text.toString()}
      </p>
    )
  }
}

const styles = StyleSheet.create({
  browserText: {
    userSelect: 'var(--noSelect)',
    fontWeight: 'var(--bold)',
    padding: 'var(--padding, 0)',
    cursor: 'var(--cursor, auto)',
    fontSize: 'var(--fontSize, 13px)',
    color: 'var(--color, inherit)',
    background: 'none',
    margin: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
})
