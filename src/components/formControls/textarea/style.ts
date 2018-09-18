/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Props } from './index'

export const StyledWrapper = styled<{}, 'div'>('div')`
  width: 100%;
`

export const StyledArea = styled<Props, 'textarea'>('textarea')`
  min-height: 140px;
  box-sizing: border-box;
  width: 100%;
  font-family: Muli, sans-serif;
  border: 1px solid ${(p) => p.disabled ? '#E5E5EA' : '#DFDFE8'};
  color: ${(p) => p.disabled ? '#D1D1DB' : '#686978'};
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 16px;
  line-height: 26px;

  &:disabled {
    background: #fff;
  }

  &:focus {
    border-color: #A1A8F2;
    outline: none;
  }
`
