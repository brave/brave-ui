/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Props } from './index';

export const StyledTokens = styled.span`
  font-family: Poppins;
  font-weight: 300;
  line-height: 1.75;
  color: ${(p: Props) => p.theme && p.theme.color && p.theme.color.text ? p.theme.color.text : '#4b4c5c'}
  font-size: ${(p: Props) => p.theme && p.theme.size ? p.theme.size : '16px'}
` as any

export const StyledTokenValue = styled.span`
  font-weight: 600;
  color: ${(p: Props) => p.theme && p.theme.color && p.theme.color.number ? p.theme.color.number : '#4b4c5c'}
` as any

export const StyledContent = styled.span`
  font-family: Muli;
  font-size: 14px;
  line-height: 1.29;
  color: #b8b9c4;
  display: inline-block;
  margin-left: 5px;
` as any
