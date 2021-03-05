/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from '../../../theme'
import { Props } from './index'

const getColor = (p: Partial<Props>) => {
  let color = '#686978'

  if (p.type === 'dark') {
    color = '#fff'
  }

  if (p.disabled) {
    color = '#D1D1DB'

    if (p.type === 'dark') {
      color = '#686978'
    }
  }

  return css`
    --controlWrapper-label-color: ${color};
  `
}

export const StyledWrapper = styled('div')<{}>`
  width: 100%;
  margin-bottom: 24px;
`

export const StyledLabel = styled('div')<Partial<Props>>`
  width: 100%;
  font-family: ${p => p.theme.fontFamily.body};
  line-height: normal;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  ${getColor};
  color: var(--controlWrapper-label-color);
`
