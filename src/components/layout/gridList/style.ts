/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { GridProps, ColumnProps } from './index'
import { setTheme } from '../../../helpers'

const StyledGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${(p: GridProps) => p.columns ? p.columns : '12'}, 1fr);
  grid-gap: ${(p: GridProps) => setTheme(p.customStyle, 'gridGap') || '15px'};
  padding: ${(p: GridProps) => setTheme(p.customStyle, 'padding') || '0'};
  margin: ${(p: GridProps) => setTheme(p.customStyle, 'margin') || '0'};
  max-width: ${(p: GridProps) => setTheme(p.customStyle, 'maxWidth') || 'initial'};
  height: ${(p: GridProps) => setTheme(p.customStyle, 'height') || 'initial'};
  color: ${(p: GridProps) => setTheme(p.customStyle, 'color') || 'inherit'};
  background-color: ${(p: GridProps) => setTheme(p.customStyle, 'backgroundColor') || 'inherit'};
  font-family: inherit;
  font-size: inherit;
  align-items: ${(p: GridProps) => setTheme(p.customStyle, 'alignItems') || 'flex-start'};

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
  justify-content: ${(p: ColumnProps) => setTheme(p.customStyle, 'justifyContent') || 'initial'};
  align-items: ${(p: ColumnProps) => setTheme(p.customStyle, 'alignItems') || 'initial'};
  background-color: ${(p: ColumnProps) => setTheme(p.customStyle, 'backgroundColor') || 'inherit'};
  flex-direction: ${(p: ColumnProps) => setTheme(p.customStyle, 'flexDirection') || 'initial'};
  flex-wrap:${(p: ColumnProps) => setTheme(p.customStyle, 'flexWrap') || 'initial'};
  overflow: ${(p: ColumnProps) => setTheme(p.customStyle, 'overflow')};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
` as any

export {
  StyledGrid,
  StyledColumn
}
