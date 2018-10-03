/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Props } from './index'
import colors from '../../../theme/palette'

const getSelectColors = (p: StyleProps) => {
  let color = colors.grey700
  let borderColor = colors.grey300

  if (p.type === 'dark') {
    color = colors.white
    borderColor = colors.grey700
  }

  if (p.show) {
    borderColor = colors.grey300
  }

  if (p.disabled) {
    borderColor = '#E5E5EA'
    color = '#D1D1DB'

    if (p.type === 'dark') {
      color = colors.grey700
      borderColor = colors.grey700
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

export const StyledWrapper = styled<StyleProps, 'div'>('div')`
  width: 100%;
`

export const StyledSelectWrapper = styled<StyleProps, 'div'>('div')`
  position: relative;
  outline: 0;
  font-family: Muli, sans-serif;
`

export const StyledSelect = styled<StyleProps, 'div'>('div')`
  border-radius: 3px;
  font-size: 14px;
  width: 100%;
  padding: ${p => p.floating ? 0 : 8}px 0;
  display: flex;
  align-items: center;
  ${getSelectColors};
  color: var(--select-select-color);
  border: var(--select-select-border);
`

export const StyledSelectArrow = styled<StyleProps, 'div'>('div')`
  margin-right: ${p => p.floating ? 0 : 15}px;
  flex-basis: 22px;
  flex-shrink: 0;
  height: 22px;
`

export const StyledSelectText = styled<StyleProps, 'div'>('div')`
  flex-grow: 1;
  padding: ${p => p.floating ? 0 : '0 5px 0 13px'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledOptions = styled<StyleProps, 'div'>('div')`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: ${p => p.showAllContents ? 'auto' : '100%'};
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #fff;
  border: solid 1px colors.grey300;
  overflow: hidden;
  z-index: 2;
  display: ${p => p.show ? 'block' : 'none'};
  padding: 9px 0;
`

export const StyledOption = styled<StyleProps, 'div'>('div')`
  font-size: 14px;
  line-height: 36px;
  color: colors.grey700;
  position: relative;
  padding: 0 0 0 ${(p) => p.showAllContents ? 4 : 12}px;
  display: flex;
  background: ${p => p.selected ? colors.blurple100 : colors.white};
`

export const StyledOptionCheck = styled<StyleProps, 'div'>('div')`
  flex-basis: 11px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: colors.blurple300
`

export const StyledOptionText = styled<StyleProps, 'div'>('div')`
  flex-grow: 1;
  padding: 0 21px 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ${p => p.showAllContents ? 'initial' : 'ellipsis'};
`
