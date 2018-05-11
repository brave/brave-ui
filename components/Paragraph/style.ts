/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ParagraphProps } from './index'
import { setWeight } from '../helpers'

const StyledParagraph = styled.p`
  box-sizing: border-box;
  font-size: ${(p: ParagraphProps) => p.size ? p.size : '13px'};
  color: ${(p: ParagraphProps) => p.color ? p.color : 'inherit'};
  font-weight: ${(p: ParagraphProps) => setWeight(p, 'bold', 'normal', 'inherit')};
  font-style: ${(p: ParagraphProps) => p.italic ? 'italic' : 'inherit'};
  padding: 0;
  -webkit-font-smoothing: antialiased;
  background: transparent;
  margin: 0;
  line-height: 1.4;
  margin-bottom: 20px;
  font-family: inherit;
` as any

export default StyledParagraph
