/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ContentToggleArrowState } from './index'

const StyledContentToggleArrow = styled.div`
  box-sizing: border-box;
  width: -webkit-fill-available;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
` as any

const StyledContentToggleArrowControl = styled.div`
  box-sizing: border-box;
  position: relative;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  user-select: none;

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
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  margin-left: 15px;
` as any

const StyledContentToggleArrowContent = styled.div`
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  overflow: ${(s: ContentToggleArrowState) => s.open ? 'auto' : 'hidden'};
  height: ${(s: ContentToggleArrowState) => s.open ? 'fit-content' : '0'};
  width: -webkit-fill-available;
` as any

export {
  StyledContentToggleArrow,
  StyledContentToggleArrowControl,
  StyledContentToggleArrowSummary,
  StyledContentToggleArrowContent
}
