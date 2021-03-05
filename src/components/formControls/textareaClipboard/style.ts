/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { keyframes, css } from 'styled-components'
import { Props } from './index'

export const StyledWrapper = styled('div')<{}>`
  width: 100%;
  padding: 10px;
  border: 1px solid #DFDFE8;
  border-radius: 6px;
  font-family: ${p => p.theme.fontFamily.body};

  &:focus-within {
    border-color: #A1A8F2;
    outline: none;
  }
`

export const StyledArea = styled('textarea')<Props>`
  min-height: 140px;
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  border: 1px solid ${(p) => p.disabled ? '#E5E5EA' : '#DFDFE8'};
  color: ${(p) => p.disabled ? '#D1D1DB' : '#686978'};
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 16px;
  line-height: 26px;

  &:disabled {
    background: #fff;
  }

  &:focus {
    border-color: #A1A8F2;
    outline: none;
  }
`
export const StyledFooter = styled('div')<{}>`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  align-items: center;
  margin-top: 10px;
`

const animation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

interface StyledTextProps {
  visible?: boolean
}

export const StyledText = styled('span')<StyledTextProps>`
  opacity: 0;

${p => p.visible && css`
    animation-name: ${animation};
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    will-change: opacity;
  `}
`

export const StyledCopyToClipboard = styled('div')<{}>`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-gap: 10px;
  align-items: center;
`

export const StyledClipboardButton = styled('button')<{}>`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
  outline: none;
`
