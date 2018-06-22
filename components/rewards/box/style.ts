/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { setTheme } from '../../helpers';
import { Props } from './index';

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: flex;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgba(99, 105, 110, 0.12);
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 30px 36px;
  margin-bottom: 28px;
` as any

export const StyledLeft = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
` as any

export const StyledRight = styled.div`
  flex-basis: 40px;
` as any

export const StyledTitle = styled.div`
  height: 36px;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.27;
  letter-spacing: normal;
  color: ${(p: Props) => setTheme(p.theme, 'titleColor') || '#4b4c5c'};
` as any

export const StyledBreak = styled.div`
  width: 100%;
  display: block;
` as any

export const StyledDescription = styled.div`
  width: 100%;
  padding-right: 20px;
  font-family: Muli;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: normal;
  color: #a4aeb8;
` as any

export const StyledSettingsIcon = styled.img`
  width: 20px;
  float: ${(p: {float: string}) => p.float ? p.float : 'none'};
  margin-top: 8px;
` as any

export const StyledContent = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  margin-top: 25px;
` as any

export const StyledSettingsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 28px;
  z-index: 5;
` as any

export const StyledSettingsClose = styled.img`
  position: absolute;
  right: 35px;
  top: 35px;
  width: 13px;
  height: 13px;
` as any

export const StyledSettingsTitle = styled.div`
  text-align: center;
  margin-bottom: 15px;
` as any

export const StyledSettingsText = styled.span`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #4b4c5c;
  position: relative;
  top: -4px;
  display: inline-block;
  margin-left: 20px;
` as any
