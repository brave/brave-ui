/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'

import { StyledH1, StyledH2, StyledH3 } from './style'

export interface HeadingTheme {
  color?: CSS.Color
  margin?: CSS.MarginProperty<1>
}

export interface HeadingProps {
  id?: string
  level?: number
  text?: string
  theme?: HeadingTheme
}

class Heading extends React.PureComponent<HeadingProps, {}> {
  render () {
    const { id, level, theme, text } = this.props
    switch (level) {
      case 1:
        return <StyledH1 id={id} theme={theme}>{text}</StyledH1>
      case 2:
        return <StyledH2 id={id} theme={theme}>{text}</StyledH2>
      case 3:
        return <StyledH3 id={id} theme={theme}>{text}</StyledH3>
      case 4:
      case 5:
      case 6:
      default:
        return <StyledH1 id={id} theme={theme}>{text}</StyledH1>
    }
  }
}

export default Heading
