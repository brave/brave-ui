/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { PanelProps } from './index'
import { setTheme } from '../../../helpers'

const StyledPanel = styled.div<PanelProps>`
  max-width: ${(p: PanelProps) => setTheme(p.customStyle, 'maxWidth')};
  min-height: ${(p: PanelProps) => setTheme(p.customStyle, 'minHeight')};
  min-width: ${(p: PanelProps) => setTheme(p.customStyle, 'minWidth')};
  width: ${(p: PanelProps) => setTheme(p.customStyle, 'width')};
  height: ${(p: PanelProps) => setTheme(p.customStyle, 'height')};
  margin: ${(p: PanelProps) => setTheme(p.customStyle, 'margin')};
  padding: ${(p: PanelProps) => setTheme(p.customStyle, 'padding') || '40px'};
  display: ${(p: PanelProps) => setTheme(p.customStyle, 'display')};
  flex-direction: ${(p: PanelProps) => setTheme(p.customStyle, 'flexDirection')};
  justify-content: ${(p: PanelProps) => setTheme(p.customStyle, 'justifyContent')};
  align-items: ${(p: PanelProps) => setTheme(p.customStyle, 'alignItems')};
  background-color: ${(p: PanelProps) => setTheme(p.customStyle, 'backgroundColor') || '#FFF'};
  font-size: inherit;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(39, 46, 64, 0.2);
`

export default StyledPanel
