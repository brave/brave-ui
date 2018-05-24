/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { BoxedContentProps } from './index'
import { checkIfThemeProp } from '../helpers'

const StyledBoxedContent = styled.div`
  max-width: ${(p: BoxedContentProps) => checkIfThemeProp(p.theme, 'boxedContent', 'maxWidth')};
  margin: ${(p: BoxedContentProps) => checkIfThemeProp(p.theme, 'boxedContent', 'margin')};
  color: inherit;
  font-size: inherit;
  box-sizing: border-box;
  font-family: inherit;
` as any

export default StyledBoxedContent
