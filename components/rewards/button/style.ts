/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Color, Props, Size, Type } from './index';

const generateColors = (type: Type, color: Color, disabled: boolean) => {
  let colorCode = ''

  if (disabled) {
    return css`
      background: #EBECF0;
      color: #FFFFFF;
    `
  }

  switch (color) {
    case 'brand':
      colorCode = '#FB542B'
      break
    case 'action':
      colorCode = '#4C54D2'
      break
    case 'subtle':
      colorCode = '#B8B9C4'
      break
  }

  switch (type)  {
    case 'primary':
      return css`
        background: ${colorCode};
        color: #FFFFFF;
      `
    case 'secondary':
      return css`
        border: 1px solid ${colorCode};
        color: ${colorCode};
      `
    case 'ghost':
      return css`
        color: ${colorCode};
      `
    case 'cta':
      return css`
        text-transform: uppercase;
        background: ${colorCode};
        color: #FFFFFF;
      `
  }

  return css``
}

const generateBySize = (size: Size) => {
  switch (size)  {
    case 'xlarge':
      return css`
        font-size: 14px;
        border-radius: 28px;
        min-width: 235px;
        padding: 21px 15px;
      `
    case 'large':
      return css`
        font-size: 14px;
        border-radius: 24px;
        min-width: 116px;
        padding: 17px 15px;
      `
    case 'medium':
      return css`
        font-size: 13px;
        border-radius: 20px;
        min-width: 104px;
        padding: 13.5px 10px;
      `
    case 'small':
      return css`
        font-size: 11px;
        border-radius: 16px;
        min-width: 88px;
        padding: 10.5px 10px;
      `
  }

  return css``
}

export const StyledWrapper = styled.div`
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  font-family: Poppins;
  text-align: center;
  letter-spacing: 0;
  font-weight: 600;
  line-height: 1;
  
  ${(p: Props) => p.color === 'subtle'
    ? css`
      font-weight: 500;
    `
    : ''
  }
  
  ${(p: Props) => generateColors(p.type, p.color, (p.disabled || false))}
  ${(p: Props) => generateBySize(p.size)}
` as any
