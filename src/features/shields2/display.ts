/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../theme'
import palette from '../../theme/palette'

export const Link = styled<{}, 'button'>('button')`
  box-sizing: border-box;
  -webkit-appearance: none;
  color: ${palette.orange400};
  border: 0;
  padding: 0;
  text-decoration: underline;
  background: transparent;
  cursor: pointer;
`

export const LinkAction = styled(Link)`
  box-sizing: border-box;
  color: rgb(21, 164, 250);
`
