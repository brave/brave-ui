/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export interface ActionButtonProps {
  href: string
  noStyle?: boolean
  target?: '_blank' | '_parent' | '_self' | '_top'
  text: string | number
}

class Anchor extends React.PureComponent<ActionButtonProps, {}> {
  render () {
    const { href, noStyle, target, text } = this.props
    return (
      <a
        className={css(styles.anchor, noStyle && styles.anchor__noStyle)}
        href={href}
        target={target}
        rel='noreferrer noopener'
      >
        {text.toString()}
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

export default Anchor
