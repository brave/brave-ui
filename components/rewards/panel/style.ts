/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled.div`
  font-family: Poppins;
  width: 373px;
` as any

export const StyledPanel = styled.div`
  border-radius: 6px;
  background-color: #f9fbfc;
  box-shadow: 0 0 8px 0 rgba(99, 105, 110, 0.12);
  overflow: hidden;
  width: 100%;
` as any

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  background: url(${(p: {bg: string}) => p.bg}) no-repeat top left, linear-gradient(152deg, #392dd1, rgba(255, 26, 26, 0.53)), linear-gradient(#7d7bdc, #7d7bdc);
  padding: 10px 16px 15px 29px;
` as any

export const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.2px;
  color: #ffffff;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  padding: 13px 0 0;
  height: 42px;
  overflow: hidden;
  line-height: 1;
` as any

export const StyledTM = styled.span`
  font-size: 6px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: #ffffff;
  vertical-align: text-top;
` as any

export const StyledBalance = styled.div`
  text-align: left;
` as any

export const StyledBalanceTitle = styled.div`
  opacity: 0.63;
  font-size: 12px;
  line-height: 1.83;
  color: #ffffff;
  margin-bottom: 3px;
` as any

export const StyledBalanceTokens = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 1.83;
  color: #ffffff;
  
  b {
    font-size: 26px;
    font-weight: 600;
    line-height: 0.85;
    letter-spacing: -0.3px;
    display: inline-block;
    margin-right: 3px;
  }
` as any

export const StyledContent = styled.div`
  padding: 31px 28px 19px;
  position: relative;
` as any

export const StyledFooter = styled.div`
  background-color: #dee2e6;
  border: solid 1px #dbdfe3;
  padding: 23px 33px 8px;
  display: flex;
  flex-wrap: wrap;
` as any

export const StyledAction = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #838391;
  flex-basis: 50%;
  margin-bottom: 15px;
` as any

export const StyledActionIcon = styled.img`
  display: inline-block;
  width: 20px;
  margin-right: 11px;
  vertical-align: text-bottom;
` as any

export const StyledCopy = styled.div`
  font-size: 12px;
  color: #838391;
  padding: 14px 33px;
` as any

export const StyledCopyImage = styled.img`
  vertical-align: text-bottom;
  display: inline-block;
  margin-right: 5px;
` as any
