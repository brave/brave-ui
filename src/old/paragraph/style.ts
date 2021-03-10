/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { setTheme } from '../../helpers'

interface ParagraphTheme {
  color?: string
  fontSize?: string
  fontWeight?: string
  fontStyle?: string
  fontFamily?: string
  margin?: string
  textAlign?: string
  lineHeight?: string
}

export type StyleProps = {
  customStyle?: ParagraphTheme
}

const StyledParagraph = styled.p<StyleProps>`
  box-sizing: border-box;
  font-family: ${(p) => setTheme(p.customStyle, 'fontFamily') || 'inherit'};
  font-size: ${(p) => setTheme(p.customStyle, 'fontSize') || '13px'};
  color: ${(p) => setTheme(p.customStyle, 'color') || 'inherit'};
  font-weight: ${(p) => setTheme(p.customStyle, 'fontWeight') || 'normal'};
  font-style: ${(p) => setTheme(p.customStyle, 'fontStyle') || 'inherit'};
  margin: ${(p) => setTheme(p.customStyle, 'margin') || '0 0 20px'};
  line-height: ${(p) => setTheme(p.customStyle, 'lineHeight') || '1.4'};
  text-align: ${(p) => setTheme(p.customStyle, 'textAlign')};
  padding: 0;
  -webkit-font-smoothing: antialiased;
  background: transparent;
`

export default StyledParagraph
