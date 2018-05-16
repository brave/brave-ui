/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { DataProps, DataItemProps } from './index'
import { setSize } from '../helpers'

// s/Data/data

const StyledDataBlock = styled.ul`
  box-sizing: border-box;
  display: ${(p: DataProps) => !p.list ? 'inline-block' : 'block'};
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  & > li {
    display: ${(p: DataProps) => p.list ? 'flex' : 'inline-block'};
    align-items: ${(p: DataProps) => p.list ? 'center' : null};
    min-height: ${(p: DataProps) => p.list ? '30px' : null};
    margin-right: ${(p: DataProps) => p.list ? '0' : '40px'};
    margin-bottom: ${(p: DataProps) => p.list ? '0' : '20px'};
  }
` as any

const StyledDataItem = styled.li`
  user-select: ${(p: DataItemProps) => p.noSelect ? 'none' : 'auto'};
  box-sizing: border-box;
  vertical-align: middle;
  list-style-type: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
` as any

const StyledDataItemCounter = styled.span`
  color: ${(p: DataItemProps) => p.color || 'inherit'}
  font-size: ${(p: DataItemProps) => setSize(p, null, '44px', '26px')};
  line-height: ${(p: DataItemProps) => setSize(p, null, '52px', '24px')};
  max-width: ${(p: DataItemProps) => setSize(p, null, '200px', '38px')};
  text-align: ${(p: DataItemProps) => p.size === 'small' ? 'right' : 'inherit'};
  box-sizing: border-box;
  letter-spacing: -0.4px;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
` as any

const StyledDataItemText = styled.span`
  font-size: ${(p: DataItemProps) => setSize(p, null, '20px', '13px')};
  line-height: ${(p: DataItemProps) => setSize(p, null, '24px', '16px')};
  margin-left: ${(p: DataItemProps) => setSize(p, null, '3px', '10px')};
  box-sizing: border-box;
  display: inline;
  color: inherit;
  font-family: inherit;
  letter-spacing: 0;
` as any

const StyledDataItemDescription = styled.div`
  box-sizing: border-box;
  font-size: 13px;
  line-height: ${(p: DataItemProps) => setSize(p, null, '24px', '16px')};
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
