/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from '../../../theme'
import { Props } from './index'

const getSelectColors = (p: StyleProps) => {
  let color = '#686978'
  let borderColor = '#DFDFE8'

  if (p.type === 'dark') {
    color = '#fff'
    borderColor = '#686978'
  }

  if (p.show) {
    borderColor = '#A1A8F2'
  }

  if (p.disabled) {
    borderColor = '#E5E5EA'
    color = '#D1D1DB'

    if (p.type === 'dark') {
      color = '#686978'
      borderColor = '#686978'
    }
  }

  let border = `1px solid ${borderColor}`
  if (p.floating) {
    border = 'none'
  }

  return css`
    --select-select-color: ${color};
    --select-select-border: ${border};
  `
}

interface StyleProps extends Props {
  show?: boolean
  selected?: boolean
  showAllContents?: boolean
}

export const StyledWrapper = styled('div')<StyleProps>`
  width: 100%;
`

export const StyledSelectWrapper = styled('div')<StyleProps>`
  position: relative;
  outline: 0;
  font-family: ${p => p.theme.fontFamily.body};
`

export const StyledSelect = styled('div')<StyleProps>`
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  padding: 8px 36px 8px 0;
  display: flex;
  align-items: center;
  ${getSelectColors};
  color: var(--select-select-color);
  border: var(--select-select-border);
`

export const StyledSelectArrow = styled('div')<StyleProps>`
  height: 12px;
  width: 12px;
  position: absolute;
  right: 12px;
`

export const StyledSelectText = styled('div')<StyleProps>`
  flex-grow: 1;
  padding: ${p => p.floating ? 0 : '0 5px 0 13px'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledOptions = styled('div')<StyleProps>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: ${p => p.showAllContents ? 'auto' : '100%'};
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #fff;
  border: solid 1px #dfdfe8;
  overflow: hidden;
  z-index: 2;
  display: ${p => p.show ? 'block' : 'none'};
  padding: 8px 0;
`

export const StyledOption = styled('div')<StyleProps>`
  font-size: 14px;
  line-height: 36px;
  color: #1b1d2f;
  position: relative;
  padding: 0 0 0 ${(p) => p.showAllContents ? 4 : 12}px;
  display: flex;
  background: ${p => p.selected ? '#e9f0ff' : '#fff'};
`

export const StyledOptionCheck = styled('div')<StyleProps>`
  flex-basis: 11px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: #A1A8F2;
`

export const StyledOptionText = styled('div')<StyleProps>`
  padding: 0 21px 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ${p => p.showAllContents ? 'initial' : 'ellipsis'};
`

export const StyledOptionsOverlay = styled('div')<StyleProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${p => p.theme.color.modalOverlayBackground};
  align-items: center;
  z-index: 999;
  justify-content: center;
`

export const StyledOptionsModal = styled('div')<StyleProps>`
  border-radius: 4px;
  background: ${p => p.theme.color.primaryBackground};
  height: 30%;
  width: 50%;
  z-index: 9999;
  padding: 42px 55px 30px;

  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-height: 1080px) {
    height: 40%;
  }
  @media (max-height: 900px) {
    height: 60%;
  }
  @media (max-height: 620px) {
    height: 65%;
  }
  @media (max-height: 550px) {
    height: 75%;
  }
`

export const StyledSelectTitle = styled('span')<StyleProps>`
  color: ${p => p.theme.color.defaultControlActive};
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: 30px;
  text-align: left;
  font-family: ${p => p.theme.fontFamily.body};
`

export const StyledModalContent = styled('div')<StyleProps>`
  display: block;
`

export const StyledRadioOptions = styled('div')<StyleProps>`
  display: block;
  max-height: 250px;
  overflow-y: scroll;
`
