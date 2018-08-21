/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import StyledPanel from './style'

export interface PanelTheme {
  display?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  maxWidth?: string
  minWidth?: string
  width?: string
  height?: string
  minHeight?: string
  margin?: string
  padding?: string
  backgroundColor?: string
  fontFamily?: string
  color?: string
}

export interface PanelProps {
  id?: string
  customStyle?: PanelTheme
  children?: React.ReactNode
}

class Panel extends React.PureComponent<PanelProps, {}> {
  render () {
    const { id, customStyle, children } = this.props
    return (
      <StyledPanel id={id} customStyle={customStyle}>{children}</StyledPanel>
    )
  }
}

export default Panel
