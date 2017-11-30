/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

// Create a 12-based column grid system
export const gridTemplate = 12

export class Grid extends PureComponent {
  get componentStyles () {
    const { props } = this
    const customStyle = {}

    if ('padding' in props) {
      customStyle['--gridPadding'] = props.padding
    }

    if ('gap' in props) {
      customStyle['--gridGap'] = props.gap
    }

    if ('width' in props) {
      customStyle['--gridWidth'] = props.width
    }

    if ('height' in props) {
      customStyle['--gridHeight'] = props.height
    }

    if ('textColor' in props) {
      customStyle['--gridTextColor'] = props.textColor
    }

    if ('background' in props) {
      customStyle['--gridBackground'] = props.background
    }

    return customStyle
  }

  render () {
    const { id, disabled, children, style } = this.props
    return (
      <div
        id={id}
        className={css(styles.grid, disabled && styles.grid__disabled)}
        style={Object.assign(this.componentStyles, style)}>
        {children}
      </div>
    )
  }
}

const gridWrapper = {
  grid: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: `repeat(${gridTemplate}, 1fr)`,
    gridGap: 'var(--gridGap, 15px)',
    padding: 'var(--gridPadding, 0)',
    maxWidth: 'var(--gridWidth)',
    height: 'var(--gridHeight)',
    color: 'var(--gridTextColor)',
    backgroundColor: 'var(--gridBackground)'
  },

  grid__disabled: {
    opacity: 0.3,
    userSelect: 'none'
  }
}

export class Column extends PureComponent {
  get componentStyles () {
    const customStyle = {}
    const { props } = this
    const needsFlex = 'align' in props || 'verticalAlign' in props

    if (needsFlex) {
      customStyle['--columnDisplay'] = 'flex'
    }

    if ('align' in props) {
      customStyle['--columnAlign'] = props.align
    }

    if ('verticalAlign' in props) {
      customStyle['--columnVerticalAlign'] = props.verticalAlign
    }

    if ('background' in props) {
      customStyle['--columnBackground'] = props.background
    }

    return customStyle
  }

  render () {
    const { id, size = 12, children } = this.props
    return (
      <div
        id={id}
        className={css(styles[`column${size}`])}
        style={this.componentStyles}>
        {children}
      </div>
    )
  }
}

// Iterate over gridTemplate and add a `columnN` classname
// i.e. {column1, ..., columnN}. Being N the max gridTemplate number
let columnSystem = {}
Array.from({length: gridTemplate}, (v, i) => i + 1).forEach((size) => {
  Object.assign(columnSystem, {
    [`column${size}`]: {
      boxSizing: 'border-box',
      position: 'relative',
      gridColumn: `span ${size}`,
      display: 'var(--columnDisplay, inherit)',
      justifyContent: 'var(--columnAlign)',
      alignItems: 'var(--columnVerticalAlign)',
      backgroundColor: 'var(--columnBackground)'
    }
  })
})

// merge both grid and column styles obj to be used in Aphrodite
const gridSystem = Object.assign(gridWrapper, columnSystem)
const styles = StyleSheet.create(gridSystem)
