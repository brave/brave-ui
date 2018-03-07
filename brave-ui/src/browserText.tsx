/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export interface BrowserTextProps {
  id?: string
  onClick?: () => void
  text: string | number
  // Component styles
  noSelect?: boolean
  fontSize?: string
  color?: string
  padding?: string
  bold?: boolean
}

interface AphroditeStyle {
  [selector: string]: string | number | AphroditeStyle
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
        className={css(styles.browserTextStyles)}
        onClick={onClick}
        style={this.componentStyles}>
        {text.toString()}
      </p>
    )
  }
}

const browserTextStyles: AphroditeStyle = {
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

const styles = StyleSheet.create({browserTextStyles})

export default BrowserText
