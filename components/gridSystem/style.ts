/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { GridProps, ColumnProps } from './index'

const StyledGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${(p: GridProps) => p.columns ? p.columns : '12'}, 1fr);
  grid-gap: ${(p: GridProps) => p.gap ? p.gap : '15px'};
  padding: ${(p: GridProps) => p.padding ? p.padding : '0'};
  max-width: ${(p: GridProps) => p.width ? p.width : 'initial'};
  height: ${(p: GridProps) => p.height ? p.height : 'initial'};
  color: ${(p: GridProps) => p.textColor ? p.textColor : 'inherit'};
  background-color: ${(p: GridProps) => p.background ? p.background : 'inherit'};

  ${(p: GridProps) => p.disabled
    ? css`
      user-select: none;
      opacity: 0.25;
    ` : ''
  }
` as any

const StyledColumn = styled.div`
  box-sizing: border-box;
  position: relative;
  display: ${(p: ColumnProps) =>
    p.align || p.verticalAlign || p.direction ? 'flex' : 'block'
  };
  grid-column: ${(p: ColumnProps) => p.size ? `span ${p.size}` : 'span 12'};
  justify-content: ${(p: ColumnProps) => p.align ? p.align : 'initial'};
  align-items: ${(p: ColumnProps) => p.verticalAlign ? p.verticalAlign : 'initial'};
  background-color: ${(p: ColumnProps) => p.background ? p.background : 'inherit'};
  flex-direction: ${(p: ColumnProps) => p.direction ? p.direction : 'initial'};
` as any

export {
  StyledGrid,
  StyledColumn
}
