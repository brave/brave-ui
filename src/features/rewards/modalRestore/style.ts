/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled<{}, 'div'>('div')`
  font-family: Poppins, sans-serif;
`

export const StyledTitle = styled<{}, 'div'>('div')`
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #4b4c5c;
  margin-bottom: 30px;
`

export const StyledContent = styled<{}, 'div'>('div')`
  font-size: 28px;
  color: #696fdc;
  margin-bottom: 33px;
`

export const StyledRemoveWrapper = styled<{}, 'div'>('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`

export const StyledRemove = styled<{}, 'button'>('button')`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  cursor: pointer;
`

export const StyledRemoveIcon = styled<{}, 'span'>('span')`
  margin: 0 5px 0 0;
  width: 21px;
  height: 21px;
  color: #DFDFE8;
`

export const StyledLink = styled<{}, 'a'>('a')`
  text-decoration: none;
`

export const StyledButtonWrapper = styled<{}, 'div'>('div')`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
