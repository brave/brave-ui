/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { GridProps, ColumnProps } from './index'
import { setTheme } from '../../../helpers'

export const StyledGrid = styled('div')<GridProps>`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${p => p.columns ? p.columns : '12'}, 1fr);
  grid-gap: ${p => setTheme(p.customStyle, 'gridGap') || '15px'};
  padding: ${p => setTheme(p.customStyle, 'padding') || '0'};
  margin: ${p => setTheme(p.customStyle, 'margin') || '0'};
  max-width: ${p => setTheme(p.customStyle, 'maxWidth') || 'initial'};
  height: ${p => setTheme(p.customStyle, 'height') || 'initial'};
  color: ${p => setTheme(p.customStyle, 'color') || 'inherit'};
  background-color: ${p => setTheme(p.customStyle, 'backgroundColor') || 'inherit'};
  font-family: inherit;
  font-size: inherit;
  align-items: ${p => setTheme(p.customStyle, 'alignItems') || 'flex-start'};

  ${p => p.disabled
    ? css`
      user-select: none;
      opacity: 0.25;
    ` : ''
  }
`

export const StyledColumn = styled('div')<ColumnProps>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  grid-column: ${p => p.size ? `span ${p.size}` : 'span 12'};
  justify-content: ${p => setTheme(p.customStyle, 'justifyContent') || 'initial'};
  align-items: ${p => setTheme(p.customStyle, 'alignItems') || 'initial'};
  background-color: ${p => setTheme(p.customStyle, 'backgroundColor') || 'inherit'};
  flex-direction: ${p => setTheme(p.customStyle, 'flexDirection') || 'initial'};
  flex-wrap:${p => setTheme(p.customStyle, 'flexWrap') || 'initial'};
  overflow: ${p => setTheme(p.customStyle, 'overflow')};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`
