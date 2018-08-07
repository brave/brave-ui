/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Props } from './index'
import { setTheme } from '../../../helpers'

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(12, 13, 33, 0.85);
  z-index: 99;
  padding: 0 20px;
  overflow: hidden;
` as any

export const StyledDialog = styled.div`
  max-width: ${(p: Props) => setTheme(p.theme, 'maxWidth') || '920px'};
  margin: 52px auto;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
` as any

export const StyledClose = styled.div`
  position: absolute;
  top: 19px;
  right: 19px;
  padding: 10px;
  cursor: pointer;
` as any

export const StyledContent = styled.div`
  padding: 61px 50px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
` as any
