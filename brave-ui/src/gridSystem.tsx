/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

// Create a 12-based column grid system
export const gridTemplate = 12
export interface GridProps {
  id?: string,
  disabled?: boolean,
  children?: React.ReactNode,
  // Component styles
  columns?: string,
  padding?: string,
  gap?: string,
  width?: string,
  height?: string,
  textColor?: string,
  background?: string
}

interface AphroditeStyle {
  [selector: string]: string | number | AphroditeStyle
}

class Grid extends React.PureComponent<GridProps, {}> {
  get componentStyles () {
    const { columns, padding, gap, width, height, textColor, background } = this.props
    return {
      '--gridTemplateColumns': columns || gridTemplate,
      '--gridPadding': padding,
      '--gridGap': gap,
      '--gridWidth': width,
      '--gridHeight': height,
      '--gridTextColor': textColor,
      '--gridBackground': background
    }
  }

  render () {
    const { id, disabled, children } = this.props
    return (
      <div
        id={id}
        className={css(styles.grid, disabled && styles.grid__disabled)}
        style={this.componentStyles}>
        {children}
      </div>
    )
  }
}

const gridWrapper = {
  grid: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: `repeat(var(--gridTemplateColumns), 1fr)`,
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

export interface ColumnProps {
  id?: string,
  size?: number,
  children?: React.ReactNode,
  // Component styles
  align?: string,
  verticalAlign?: string,
  background?: string,
  direction?: string
}

class Column extends React.PureComponent<ColumnProps, {}> {
  get componentStyles () {
    const { props } = this
    const needsFlex = (
      'align' in props ||
      'verticalAlign' in props ||
      'direction' in props
    )
    return {
      '--columnDisplay': needsFlex && 'flex',
      '--columnAlign': props.align,
      '--columnVerticalAlign': props.verticalAlign,
      '--columnBackground': props.background,
      '--columnDirection': props.direction
    }
  }

  render () {
    const { id, size = gridTemplate, children } = this.props
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
Array.from({length: gridTemplate}, (v, i) => i + 1).forEach(size => {
  Object.assign(columnSystem, {
    [`column${size}`]: {
      boxSizing: 'border-box',
      position: 'relative',
      gridColumn: `span ${size}`,
      display: 'var(--columnDisplay, inherit)',
      justifyContent: 'var(--columnAlign)',
      alignItems: 'var(--columnVerticalAlign)',
      backgroundColor: 'var(--columnBackground)',
      flexDirection: 'var(--columnDirection)'
    }
  })
})

const gridSystem = Object.assign(gridWrapper, columnSystem)
const styles: AphroditeStyle = StyleSheet.create(gridSystem)

export { Grid, Column }
