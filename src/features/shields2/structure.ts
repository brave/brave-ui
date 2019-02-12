/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../theme'
// import Card from '../../components/layout/card'

export const ShieldsPanel = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  position: relative;
  background: #FFFFFF;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

export const BlockedListContent = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  z-index: 2;
`

interface BlockedInfoProps {
  // tabIndex: number
}

export const BlockedInfo = styled<BlockedInfoProps, 'div'>('div')`
  box-sizing: border-box;
`
