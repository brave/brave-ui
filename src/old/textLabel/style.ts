/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { TextLabelProps } from './index'
import { setTheme } from '../../helpers'

const StyledTextLabel = styled.p<TextLabelProps>`
  font-weight: ${(p: TextLabelProps) => setTheme(p.customStyle, 'fontWeight') || 'normal'};
  padding: ${(p: TextLabelProps) => setTheme(p.customStyle, 'padding') || '0'};
  font-size: ${(p: TextLabelProps) => setTheme(p.customStyle, 'fontSize') || '13px'};
  color: ${(p: TextLabelProps) => setTheme(p.customStyle, 'color') || 'inherit'};
  line-height: ${(p: TextLabelProps) => setTheme(p.customStyle, 'lineHeight')};
  cursor: ${(p: TextLabelProps) => setTheme(p.customStyle, 'cursor')};
  user-select: none;
  font-family: inherit;
  box-sizing: border-box;
  background: none;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export default StyledTextLabel
