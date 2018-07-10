/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled.div`
  border-radius: 6px;
  box-shadow: 0 0 8px 0 rgba(99, 105, 110, 0.12);
  overflow: hidden;
  font-family: Poppins;
  width: 373px;
  background:
    url(${(p: {bg: string}) => `"data:image/svg+xml,${p.bg}"`}) no-repeat top left,
    linear-gradient(172deg, #392dd1, rgba(255, 26, 26, 0.53)), 
    linear-gradient(#7d7bdc, #7d7bdc);
` as any

export const StyledHeader = styled.div`
  padding: 16px 21px 0 19px;
  position: relative;
` as any

export const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.65);
` as any

export const StyledBalance = styled.div`
  text-align: center;
` as any

export const StyledBalanceTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.83;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #6cc7fd;
` as any

export const StyledBalanceTokens = styled.div`
  font-size: 36px;
  line-height: 0.61;
  letter-spacing: -0.4px;
  color: #fff;
  margin-top: 10px;
` as any

export const StyledContent = styled.div`
  padding: 31px 25px 19px;
  position: relative;
  background: #f9fbfc;
` as any

export const StyledAction = styled.span`
  display: inline-block;
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
  padding: 19px 15px;
  background: ${(p: {connectedWallet:boolean}) => p.connectedWallet ? '#ccdfea' : '#dee2e6'};
  text-align: center;
` as any

export const StyledCopyImage = styled.span`
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
` as any

export const StyledIconAction = styled.div`
  margin-bottom: 17px;
  cursor:pointer;
  position: absolute;
  top: 21px;
  right: 21px;
` as any

export const StyledBalanceConverted = styled.div`
  font-family: Muli;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  margin: 15px 0 10px;
` as any

export const StyledGrantWrapper = styled.div`
  margin-top: 13px;
` as any

export const StyledGrant = styled.div`
  font-family: Muli;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.60);
  text-align: center;
  margin-bottom: 3px;
  
  b {
    font-weight: 600;
    color: #fff;
    min-width: 81px;
    text-align: right;
    display: inline-block;
  }
  
  span {
    min-width: 135px;
    text-align: left;
    display: inline-block;
  }
` as any

export const StyledActionWrapper = styled.div`
  text-align: center;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 0;
  padding-bottom: 20px;
` as any
