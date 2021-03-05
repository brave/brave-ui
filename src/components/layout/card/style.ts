/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'
import { Emphasis } from './'

interface StyledCardProps {
  useDefaultContentPadding: boolean
  emphasis: Emphasis
}

function getShadowOpacity (emphasis: Emphasis) {
  switch (emphasis) {
    case '60':
      return '.2'
    default:
      return '.15'
  }
}

export const Card = styled('div')<StyledCardProps>`
  max-width: 100%;
  width: 100%;
  min-height: auto;
  margin: 0;
  background-color: ${p => p.theme.color.panelBackground};
  border-radius: 4px;
  box-shadow: ${p => `0 2px 4px rgba(0, 0, 0, ${getShadowOpacity(p.emphasis)})`};
  font-size: inherit;
  font-family: ${p => p.theme.fontFamily.body};
  box-sizing: border-box;
  position: relative;
`

export const Content = styled('div')<StyledCardProps>`
  padding: ${p => p.useDefaultContentPadding ? '32px' : undefined};
`
