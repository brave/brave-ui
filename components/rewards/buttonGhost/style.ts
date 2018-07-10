/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Color, Props, Size } from './index';

const getColor = (color: Color, disabled: boolean) => {
  let colorCode = ''

  if (disabled) {
    return '#EBECF0'
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

const generateContent = (size: Size, color: Color, disabled: boolean) => {
  const colorCode = getColor(color, disabled)

  let props = `
    color: rgba(${colorCode}, 0.9);
    
    :hover {
      color: rgba(${colorCode}, 1);
    }
    
    :active {
      color: rgba(${colorCode}, 0.6);
    }
  `

  if (disabled) {
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
    ${props}
  `
}

export const StyledWrapper = styled.div`
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  font-family: Poppins;
  letter-spacing: 0;
  font-weight: 600;
  line-height: 1;
  cursor: ${(p: Props) => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  ${(p: Props) => generateContent(p.size, p.color, (p.disabled || false))};
` as any
