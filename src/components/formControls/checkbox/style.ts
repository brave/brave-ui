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

export const StyledLabel = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.3;
  color: #686978;
  display: flex;
  margin-bottom: 20px;
` as any

export const StyledBox = styled.span`
  flex-basis: 18px;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: solid 1px ${(p: {selected: boolean, theme: Theme}) => setTheme(p.theme, 'borderColor') || '#d1d1db'};
  margin-right: 11px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

 ${(p: {selected: boolean, theme: Theme}) => p.selected
    ? css`
      border-color: #a1a8f2;
    ` : ''
  }
` as any

export const StyledText = styled.span`
  flex: 1;
` as any
