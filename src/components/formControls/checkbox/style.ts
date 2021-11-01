/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Props } from './index'

interface StyleProps extends Props {
  selected?: boolean
}

const getLabelProps = (p: Partial<StyleProps>) => {
  let boxSize = 18
  let labelSize = 14
  let borderColor = '#D1D1DB'
  let boxColor = '#696FDC'
  let labelColor = '#686978'
  let spacing = 12
  if (p.size === 'big') {
    boxSize = 24
    labelSize = 16
    spacing = 17
  }

  if (p.type === 'dark') {
    boxColor = '#A1A8F2'
    labelColor = '#B8B9C4'
  }

  if (p.selected) {
    borderColor = p.type === 'dark' ? '#696FDC' : '#A1A8F2'
  }

  if (p.disabled) {
    borderColor = p.type === 'dark' ? '#686978' : '#EBECF0'
  }

  return css`
    --checkbox-border-color: ${borderColor};
    --checkbox-border-size: 1px;
    --checkbox-box-size: ${boxSize}px;
    --checkbox-box-color: ${boxColor};
    --checkbox-box-spacing: ${spacing}px;
    --checkbox-label-color: ${labelColor};
    --checkbox-label-size: ${labelSize}px;
    &:focus, &:hover:not([disabled]) {
      outline: none;
      --checkbox-border-color: #A0A5EB;
      --checkbox-border-size: 3px;
    }
  `
}

export const StyledLabel = styled('label')<Partial<StyleProps>>`
  ${getLabelProps};
  font-family: ${p => p.theme.fontFamily.body};
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: var(--checkbox-label-color);
  font-size: var(--checkbox-label-size);
  cursor: pointer;
  &:focus {
    /* Focus style is on child 'box' */
    outline: none;
  }
`

export const StyledBox = styled('span')`
  border-radius: 4px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  flex-basis: var(--checkbox-box-size);
  width: var(--checkbox-box-size);
  height: var(--checkbox-box-size);
  color: var(--checkbox-box-color);
  margin: 8px;
  :after {
    /* Border provided by :after element so that transition of size is smooth without
       svg-resizing 'jumping' effect from resizing padding + border space at the same time */
    transition: border .1s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: var(--checkbox-border-size) solid var(--checkbox-border-color);
    content: '';
    display: block;
    border-radius: 4px;
  }
`

export const StyledText = styled('span')<Partial<StyleProps>>`
  flex: 1;
  padding-top: ${(p) => p.size === 'big' ? '2px' : '1px'};
  letter-spacing: 0;
  display: flex;
`
