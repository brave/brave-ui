/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'

const check = require('./assets/check')

export const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
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
  border: solid 1px #d1d1db;
  display: inline-block;
  margin-right: 11px;
  position: relative;
  top: 3px;
  
 ${(p: {selected: boolean}) => p.selected
    ? css`
      border-color: #a1a8f2;
      background: url("data:image/svg+xml,${check}") no-repeat 3px 5px;
    ` : ''
  }
` as any
