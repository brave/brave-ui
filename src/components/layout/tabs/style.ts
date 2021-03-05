/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'

interface StyleProps {
  selected: boolean
}

export const StyledTabWrapper = styled('div')<{}>`
  border-bottom: 1px solid #DFDFE8;
  text-align: center;
  font-family: ${p => p.theme.fontFamily.body};
`

export const StyledTab = styled('div')<StyleProps>`
  border-radius: 6px 6px 0 0;
  border: 1px solid #DFDFE8;
  border-bottom: 1px solid ${p => p.selected ? '#FFF' : '#DFDFE8'};
  color: ${p => p.selected ? '#FB542B' : '#686978'};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.29px;
  line-height: 44px;
  display: inline-block;
  cursor: pointer;
  min-width: 230px;
  padding: 0 10px;
  margin: 0 2px;
  position: relative;
  top: 1px
`

export const StyledContent = styled('div')<{}>`
  padding: 34px 56px 20px;
`
