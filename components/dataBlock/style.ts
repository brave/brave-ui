/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { DataItemProps } from './index'

// s/Data/data

const StyledDataBlock = styled.ul`
  box-sizing: border-box;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
` as any

const StyledDataItem = styled.li`
  box-sizing: border-box;
  margin-right: 40px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: middle;
  list-style-type: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
` as any

const StyledDataItemCounter = styled.div`
  box-sizing: border-box;
  color: ${(p: DataItemProps) => p.color || 'inherit'}
  letter-spacing: -0.4px;
  font-size: 44px;
  font-family: inherit;
  line-height: 53px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 200px;
` as any

const StyledDataItemText = styled.span`
  box-sizing: border-box;
  display: inline;
  color: inherit;
  font-size: 20px;
  font-family: inherit;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 3px;
` as any

const StyledDataItemDescription = styled.div`
  box-sizing: border-box;
  font-size: 13px;
  font-family: inherit;
  color: inherit;
  margin-left: 3px;
` as any

export {
  StyledDataBlock,
  StyledDataItem,
  StyledDataItemCounter,
  StyledDataItemText,
  StyledDataItemDescription
}
