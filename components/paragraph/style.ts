/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ParagraphProps } from './index'
import { setTheme } from '../helpers'

const StyledParagraph = styled.p`
  box-sizing: border-box;
  font-size: ${(p: ParagraphProps) => setTheme(p.theme, 'fontSize') || '13px'};
  color: ${(p: ParagraphProps) => setTheme(p.theme, 'color') || 'inherit'};
  font-weight: ${(p: ParagraphProps) => setTheme(p.theme, 'fontWeight') || 'normal'};
  font-style: ${(p: ParagraphProps) => setTheme(p.theme, 'fontStyle') || 'inherit'};
  margin: ${(p: ParagraphProps) => setTheme(p.theme, 'margin') || '0 0 20px'};
  padding: 0;
  -webkit-font-smoothing: antialiased;
  background: transparent;
  line-height: 1.4;
  font-family: inherit;
` as any

export default StyledParagraph
