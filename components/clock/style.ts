/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

const StyledClock = styled.div`
  box-sizing: border-box;
  line-height: 1;
  user-select: none;
  display: flex;
  cursor: default;
  -webkit-font-smoothing: antialiased;
` as any

const StyledTime = styled.span`
  box-sizing: border-box;
  letter-spacing: 0;
  font-size: 75px;
  font-weight: 200;
  color: #fff;
  display: inline-flex;
` as any

const StyledPeriod = styled.span`
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  letter-spacing: -0.2px;;
  font-weight: 400;
  margin-top: 8px;
  margin-left: 3px;
  vertical-align: top;
` as any

const StyledTimeSeparator = styled.span`
  box-sizing: border-box;
  color: #fff;
  /* center colon vertically in the text-content line */
  margin-top: -0.1em;
` as any

export {
  StyledClock,
  StyledTime,
  StyledPeriod,
  StyledTimeSeparator
}

