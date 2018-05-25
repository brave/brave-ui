// /* This Source Code Form is subject to the terms of the Mozilla Public
//  * License. v. 2.0. If a copy of the MPL was not distributed with this file.
//  * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { UnstyledButtonProps } from './index'
import { checkIfThemeProp } from '../helpers'

const StyledUnstyledButton = styled.button`
  font-size: ${(p: UnstyledButtonProps) => checkIfThemeProp(p.theme, 'unstyledButton', 'fontSize') || 'inherit'};
  color: ${(p: UnstyledButtonProps) => checkIfThemeProp(p.theme, 'unstyledButton', 'color') || 'inherit'};
  font-family: inherit;
  box-sizing: border-box;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
` as any

export default StyledUnstyledButton
