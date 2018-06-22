/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, {css} from 'styled-components'

const check = require('./assets/check.svg')
const arrow = require('./assets/arrow.svg')

export const StyledWrapper = styled.div`
  max-width: 254px;
  width: 100%;
` as any

export const StyledTitle = styled.div`
  width: 100%;
  font-family: Poppins;
  line-height: normal;
  font-size: 14px;
  font-weight: 500;
  color: #686978;
  margin-bottom: 6px;
` as any

export const StyledSelectWrapper = styled.div`
  position: relative;
  outline: 0;
` as any

export const StyledSelect = styled.div`
  line-height: normal;
  border-radius: 3px;
  border: solid 1px #dfdfe8;
  font-family: Poppins;
  font-size: 14px;
  color: #686978;
  background: #fff;
  width: 100%;
  padding: 10px 31px 10px 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: url(${arrow}) no-repeat right 15px top 16px #fff;
  
  ${(p: {show: boolean}) => p.show
    ? css`
      border-color: #a1a8f2;
    ` : ''
  }
` as any

export const StyledOptions = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #ffffff;
  border: solid 1px #dfdfe8;
  overflow: hidden;
  
  ${(p: {show: boolean}) => p.show
    ? css`
      display: block;
    ` : ''
  }
` as any


export const StyledOption = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 2.57;
  color: #1b1d2f;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1px 21px 0 30px;
  
  ${(p: {selected: boolean}) => p.selected
    ? css`
      background: url(${check}) no-repeat 14px 12px #e9f0ff;
    ` : ''
  }
` as any
