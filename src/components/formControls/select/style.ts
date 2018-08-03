/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Props, Theme } from './index'
import { setTheme } from '../../../helpers'

export const StyledWrapper = styled.div`
  max-width: ${(p: Props) => setTheme(p.theme, 'maxWidth') || '254px'};
  width: 100%;
` as any

export const StyledSelectWrapper = styled.div`
  position: relative;
  outline: 0;
  font-family: Poppins;
` as any

export const StyledSelect = styled.div`
  border-radius: 3px;
  font-size: 14px;
  color: #686978;
  background: #fff;
  width: 100%;
  padding: ${(p: {show: boolean, theme: Theme}) => setTheme(p.theme, 'padding') || '10px 0'};
  border: ${(p: {show: boolean, theme: Theme}) => setTheme(p.theme, 'border') || '1px solid #dfdfe8'};
  display: flex;
  align-items: center;

  ${(p: {show: boolean, theme: Theme}) => p.show
    ? css`
      border-color: #a1a8f2;
    ` : ''
  }
` as any

export const StyledSelectArrow = styled.div`
  padding-right: ${(p: {show: boolean, theme: Theme}) => setTheme(p.theme, 'arrowPadding') || '15px'};
  flex-basis: 17px;
` as any

export const StyledSelectText = styled.div`
  flex-grow: 1;
  padding: 0 5px 0 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
` as any

export const StyledOptions = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #fff;
  border: solid 1px #dfdfe8;
  overflow: hidden;
  z-index: 2;
  display: ${(p: { show: boolean }) => p.show ? 'block' : 'none'};
` as any

export const StyledOption = styled.div`
  font-size: 14px;
  line-height: 2.57;
  color: #1b1d2f;
  position: relative;
  padding: 0 0 0 12px;
  display: flex;
  background: ${(p: {selected: boolean}) => p.selected ? '#e9f0ff' : '#fff'};
` as any

export const StyledOptionCheck = styled.div`
  flex-basis: 12px;
  flex-shrink: 0;
` as any

export const StyledOptionText = styled.div`
  flex-grow: 1;
  padding: 0 21px 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
` as any
