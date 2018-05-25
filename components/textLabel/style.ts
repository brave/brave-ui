/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { TextLabelProps } from './index'
import { checkIfThemeProp } from '../helpers'

const StyledTextLabel = styled.p`
  font-weight: ${(p: TextLabelProps) => checkIfThemeProp(p.theme, 'textLabel', 'fontWeight') || 'normal'};
  padding: ${(p: TextLabelProps) => checkIfThemeProp(p.theme, 'textLabel', 'padding') || '0'};
  font-size: ${(p: TextLabelProps) => checkIfThemeProp(p.theme, 'textLabel', 'fontSize') || '13px'};
  color: ${(p: TextLabelProps) => checkIfThemeProp(p.theme, 'textLabel', 'color') || 'inherit'};
  user-select: none;
  cursor: default;
  font-family: inherit;
  box-sizing: border-box;
  background: none;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
` as any

export default StyledTextLabel
