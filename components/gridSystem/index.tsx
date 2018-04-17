/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledGrid, StyledColumn } from './style'

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
  render () {
    return (
      <StyledGrid
        id={this.props.id}
        disabled={this.props.disabled ? this.props.disabled : false}
        columns={this.props.columns}
        padding={this.props.padding}
        gap={this.props.gap}
        width={this.props.width}
        height={this.props.height}
        textColor={this.props.textColor}
        background={this.props.background}
      >
        {this.props.children}
      </StyledGrid>
    )
  }
}

export interface ColumnProps {
  id?: string,
  children?: React.ReactNode,
  // Component styles
  size?: number | string,
  align?: string,
  verticalAlign?: string,
  background?: string,
  direction?: string
}

class Column extends React.PureComponent<ColumnProps, {}> {
  render () {
    return (
      <StyledColumn
        id={this.props.id}
        size={this.props.size}
        align={this.props.align}
        verticalAlign={this.props.verticalAlign}
        background={this.props.background}
        direction={this.props.direction}
      >
        {this.props.children}
      </StyledColumn>
    )
  }
}

export { Grid, Column }
