/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Props } from './index'

export const StyledWrapper = styled<{}, 'div'>('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(12, 13, 33, 0.85);
  z-index: 99;
  padding: 0 20px;
  overflow: hidden;
`

export const StyledDialog = styled<Props, 'div'>('div')`
  max-width: ${p => p.size === 'small' ? '666px' : '920px'};
  margin: 52px auto;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`

export const StyledClose = styled<{}, 'div'>('div')`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: #9E9FAB;
`

export const StyledContent = styled<{}, 'div'>('div')`
  padding: 48px 48px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
`
