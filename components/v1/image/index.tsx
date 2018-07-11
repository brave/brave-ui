/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledPicture, StyledFigure, StyledImage, StyledFigcaption } from './style'

export interface ImageTheme {
  maxWidth?: string,
  minWidth?: string,
  width?: string,
  height?: string,
  minHeight?: string,
  margin?: string,
  padding?: string
}

export interface ImageProps {
  theme?: ImageTheme,
  id?: string,
  children?: HTMLSourceElement,
  src?: string,
  caption?: string,
}

class Image extends React.PureComponent<ImageProps, {}> {
  render () {
    const { id, theme, children, src, caption } = this.props
    return (
      <StyledPicture id={id} theme={theme}>
        <StyledFigure>
          {children}
          <StyledImage src={src} theme={theme} />
        </StyledFigure>

        { caption && <StyledFigcaption>{caption}</StyledFigcaption> }
      </StyledPicture>
    )
  }
}

export default Image
