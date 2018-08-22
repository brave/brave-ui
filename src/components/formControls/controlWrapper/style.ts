/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
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
    color: ${color};
  `
}

export const StyledWrapper = styled<{}, 'div'>('div')`
  width: 100%;
  margin-bottom: 12px;
`

export const StyledLabel = styled<Partial<Props>, 'div'>('div')`
  width: 100%;
  font-family: Poppins, sans-serif;
  line-height: normal;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 7px;
  padding-left: 2px;
  letter-spacing: 0;
  ${getColor};
`
