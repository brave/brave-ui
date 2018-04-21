/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ContentToggleState } from './index'

const StyledContentToggle = styled.div`
  box-sizing: border-box;
  width: fit-content;
` as any

const StyledContentToggleControl = styled.div`
  box-sizing: border-box;
  position: relative;

  &::after {
    content: ${(s: ContentToggleState) => s.open ? '"▼"' : '"▶"'};
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top 0;
    left: 0;
  }
` as any

const StyledContentToggleSummary = styled.div`
  box-sizing: border-box;
  margin-left: 25px;
` as any

const StyledContentToggleContent = styled.div`
  box-sizing: border-box;
  visibility: ${(s: ContentToggleState) => s.open ? 'visible' : 'hidden'};
  width: 200px;
  height: 200px;
  background: yellow;
` as any

export {
  StyledContentToggle,
  StyledContentToggleControl,
  StyledContentToggleSummary,
  StyledContentToggleContent
}
