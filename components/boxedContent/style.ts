/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { BoxedContentProps } from './index'

const StyledBoxedContent = styled.div`
  maxWidth: ${(p: BoxedContentProps) => p.width};
  margin: ${(p: BoxedContentProps) => p.margin};
  box-sizing: border-box;
  color: inherit;
` as any

export default StyledBoxedContent
