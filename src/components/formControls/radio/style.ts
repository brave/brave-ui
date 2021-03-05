/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css, ThemedStyledProps } from '../../../theme'
import { Size } from './index'

interface StyleProps {
  size?: Size
  disabled?: boolean
  selected?: boolean
}

const getThemeSizes = (p: ThemedStyledProps<StyleProps>) => {
  let fillSize = '8'
  let circleSize = '18'
  let fontSize = '14'
  let rightMargin = '17'

  if (p.size === 'big') {
    fillSize = '10'
    circleSize = '24'
    fontSize = '16'
  }

  return css`
    --radio-fill-size: ${fillSize}px;
    --radio-circle-size: ${circleSize}px;
    --radio-font-size: ${fontSize}px;
    --radio-right-margin: ${rightMargin}px;
  `
}

const getThemeColors = (p: ThemedStyledProps<StyleProps>, selected: boolean | undefined) => {
  let fillColor = p.theme.color.brandBat
  let borderColor = p.theme.color.subtleActive

  if (!p.disabled) {
    borderColor = selected
      ? p.theme.color.brandBat
      : p.theme.color.brandBatActive
  }

  return css`
    --radio-fill-color: ${fillColor};
    --radio-border-color: ${borderColor};
  `
}

export const StyledLabel = styled('label')<StyleProps>`
  ${p => getThemeSizes(p)}
  line-height: 1.3;
  display: flex;
  margin-bottom: 30px;
  font-size: var(--radio-font-size);
  cursor: pointer;
`

export const StyledInput = styled('input')<{}>`
  opacity: 0;
  position: absolute;
`

export const StyledCircle = styled('span')<StyleProps>`
  ${p => getThemeSizes(p)}
  ${p => getThemeColors(p, p.selected)}
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: var(--radio-circle-size);
  width: var(--radio-circle-size);
  height: var(--radio-circle-size);
  border: 1px solid var(--radio-border-color);
  margin-right: var(--radio-right-margin);
  border-radius: 50%;
`

export const StyledFill = styled('div')<StyleProps>`
  ${p => getThemeSizes(p)}
  ${p => getThemeColors(p, p.selected)}
  width: var(--radio-fill-size);
  height: var(--radio-fill-size);
  border-radius: 50%;
  background: var(--radio-fill-color);
`

export const StyledText = styled('span')<StyleProps>`
  flex: 1;
  letter-spacing: 0;
  display: flex;
  padding-top: ${(p) => p.size === 'big' ? '2px' : '1px'};
`
