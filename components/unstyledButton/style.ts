// /* This Source Code Form is subject to the terms of the Mozilla Public
//  * License. v. 2.0. If a copy of the MPL was not distributed with this file.
//  * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { UnstyledButtonProps } from './index'

const StyledUnstyledButton = styled.button`
  padding: ${(p: UnstyledButtonProps) => p.padding ? p.padding : 'inherit'};
  height: ${(p: UnstyledButtonProps) => p.height ? p.height : 'inherit'};
  font-size: ${(p: UnstyledButtonProps) => p.fontSize ? p.fontSize : 'inherit'};
  color: ${(p: UnstyledButtonProps) => p.color ? p.color : 'inherit'};
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
` as any

export { StyledUnstyledButton }
