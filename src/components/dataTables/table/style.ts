/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Cell, Row } from './index'

export const StyledNoContent = styled<{}, 'div'>('div')`
  text-align: center;
  padding: 30px 0;
  color: #999ea2;
  font-size: 14px;
`

export const StyledTable = styled<{}, 'table'>('table')`
  width: 100%;
  margin-bottom: 20px;
`

export const StyledTH = styled<Partial<Cell>, 'th'>('th')`
  text-transform: uppercase;
  text-align: left;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 2.33;
  border-bottom: 2px solid #dedfe4;
  border-top: 2px solid #dedfe4;
  color: #4B4C5C;
  padding: 9px 0;

  ${p => p.customStyle
    ? css`
      ${p.customStyle}
    `
    : ''
  };
`

export const StyledTR = styled<Partial<Row>, 'tr'>('tr')`
  ${p => p.customStyle
    ? css`
      ${p.customStyle}
    `
    : ''
  };
`

export const StyledTD = styled<Partial<Cell>, 'td'>('td')`
  font-family: Muli, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #686978;
  border-bottom: solid 1px #e4e8ec;
  padding: 9px 0;
  text-align: left;
  height: 42px;

  ${p => p.customStyle
    ? css`
      ${p.customStyle}
    `
    : ''
  };
`
