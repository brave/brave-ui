/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ContentToggleArrowState } from './index'

const StyledContentToggleArrow = styled.div`
  box-sizing: border-box;
  width: fit-content;
` as any

const StyledContentToggleArrowControl = styled.div`
  box-sizing: border-box;
  position: relative;

  &::after {
    content: ${(s: ContentToggleArrowState) => s.open ? '"▼"' : '"▶"'};
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top 0;
    left: 0;
  }
` as any

const StyledContentToggleArrowSummary = styled.div`
  box-sizing: border-box;
  margin-left: 15px;
` as any

const StyledContentToggleArrowContent = styled.div`
  box-sizing: border-box;
  overflow: ${(s: ContentToggleArrowState) => s.open ? 'auto' : 'hidden'};
  height: ${(s: ContentToggleArrowState) => s.open ? 'fit-content' : '0'};
  width: fit-content;

` as any

export {
  StyledContentToggleArrow,
  StyledContentToggleArrowControl,
  StyledContentToggleArrowSummary,
  StyledContentToggleArrowContent
}
