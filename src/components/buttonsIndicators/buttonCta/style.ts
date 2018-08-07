/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Color, Props } from './index'

const getColor = (color: Color, disabled: boolean) => {
  let colorCode = ''

  if (disabled) {
    return '#DFDFE8'
  }

  switch (color) {
    case 'brand':
      colorCode = '251, 84, 43'
      break
    case 'action':
      colorCode = '76, 84, 210'
      break
  }

  return colorCode
}

const generateContent = (color: Color, disabled: boolean) => {
  const colorCode = getColor(color, disabled)

  let props = `
    background: rgba(${colorCode}, 0.9);
    color: #fff;

    :hover {
      background: rgba(${colorCode}, 1);
    }

    :active {
      background: rgba(${colorCode}, 0.4);
    }
  `

  if (disabled) {
    props = `
      background: ${colorCode};
      color: #fff;
    `
  }

  return css`
    padding: 21px 15px;
    ${props}
  `
}

export const StyledWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  background: #fff;
  font-size: 14px;
  border-radius: 28px;
  min-width: 235px;
  font-family: Poppins, sans-serif;
` as any

export const StyledContent = styled.div`
  text-align: center;
  box-sizing: border-box;
  letter-spacing: 0;
  font-weight: 600;
  line-height: 1;
  cursor: ${(p: Props) => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  text-transform: uppercase;

  ${(p: Props) => generateContent(p.color, (p.disabled || false))};
` as any

export const StyledIcon = styled.span`
  display: inline-block;
  vertical-align: bottom;
  margin: ${(p: Props) => p.icon && p.icon.position === 'left' ? '0 10px 0 0' : '0 0 0 10px'};
` as any
