/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'

import StyledCard from './style'

export interface CardTheme {
  maxWidth?: CSS.MaxWidthProperty<1>
  width?: CSS.WidthProperty<1>
  minHeight?: CSS.MinHeightProperty<1>
  margin?: CSS.MarginProperty<1>
  padding?: CSS.PaddingProperty<1>
  backgroundColor?: CSS.BackgroundColorProperty
  boxShadow?: CSS.BoxShadowProperty
}

export interface CardProps {
  id?: string
  theme?: CardTheme
  children?: React.ReactNode
}

class Card extends React.PureComponent<CardProps, {}> {
  render () {
    const { id, theme, children } = this.props
    return (
      <StyledCard id={id} theme={theme}>{children}</StyledCard>
    )
  }
}

export default Card
