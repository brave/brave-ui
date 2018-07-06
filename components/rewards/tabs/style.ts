/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled.div`
` as any

export const StyledTabWrapper = styled.div`
  border-bottom: 1px solid #DFDFE8;
  text-align: center;
` as any

export const StyledTab = styled.div`
  border-radius: 6px 6px 0 0;
  border: 1px solid #DFDFE8;
  color: ${(p: {selected: boolean}) => p.selected ? '#FB542B' : '#686978'};
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.29px;
  line-height: 44px;
  display: inline-block;
  cursor:pointer;
  min-width: 230px;
  padding: 0 10px;
` as any

export const StyledContent = styled.div`
  padding: 34px 0 34px 0;
` as any
