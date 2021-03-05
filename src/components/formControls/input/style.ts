/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import theme from '../../../theme/brave-default'
import { InputProps } from './index'

export const InputComponent = styled('div')<InputProps>`
  background-color: #fff;
  min-height: auto;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${p => p.disabled ? '#E5E5EA' : '#DFDFE8'};
  border-radius: 3px;
  padding: 8px 10px;

  &:focus-within {
    border-color: #A1A8F2;
  }
`

export const StyledIcon = styled('div')<{}>`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  margin-right: 10px;
  color: #D1D1DB;
`

export const StyledInput = styled('input')<InputProps>`
  display: inline-block;
  vertical-align: middle;
  min-height: auto;
  box-sizing: border-box;
  width: calc(100% - 30px);
  max-width: 100%;
  font-size: 14px;
  font-family: ${theme.fontFamily.body};
  border: none;
  color: ${p => p.disabled ? '#D1D1DB' : '#686978'};
  outline: unset;

  &::placeholder {
    color: #B8B9C4;
    font-weight: normal;
    text-align: left;
    letter-spacing: 0;
  }
`
