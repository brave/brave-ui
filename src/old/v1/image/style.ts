/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ImageProps } from './index'
import { setTheme } from '../../../helpers'

const StyledPicture = styled.picture<ImageProps>`
  max-width: ${(p: ImageProps) => setTheme(p.customStyle, 'maxWidth')};
  min-width: ${(p: ImageProps) => setTheme(p.customStyle, 'minWidth')};
  width: ${(p: ImageProps) => setTheme(p.customStyle, 'width')};
  height: ${(p: ImageProps) => setTheme(p.customStyle, 'height')};
  min-height: ${(p: ImageProps) => setTheme(p.customStyle, 'minHeight')};
  margin: ${(p: ImageProps) => setTheme(p.customStyle, 'margin')};
  padding: ${(p: ImageProps) => setTheme(p.customStyle, 'padding')};
  box-sizing: border-box;
  display: block;
`

const StyledFigure = styled.figure<ImageProps>`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  margin: 0;
`

const StyledFigcaption = StyledFigure.withComponent('figure')

const StyledImage = StyledFigure.withComponent('img')

export {
  StyledPicture,
  StyledFigure,
  StyledFigcaption,
  StyledImage
}
