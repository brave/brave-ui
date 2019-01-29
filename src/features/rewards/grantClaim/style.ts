/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Type } from './'
import styled from 'styled-components'

interface StyleProps {
  type?: Type
  isMobile?: boolean
}

export const StyledWrapper = styled<StyleProps, 'div'>('div')`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-family: Poppins, sans-serif;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  padding-left: 20px;
  margin-bottom: ${p => p.isMobile ? 15 : 19}px;
  width: 100%;
  box-shadow: 0 1px 12px 0 rgba(99,105,110,0.18);
`

export const StyledIcon = styled<StyleProps, 'div'>('div')`
  flex-basis: 42px;
  height: 42px;
  width: 52px;
  flex-shrink: 0;
  color: ${p => p.type === 'ads' ? '#C12D7C' : '#FF9868'};
`

export const StyledText = styled<{}, 'div'>('div')`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 70%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #686978;
  padding: 0 10px;
`

export const StyledClaim = styled<{}, 'button'>('button')`
  flex-basis: 90px;
  height: 64px;
  background-color: #fb542b;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.8px;
  color: #fff;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
`
