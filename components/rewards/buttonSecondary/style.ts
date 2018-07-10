/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Color, Props, Size } from './index';

const getColor = (color: Color, disabled: boolean) => {
  let colorCode = ''

  if (disabled && color !== 'subtle') {
    return '#EBECF0'
  }

  switch (color) {
    case 'brand':
      colorCode = '251, 84, 43'
      break
    case 'action':
      colorCode = '76, 84, 210'
      break
    case 'subtle':
      colorCode = '184, 185, 196'
      break
  }

  return colorCode
}

const generateWrapper = (size: Size, color: Color, disabled: boolean) => {
  let colorCode = getColor(color, disabled)

  let border = `
    border: 1px solid rgba(${colorCode}, 0.9);
  `

  let props = `
    color: rgba(${colorCode}, 0.9);
  `

  if (!disabled) {
    border += `
      :hover {
        border-color: rgba(${colorCode}, 1);
      }
      
      :active {
        border-color: rgba(${colorCode}, 0.6);
      }
    `

    props += `
      :hover {
        color: rgba(${colorCode}, 1);
      }
      
      :active {
        color: rgba(${colorCode}, 0.6);
      }
  `
  }

  if (disabled && color !== 'subtle') {
    props = `
      background: ${colorCode};
      color: #fff;
    `
  }

  switch (size)  {
    case 'large':
      props +=`
        font-size: 14px;
        border-radius: 24px;
        min-width: 116px;
        padding: 17px 15px;
      `
      break
    case 'medium':
      props +=`
        font-size: 13px;
        border-radius: 20px;
        min-width: 104px;
        padding: 13.5px 10px;
      `
      break
    case 'small':
      props +=`
        font-size: 11px;
        border-radius: 16px;
        min-width: 88px;
        padding: 10.5px 10px;
      `
      break
  }

  return css`
    ${border}
    ${props}
  `
}


export const StyledWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  ${(p: Props) => generateWrapper(p.size, p.color, (p.disabled || false))};
  text-align: center;
  box-sizing: border-box;
  font-family: Poppins;
  letter-spacing: 0;
  font-weight: 600;
  line-height: 1;
  cursor: ${(p: Props) => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  
  ${(p: Props) => p.color === 'subtle'
    ? css`
      font-weight: 500;
    `
    : ''
  }
` as any

export const StyledIcon = styled.img`
  display: inline-block;
  vertical-align: bottom;
  margin: ${(p: Props) => p.icon && p.icon.position === 'left' ? '0 10px 0 0' : '0 0 0 10px'};
` as any
