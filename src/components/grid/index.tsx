/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledGrid, StyledColumn } from './style'

export interface GridTheme {
  padding?: string
  gridGap?: string
  maxWidth?: string
  height?: string
  color?: string
  backgroundColor?: string
  margin?: string
  alignItems?: string
}

export interface GridProps {
  id?: string
  disabled?: boolean
  columns?: number
  onClick?: (e: any) => void
  children?: React.ReactNode
  customStyle?: GridTheme
  className?: string
}

export class Grid extends React.PureComponent<GridProps, {}> {
  static defaultProps = {
    disabled: false
  }

  render () {
    const { id, disabled, columns, customStyle, onClick, children, className } = this.props
    return (
      <StyledGrid
        id={id}
        disabled={disabled}
        className={className}
        customStyle={customStyle}
        onClick={onClick}
        columns={columns}
      >
        {children}
      </StyledGrid>
    )
  }
}

export interface ColumnTheme {
  justifyContent?: string
  alignItems?: string
  backgroundColor?: string
  flexDirection?: string
  flexWrap?: string
  overflow?: string
  margin?: string
}

export interface ColumnProps {
  id?: string
  size?: number | string
  customStyle?: ColumnTheme
  onClick?: (e: any) => void
  children?: React.ReactNode
  className?: string
}

export class Column extends React.PureComponent<ColumnProps, {}> {
  render () {
    const { id, size, customStyle, children, onClick, className } = this.props
    return (
      <StyledColumn
        id={id}
        size={size}
        className={className}
        customStyle={customStyle}
        onClick={onClick}
      >
        {children}
      </StyledColumn>
    )
  }
}
