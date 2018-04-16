/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { BrowserTextProps } from './index'

const StyledBrowserText = styled.p`
  user-select: ${(p: BrowserTextProps) => p.noSelect ? 'none' : 'inherit'};
  cursor: ${(p: BrowserTextProps) => p.noSelect ? 'default' : 'auto'};
  font-weight: ${(p: BrowserTextProps) => p.bold ? 'bold' : 'inherit'};
  padding: ${(p: BrowserTextProps) => p.padding ? p.padding : '0'};
  font-size: ${(p: BrowserTextProps) => p.fontSize ? p.fontSize : '13px'};
  color: ${(p: BrowserTextProps) => p.color ? p.color : 'inherit'};
  background: none;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
` as any

export default StyledBrowserText
