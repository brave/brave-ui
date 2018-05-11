/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { MediaContentProps } from './index'

const StyledMediaContent = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
` as any

const StyledMedia = styled.img`
  width: ${(p: MediaContentProps) => p.mediaSize};
  box-sizing: border-box;
  display: block;
  max-width: 100%;
` as any

const StyledMediaBody = styled.div`
  box-sizing: border-box;
  margin-left: ${(p: MediaContentProps) => p.gap};
` as any

export {
  StyledMediaContent,
  StyledMedia,
  StyledMediaBody
}
