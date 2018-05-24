/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { GridProps, ColumnProps } from './index'
import { checkIfThemeProp } from '../helpers'

const StyledGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${(p: GridProps) => p.columns ? p.columns : '12'}, 1fr);
  grid-gap: ${(p: GridProps) => checkIfThemeProp(p.theme, 'grid', 'gridGap') || '15px'};
  padding: ${(p: GridProps) => checkIfThemeProp(p.theme, 'grid', 'padding') || '0'};
  max-width: ${(p: GridProps) => checkIfThemeProp(p.theme, 'grid', 'maxWidth') || 'initial'};
  height: ${(p: GridProps) => checkIfThemeProp(p.theme, 'grid', 'height') || 'initial'};
  color: ${(p: GridProps) => checkIfThemeProp(p.theme, 'grid', 'color') || 'inherit'};
  background-color: ${(p: GridProps) => checkIfThemeProp(p.theme, 'grid', 'backgroundColor') || 'inherit'};
  font-family: inherit;
  font-size: inherit;

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
  display: flex;
  grid-column: ${(p: ColumnProps) => p.size ? `span ${p.size}` : 'span 12'};
  justify-content: ${(p: ColumnProps) => checkIfThemeProp(p.theme, 'column', 'justifyContent') || 'initial'};
  align-items: ${(p: ColumnProps) => checkIfThemeProp(p.theme, 'column', 'alignItems') || 'initial'};
  background-color: ${(p: ColumnProps) => checkIfThemeProp(p.theme, 'column', 'backgroundColor') || 'inherit'};
  flex-direction: ${(p: ColumnProps) => checkIfThemeProp(p.theme, 'column', 'flexDirection') || 'initial'};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
` as any

export {
  StyledGrid,
  StyledColumn
}
