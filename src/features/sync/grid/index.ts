/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'

export const SectionBlock = styled<{}, 'section'>('section')`
  margin: 10px 0 20px;
`

interface GridProps {
  columns?: string
  rows?: string
  gap?: string
  direction?: string
}

export const Grid = styled<GridProps, 'footer'>('footer')`
  display: flex;
  flex-direction: ${p => p.direction};
`

interface FlexColumnProps {
  items?: string
  content?: string
  margin?: string
}

export const FlexColumn = styled<FlexColumnProps, 'div'>('div')`
  display: flex;
  align-items: ${p => p.items};
  justify-content: ${p => p.content};
  margin: ${p => p.margin};
`
