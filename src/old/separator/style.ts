/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { SeparatorProps } from './index'

const StyledSeparator = styled.hr`
  box-sizing: border-box;
  background: #ccc;
  border: 0px;
  height: 1px;
  width: 100%;
  margin-top: ${(p: SeparatorProps) => p.noMargin ? '0' : '10px'};
  margin-bottom: ${(p: SeparatorProps) => p.noMargin ? '0' : '10px'};
`

export default StyledSeparator
