/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled.div`
` as any

export const StyledText = styled.div`
  font-family: Muli;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.29;
  text-align: right;
  color: #686978;
` as any

export const StyledTokens = styled(StyledText)`
  display: flex;
  width: ${(p: {oneLine: boolean}) => p.oneLine ? 'auto' : '80px'};
  justify-content: flex-end;
  float: right;
  padding-right: 7px;
` as any

export const StyledRemove = styled.span`
  margin-left: 10px;
` as any

export const StyledTHSite = styled.div`
` as any

export const StyledTHOther = styled.div`
  text-align: right;
` as any

export const StyledTHLast = styled(StyledTHOther)`
  padding-right: 7px;
` as any

export const StyledToggle = styled.div`
  font-family: Poppins;
  font-size: 13px;
  color: #4c54d2;
  text-align: right;
  text-transform: capitalize;
` as any
