/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { DataProps, DataItemProps } from './index'
import { setValueBasedOnSize, setTheme } from '../helpers'

// s/Data/data

const StyledDataBlock = styled.ul`
  box-sizing: border-box;
  display: ${(p: DataProps) => !p.asList ? 'inline-block' : 'block'};
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  & > li {
    display: ${(p: DataProps) => p.asList ? 'flex' : 'inline-block'};
    align-items: ${(p: DataProps) => p.asList ? 'center' : null};
    min-height: ${(p: DataProps) => p.asList ? '30px' : null};
    margin-right: ${(p: DataProps) => p.asList ? '0' : '40px'};
    margin-bottom: ${(p: DataProps) => p.asList ? '0' : '20px'};
  }
` as any

const StyledDataItem = styled.li`
  user-select: ${(p: DataItemProps) => setTheme(p.theme, 'userSelect') || 'auto'};
  box-sizing: border-box;
  vertical-align: middle;
  list-style-type: none;
  font-size: inherit;
  font-family: inherit;
` as any

const StyledDataItemCounter = styled.span`
  color: ${(p: DataItemProps) => setTheme(p.theme, 'counterColor') || 'inherit'};
  font-size: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '44px', '26px', undefined)};
  line-height: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '52px', '24px', undefined)};
  width: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '7ch', '3ch', undefined)};
  text-align: ${(p: DataItemProps) => p.size === 'small' ? 'right' : 'inherit'};
  box-sizing: border-box;
  letter-spacing: -0.4px;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
` as any

const StyledDataItemText = styled.span`
  color: ${(p: DataItemProps) => setTheme(p.theme, 'counterColor') || 'inherit'};
  font-size: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '20px', '13px', undefined)};
  line-height: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '24px', '16px', undefined)};
  margin-left: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '3px', '10px', undefined)};
  box-sizing: border-box;
  display: inline;
  font-family: inherit;
  letter-spacing: 0;
` as any

const StyledDataItemDescription = styled.div`
  box-sizing: border-box;
  font-size: 13px;
  line-height: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '24px', '16px', undefined)};
  font-family: inherit;
  color: ${(p: DataItemProps) => setTheme(p.theme, 'descriptionColor') || 'inherit'};
  margin-left: ${(p: DataItemProps) => setValueBasedOnSize(p.size, '3px', '1ch', undefined)};
` as any

export {
  StyledDataBlock,
  StyledDataItem,
  StyledDataItemCounter,
  StyledDataItemText,
  StyledDataItemDescription
}
