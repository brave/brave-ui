/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { AnchorProps } from './index'
import { checkIfThemeProp } from '../helpers'

const StyledAnchor = styled.a`
  color: ${(p: AnchorProps) => checkIfThemeProp(p.theme, 'anchor', 'color') || 'inherit'};
  text-decoration: ${(p: AnchorProps) => checkIfThemeProp(p.theme, 'anchor', 'textDecoration') || 'none'};
  font-size: ${(p: AnchorProps) => checkIfThemeProp(p.theme, 'anchor', 'fontSize') || '13px'};
  font-family: inherit;
  box-sizing: border-box;
` as any

export default StyledAnchor

