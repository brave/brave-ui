/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { AnchorProps } from './index'
import { setTheme } from '../../helpers'

const StyledAnchor = styled.a`
  color: ${(p: AnchorProps) => setTheme(p.customStyle, 'color') || 'inherit'};
  text-decoration: ${(p: AnchorProps) => setTheme(p.customStyle, 'textDecoration') || 'none'};
  font-size: ${(p: AnchorProps) => setTheme(p.customStyle, 'fontSize') || '13px'};
  user-select: ${(p: AnchorProps) => setTheme(p.customStyle, 'userSelect')};
  font-family: inherit;
  box-sizing: border-box;
` as any

export default StyledAnchor
