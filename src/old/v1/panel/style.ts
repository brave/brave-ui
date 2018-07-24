/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { PanelProps } from './index'
import { setTheme } from '../../../helpers'

const StyledPanel = styled.div`
  max-width: ${(p: PanelProps) => setTheme(p.theme, 'maxWidth')};
  min-width: ${(p: PanelProps) => setTheme(p.theme, 'minWidth')};
  width: ${(p: PanelProps) => setTheme(p.theme, 'width')};
  height: ${(p: PanelProps) => setTheme(p.theme, 'height')};
  min-height: ${(p: PanelProps) => setTheme(p.theme, 'minHeight')};
  margin: ${(p: PanelProps) => setTheme(p.theme, 'margin')};
  padding: ${(p: PanelProps) => setTheme(p.theme, 'padding') || '40px'};
  display: ${(p: PanelProps) => setTheme(p.theme, 'display')};
  flex-direction: ${(p: PanelProps) => setTheme(p.theme, 'flexDirection')};
  justify-content: ${(p: PanelProps) => setTheme(p.theme, 'justifyContent')};
  align-items: ${(p: PanelProps) => setTheme(p.theme, 'alignItems')};
  background-color: ${(p: PanelProps) => setTheme(p.theme, 'backgroundColor') || '#FFF'};
  font-size: inherit;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(39, 46, 64, 0.2);
` as any

export default StyledPanel
