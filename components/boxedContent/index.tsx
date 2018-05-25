/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import StyledBoxedContent from './style'

export interface BoxedContentTheme {
  maxWidth?: string,
  margin?: string,
  fontFamily?: string,
  color?: string
}

export interface BoxedContentProps {
  id?: string,
  theme?: BoxedContentTheme,
  children?: React.ReactNode
}

class BoxedContent extends React.PureComponent<BoxedContentProps, {}> {
  render () {
    const { id, theme, children } = this.props
    return (
      <StyledBoxedContent id={id} theme={theme}>{children}</StyledBoxedContent>
    )
  }
}

export default BoxedContent
