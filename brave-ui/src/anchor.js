/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Anchor extends PureComponent {
  render () {
    const { href, noStyle, target, text } = this.props
    return (
      <a
        className={css(styles.anchor, noStyle && styles.anchor__noStyle)}
        href={href}
        target={target}
        rel='noreferrer noopener'
      >
        {text}
      </a>
    )
  }
}

const styles = StyleSheet.create({
  anchor: {
    color: 'inherit',
    fontSize: 'inherit'
  },
  anchor__noStyle: {
    textDecoration: 'none'
  }
})
