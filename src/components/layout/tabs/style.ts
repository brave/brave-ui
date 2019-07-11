/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'

interface StyleProps {
  selected: boolean
}

export const StyledTabWrapper = styled<{}, 'div'>('div')`
  text-align: center;
  font-family: ${p => p.theme.fontFamily.body};
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
`

export const StyledTab = styled<StyleProps, 'div'>('div')`
  color: ${p => p.selected ? '#392dd1' : p.theme.color.text};
  font-size: 16px;
  font-weight: ${p => p.selected ? 'bold' : '500'};
  display: flex;
  cursor: pointer;
  padding: 8px 16px;
`

export const StyledContent = styled<{}, 'div'>('div')`
  padding: 0;
`
