// /* This Source Code Form is subject to the terms of the Mozilla Public
//  * License. v. 2.0. If a copy of the MPL was not distributed with this file.
//  * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { setTheme } from '../../helpers'

interface UnstyledButtonTheme {
  fontSize?: string
  color?: string
  hoverColor?: string
  userSelect?: string
  textDecoration?: string
}

export type StyleProps = {
  customStyle?: UnstyledButtonTheme
}

const StyledUnstyledButton = styled.button<StyleProps>`
  font-size: ${(p) => setTheme(p.customStyle, 'fontSize') || 'inherit'};
  color: ${(p) => setTheme(p.customStyle, 'color') || 'inherit'};
  user-select: ${(p) => setTheme(p.customStyle, 'userSelect')};
  text-decoration: ${(p) => setTheme(p.customStyle, 'textDecoration')};
  padding: ${(p) => setTheme(p.customStyle, 'padding') || '0'};
  margin: 0;
  font-family: inherit;
  box-sizing: border-box;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;

  &:hover {
    color: ${(p) => setTheme(p.customStyle, 'hoverColor')};
  }
`

export default StyledUnstyledButton
