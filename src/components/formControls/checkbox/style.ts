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
    flex-basis: ${size}px;
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${borderColor};
    color: ${color};
    margin-right: ${spacing}px;
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
    color: ${color};
    font-size: ${size}px;
  `
}

export const StyledLabel = styled<Partial<StyleProps>, 'div'>('div')`
  font-family: Poppins, sans-serif;
  line-height: 1.3;
  display: flex;
  margin-bottom: 20px;
  ${getLabel};
`

export const StyledBox = styled<Partial<StyleProps>, 'span'>('span')`
  border-radius: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5px;
  ${getBox};
`

export const StyledText = styled<Partial<StyleProps>, 'span'>('span')`
  flex: 1;
  padding-top: ${(p: Partial<StyleProps>) => p.size === 'big' ? '2px' : '1px'};
  letter-spacing: 0;
`
