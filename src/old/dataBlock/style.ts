/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { setValueBasedOnSize, setTheme } from '../../helpers'

type DataItemTheme = {
  counterColor?: string
  descriptionColor?: string
  userSelect?: string
}

export type StyleProps = {
  asList?: boolean
}

export type ItemStyleProps = {
  size?: 'medium' | 'small'
  customStyle?: DataItemTheme
  asList?: boolean
}

// s/Data/data

const StyledDataBlock = styled.ul<StyleProps>`
  box-sizing: border-box;
  display: ${(p) => !p.asList ? 'inline-block' : 'block'};
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  & > li {
    display: ${(p) => p.asList ? 'flex' : 'inline-block'};
    align-items: ${(p) => p.asList ? 'center' : null};
    min-height: ${(p) => p.asList ? '30px' : null};
    margin-right: ${(p) => p.asList ? '0' : '40px'};
    margin-bottom: ${(p) => p.asList ? '0' : '20px'};
  }
`

const StyledDataItem = styled.li<ItemStyleProps>`
  user-select: ${(p) => setTheme(p.customStyle, 'userSelect') || 'auto'};
  box-sizing: border-box;
  vertical-align: middle;
  list-style-type: none;
  font-size: inherit;
  font-family: inherit;
`

const StyledDataItemCounter = styled.span<ItemStyleProps>`
  color: ${(p) => setTheme(p.customStyle, 'counterColor') || 'inherit'};
  font-size: ${(p) => setValueBasedOnSize(p.size, '44px', '26px', undefined)};
  line-height: ${(p) => setValueBasedOnSize(p.size, '52px', '24px', undefined)};
  width: ${(p) => setValueBasedOnSize(p.size, '7ch', '3ch', undefined)};
  text-align: ${(p) => p.size === 'small' ? 'right' : 'inherit'};
  box-sizing: border-box;
  letter-spacing: -0.4px;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const StyledDataItemText = styled.span<ItemStyleProps>`
  color: ${(p) => setTheme(p.customStyle, 'counterColor') || 'inherit'};
  font-size: ${(p) => setValueBasedOnSize(p.size, '20px', '13px', undefined)};
  line-height: ${(p) => setValueBasedOnSize(p.size, '24px', '16px', undefined)};
  margin-left: ${(p) => setValueBasedOnSize(p.size, '3px', '10px', undefined)};
  box-sizing: border-box;
  display: inline;
  font-family: inherit;
  letter-spacing: 0;
`

const StyledDataItemDescription = styled.div<ItemStyleProps>`
  box-sizing: border-box;
  font-size: 13px;
  line-height: ${(p) => setValueBasedOnSize(p.size, '24px', '16px', undefined)};
  font-family: inherit;
  color: ${(p) => setTheme(p.customStyle, 'descriptionColor') || 'inherit'};
  margin-left: ${(p) => setValueBasedOnSize(p.size, '3px', '1ch', undefined)};
`

export {
  StyledDataBlock,
  StyledDataItem,
  StyledDataItemCounter,
  StyledDataItemText,
  StyledDataItemDescription
}
