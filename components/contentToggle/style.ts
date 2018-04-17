/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ContentToggleProps } from './index'

const StyledContentToggle = styled.summary`
  display: block;

  &::-webkit-details-marker {
    display: none;
  }

  &::before {
    content: ${(p: ContentToggleProps) => p.open ? '"▼"' : '"▶"'};
    padding-right: 0.5em;
  }
` as any

export default StyledContentToggle
