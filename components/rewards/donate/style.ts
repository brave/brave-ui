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
  margin-bottom: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 167px;
` as any

export const StyledSend = styled.div`
  background: ${(p: {disabled: boolean, theme: Theme}) => p.theme && p.theme.sendBgColor ? p.theme.sendBgColor : '#4c54d2'};
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${(p: {disabled: boolean, theme: Theme}) => p.disabled ? (p.theme && p.theme.disabledSendColor ? p.theme.disabledSendColor : '#3e45b2') : '#fff'};
  padding: ${(p: {disabled: boolean, theme: Theme}) => p.theme && p.theme.paddingSend ? p.theme && p.theme.paddingSend : '0'};
  text-transform: uppercase;
` as any

export const StyledIconSend = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin-right: 18px;
` as any

export const StyledFunds = styled.div`
  font-family: Muli;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.69;
  color: #ffffff;
  padding: ${(p: {theme: Theme}) => p.theme && p.theme.paddingFunds ? p.theme && p.theme.paddingFunds : '0'};
  background: #1b1d2f;
  display: flex;
  a {
    color: #6cc7fd;
    text-decoration: none;
  }
` as any

export const StyledIconFace = styled.div`
  flex-basis: 26px;
  margin-right: 9px;
` as any

export const StyledFundsText = styled.div`
  flex: 1;
  margin-right: 9px;
` as any


