/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Theme } from './index';
import { Props } from '../../../package/components/rewards/checkbox';

const check = require('./assets/check')

export const StyledWrapper = styled.div`
  max-width: ${(p: Props) => p.theme && p.theme.maxWidth ? p.theme.maxWidth : '254px'};
  width: 100%;
` as any

export const StyledLabel = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 2.79;
  color: #686978;
` as any

export const StyledBox = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: solid 1px ${(p: {selected: boolean, theme: Theme}) => p.theme.borderColor ? p.theme.borderColor : '#d1d1db'};
  display: inline-block;
  margin-right: 11px;
  position: relative;
  top: 3px;
  
 ${(p: {selected: boolean, theme: Theme}) => p.selected
    ? css`
      border-color: #a1a8f2;
      background: url("data:image/svg+xml,${check(p.theme.checkColor)}") no-repeat 3px 5px;
    ` : ''
  }
` as any
