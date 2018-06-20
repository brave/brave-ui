/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  height: 36px;
  border-bottom: solid 1px #cfd5da;  
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
` as any

export const StyledTitle = styled.div`
  font-family: Poppins;
  font-size: 16px;
  line-height: 1.75;
  color: #4b4c5c;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
` as any

export const StyledContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
` as any
