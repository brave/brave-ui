/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

type ContentArrowProps = {
  open?: boolean
  withSeparator?: boolean
}

const StyledContentToggleArrow = styled.div<ContentArrowProps>`
  box-sizing: border-box;
  width: fill-available;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`

const StyledContentToggleArrowControl = styled.div<ContentArrowProps>`
  box-sizing: border-box;
  position: relative;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  user-select: none;

  &::after {
    content: ${(s: ContentArrowProps) => s.open ? '"▼"' : '"▶"'};
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const StyledContentToggleArrowSummary = styled.div`
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  margin-left: 15px;
`

const StyledContentToggleArrowContent = styled.div<ContentArrowProps>`
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  overflow: ${(s) => s.open ? 'auto' : 'hidden'};
  height: ${(s) => s.open ? 'fit-content' : '0'};
  width: fill-available;
`

export {
  StyledContentToggleArrow,
  StyledContentToggleArrowControl,
  StyledContentToggleArrowSummary,
  StyledContentToggleArrowContent
}
