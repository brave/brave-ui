/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import './style.css'

import { applyClass } from '../helpers'

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

class Grid extends React.PureComponent<GridProps, {}> {
  get componentStyles () {
    const { columns, padding, gap, width, height, textColor, background } = this.props
    return {
      '--gridTemplateColumns': columns != null ? columns : gridTemplate,
      '--gridPadding': padding,
      '--gridGap': gap,
      '--gridWidth': width,
      '--gridHeight': height,
      '--gridTextColor': textColor,
      '--gridBackground': background
    }
  }

  render () {
    const { id, disabled = false, children } = this.props
    return (
      <div
        id={id}
        className={applyClass({
          grid: true,
          grid__disabled: disabled
        })}
        style={this.componentStyles}>
        {children}
      </div>
    )
  }
}

export interface ColumnProps {
  id?: string,
  children?: React.ReactNode,
  // Component styles
  size?: number,
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
      '--columnSize': 'size' in props ? `span ${props.size}` : `span ${gridTemplate}`,
      '--columnDisplay': needsFlex && 'flex',
      '--columnAlign': props.align,
      '--columnVerticalAlign': props.verticalAlign,
      '--columnBackground': props.background,
      '--columnDirection': props.direction
    }
  }

  render () {
    const { id, children } = this.props
    return (
      <div
        id={id}
        className='column'
        style={this.componentStyles}>
        {children}
      </div>
    )
  }
}

export { Grid, Column }
