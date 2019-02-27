/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../style/theme'
import { CardProps } from './index'

export const StyledCard = styled.div<CardProps>`
  max-width: 100%;
  width: 100%;
  min-height: auto;
  margin: 0;
  padding: 30px 36px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 12px 0 rgba(99,105,110,0.18);
  font-size: inherit;
  box-sizing: border-box;
  position: relative;
`
