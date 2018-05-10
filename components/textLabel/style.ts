/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { TextLabelProps } from './index'
import { setWeight } from '../helpers'

const StyledTextLabel = styled.p`
  user-select: ${(p: TextLabelProps) => p.noSelect ? 'none' : 'inherit'};
  cursor: ${(p: TextLabelProps) => p.noSelect ? 'default' : 'auto'};
  font-weight: ${(p: TextLabelProps) => setWeight(p, 'bold', 'inherit', '300')};
  padding: ${(p: TextLabelProps) => p.padding ? p.padding : '0'};
  font-size: ${(p: TextLabelProps) => p.size ? p.size : '13px'};
  color: ${(p: TextLabelProps) => p.color ? p.color : 'inherit'};
  background: none;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
` as any

export default StyledTextLabel
