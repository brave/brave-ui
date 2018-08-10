/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { CardProps } from './index'
import { setTheme } from '../../../helpers'

const StyledCard = styled.div`
  max-width: ${(p: CardProps) => setTheme(p.theme, 'maxWidth')};
  width: ${(p: CardProps) => setTheme(p.theme, 'width')};
  min-height: ${(p: CardProps) => setTheme(p.theme, 'minHeight')};
  margin: ${(p: CardProps) => setTheme(p.theme, 'margin')};
  padding: ${(p: CardProps) => setTheme(p.theme, 'padding') || '40px'};
  background-color: ${(p: CardProps) => setTheme(p.theme, 'backgroundColor') || '#FFF'};
  border-radius: ${(p: CardProps) => setTheme(p.theme, 'borderRadius') || '6px'};
  box-shadow: ${(p: CardProps) => setTheme(p.theme, 'boxShadow') || '0 0 8px 0 rgba(99,105,110,0.12)'};
  font-size: inherit;
  box-sizing: border-box;
  position: relative;
` as any

export default StyledCard
