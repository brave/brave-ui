/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { MediaContentProps } from './index'
import { setTheme } from '../../helpers'

const StyledMediaContent = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
`

const StyledMedia = styled.img<MediaContentProps>`
  width: ${(p: MediaContentProps) => setTheme(p.customStyle, 'width')};
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`

const StyledMediaBody = styled.div<MediaContentProps>`
  box-sizing: border-box;
  margin: ${(p: MediaContentProps) => setTheme(p.customStyle, 'margin')};
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
`

export {
  StyledMediaContent,
  StyledMedia,
  StyledMediaBody
}
