/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Separator extends PureComponent {
  get componentStyles () {
    const { noMargin } = this.props
    const customStyle = {}

    if (noMargin) {
      customStyle['--separatorMargin'] = 0
    }

    return customStyle
  }

  render () {
    return (
      <hr className={css(styles.separator)} style={this.componentStyles} />
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    background: '#ccc',
    border: '0px',
    height: '1px',
    marginTop: 'var(--separatorMargin, 10px)',
    marginBottom: 'var(--separatorMargin, 10px)'
  }
})
