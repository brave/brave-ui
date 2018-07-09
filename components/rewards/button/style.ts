/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Color, Props, Size, Type } from './index';

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

const generateWrapper = (type: Type, size: Size, color: Color, disabled: boolean) => {
  let colorCode = getColor(color, disabled)
  let bgColor = ''

  switch (type) {
    case 'ghost':
      colorCode = 'transparent'
      break
    case 'primary':
    case 'cta':
      bgColor = 'background: #fff;'
      break
  }

  let border = `
    border: 1px solid rgb(${colorCode});
  `

  if (!disabled) {
    border += `
      :hover {
        border-color: rgba(${colorCode}, 0.9);
      }
      
      :active {
        border-color: rgba(${colorCode}, 0.6);
      }
    `
  }

  let props = ``
  switch (size)  {
    case 'xlarge':
      props =`
        font-size: 14px;
        border-radius: 28px;
        min-width: 235px;
      `
      break
    case 'large':
      props =`
        font-size: 14px;
        border-radius: 24px;
        min-width: 116px;
      `
      break
    case 'medium':
      props =`
        font-size: 13px;
        border-radius: 20px;
        min-width: 104px;
      `
      break
    case 'small':
      props =`
        font-size: 11px;
        border-radius: 16px;
        min-width: 88px;
      `
      break
  }

  return css`
    ${border}
    ${bgColor}
    ${props}
  `
}

const generateContent = (size: Size, type: Type, color: Color, disabled: boolean) => {
  const colorCode = getColor(color, disabled)

  let props = ``
  switch (type)  {
    case 'primary':
      props = `
        background: rgb(${colorCode});
        color: #fff;
        
        :hover {
          background: rgba(${colorCode}, 0.9);
        }
        
        :active {
          background: rgba(${colorCode}, 0.6);
        }
      `
      break
    case 'secondary':
      props = `
        color: rgb(${colorCode});
        
        :hover {
          color: rgba(${colorCode}, 0.9);
        }
        
        :active {
          color: rgba(${colorCode}, 0.6);
        }
      `
      break
    case 'ghost':
      props = `
        color: rgb(${colorCode});
        
        :hover {
          color: rgba(${colorCode}, 0.9);
        }
        
        :active {
          color: rgba(${colorCode}, 0.6);
        }
      `
      break
    case 'cta':
      props = `
        text-transform: uppercase;
        background: rgb(${colorCode});
        color: #fff;
        
        :hover {
          background: rgba(${colorCode}, 0.9);
        }
        
        :active {
          background: rgba(${colorCode}, 0.6);
        }
      `
      break
  }

  // TODO improve disabled
  if (disabled && color !== 'subtle') {
    props = `
      background: ${colorCode};
      color: #fff;
    `
  }

  let padding = ``
  switch (size)  {
    case 'xlarge':
      padding =`
        padding: 21px 15px;
      `
      break
    case 'large':
      padding =`
        padding: 17px 15px;
      `
      break
    case 'medium':
      padding =`
        padding: 13.5px 10px;
      `
      break
    case 'small':
      padding =`
        padding: 10.5px 10px;
      `
      break
  }

  return css`
    ${props}
    ${padding}
  `
}

export const StyledWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  ${(p: Props) => generateWrapper(p.type, p.size, p.color, (p.disabled || false))}
` as any

export const StyledContent = styled.div`
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
  
  ${(p: Props) => generateContent(p.size, p.type, p.color, (p.disabled || false))}
` as any
