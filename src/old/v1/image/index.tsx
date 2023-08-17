/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledPicture, StyledFigure, StyledImage, StyledFigcaption } from './style'

export interface ImageTheme {
  maxWidth?: string
  minWidth?: string
  width?: string
  height?: string
  minHeight?: string
  margin?: string
  padding?: string
}

export type ImageProps = React.PropsWithChildren<{
  customStyle?: ImageTheme
  id?: string
  src?: string
  caption?: string
}>
class Image extends React.PureComponent<ImageProps, {}> {
  render () {
    const { id, customStyle, children, src, caption } = this.props
    return (
      <StyledPicture id={id} customStyle={customStyle}>
        <StyledFigure>
          {children}
          <StyledImage src={src} customStyle={customStyle} />
        </StyledFigure>

        {caption && <StyledFigcaption>{caption}</StyledFigcaption>}
      </StyledPicture>
    )
  }
}

export default Image
