/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Theme } from './index';

export const StyledWrapper = styled.div`
  padding: ${(p: {theme: Theme}) => p.theme && p.theme.paddingBox ? p.theme && p.theme.paddingBox : '0'};
` as any

export const StyledDonationTitle = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #ffffff;
  margin-bottom: 5px;
` as any

export const StyledSend = styled.div`
  background: #4c54d2;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${(p: {disabled: boolean, theme: Theme}) => p.disabled ? '#3e45b2' : '#fff'};
  padding: ${(p: {disabled: boolean, theme: Theme}) => p.theme && p.theme.paddingSend ? p.theme && p.theme.paddingSend : '0'};
  text-transform: uppercase;
` as any

export const StyledIconSend = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin-right: 21px;
` as any

export const StyledFunds = styled.div`
  font-size: 13px;
  padding: ${(p: {theme: Theme}) => p.theme && p.theme.paddingFunds ? p.theme && p.theme.paddingFunds : '0'};
  color: #ffffff;
  background: #1b1d2f;
  
  a {
    color: #6cc7fd;
    text-decoration: none;
  }
` as any

export const StyledIconFace = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin-right: 9px;
` as any


