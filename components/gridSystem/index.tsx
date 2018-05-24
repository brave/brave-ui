/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledGrid, StyledColumn } from './style'

export interface GridTheme {
  padding?: string,
  gridGap?: string,
  maxWidth?: string,
  height?: string,
  color?: string,
  backgroundColor?: string
}

export interface GridProps {
  id?: string,
  disabled?: boolean,
  columns?: number,
  children?: React.ReactNode,
  theme?: {
    [grid: string]: GridTheme
  }
}

class Grid extends React.PureComponent<GridProps, {}> {
  render () {
    const { id, disabled, columns, theme, children } = this.props
    return (
      <StyledGrid id={id} disabled={disabled || false} theme={theme} columns={columns}>
        {children}
      </StyledGrid>
    )
  }
}

export interface ColumnTheme {
  justifyContent?: string,
  verticalAlign?: string,
  backgroundColor?: string,
  flexDirection?: string
}

export interface ColumnProps {
  id?: string,
  size?: number | string,
  theme?: {
    [column: string]: ColumnTheme
  }
  children?: React.ReactNode
}

class Column extends React.PureComponent<ColumnProps, {}> {
  render () {
    const { id, size, theme, children } = this.props
    return (
      <StyledColumn id={id} size={size} theme={theme}>{children}</StyledColumn>
    )
  }
}

export { Grid, Column }
