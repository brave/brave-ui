/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from '../../../theme'
import { Cell, Row } from './index'

export const StyledNoContent = styled('div')<{}>`
  text-align: center;
  padding: 30px 0;
  color: #999ea2;
  font-size: 14px;
`

export const StyledTable = styled('table')<{}>`
  min-width: 100%;
  margin: 24px 0;
`

export const StyledTH = styled('th')<Partial<Cell>>`
  text-transform: uppercase;
  text-align: left;
  font-family: ${p => p.theme.fontFamily.body};
  font-size: 12px;
  font-weight: 500;
  border-bottom: 2px solid #dedfe4;
  border-top: 2px solid #dedfe4;
  color: #4B4C5C;
  padding: 12px 0;

  ${p => p.customStyle
    ? css`
      ${p.customStyle}
    `
    : ''
  };
`

export const StyledTR = styled('tr')<Partial<Row>>`
  ${p => p.customStyle
    ? css`
      ${p.customStyle}
    `
    : ''
  };
`

export const StyledTD = styled('td')<Partial<Cell>>`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #686978;
  border-bottom: solid 1px #e4e8ec;
  padding: 12px 0;
  text-align: left;

  ${p => p.customStyle
    ? css`
      ${p.customStyle}
    `
    : ''
  };
`
