/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Props } from './index'

interface StyleProps extends Props {
  selected?: boolean
}

const getBox = (p: Partial<StyleProps>) => {
  let size = 18
  let borderColor = '#D1D1DB'
  let color = '#696FDC'
  let spacing = 12
  if (p.size === 'big') {
    size = 24
    spacing = 17
  }

  if (p.type === 'dark') {
    color = '#A1A8F2'
  }

  if (p.selected) {
    borderColor = p.type === 'dark' ? '#696FDC' : '#A1A8F2'
  }

  if (p.disabled) {
    borderColor = p.type === 'dark' ? '#686978' : '#EBECF0'
  }

  return css`
    --checkbox-box-size: ${size}px;
    --checkbox-box-borderColor: ${borderColor};
    --checkbox-box-color: ${color};
    --checkbox-box-spacing: ${spacing}px;
  `
}

const getLabel = (p: Partial<StyleProps>) => {
  let color = '#686978'
  let size = 14
  if (p.size === 'big') {
    size = 16
  }

  if (p.type === 'dark') {
    color = '#B8B9C4'
  }

  return css`
    --checkbox-label-color: ${color};
    --checkbox-label-size: ${size}px;
  `
}

export const StyledLabel = styled('div')<Partial<StyleProps>>`
  font-family: ${p => p.theme.fontFamily.body};
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  ${getLabel};
  color: var(--checkbox-label-color);
  font-size: var(--checkbox-label-size);
  cursor: pointer;
`

export const StyledBox = styled('span')<Partial<StyleProps>>`
  border-radius: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  ${getBox};
  flex-basis: var(--checkbox-box-size);
  width: var(--checkbox-box-size);
  height: var(--checkbox-box-size);
  color: var(--checkbox-box-color);
  border: 1px solid var(--checkbox-box-borderColor);
  margin: 8px;
`

export const StyledText = styled('span')<Partial<StyleProps>>`
  flex: 1;
  padding-top: ${(p) => p.size === 'big' ? '2px' : '1px'};
  letter-spacing: 0;
  display: flex;
`
