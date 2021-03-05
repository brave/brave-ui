/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledDialogWrapper = styled('div')<{}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  display: flex;
`

export const StyledDialog = styled('div')<{}>`
  width: 470px;
  margin: auto;
  padding: 30px 20px 10px;
  max-height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 1fr auto;
  overflow-y: auto;
  background: #fff;
  box-shadow: 1px 2px 18px 0 rgba(0,0,0,0.5);
  border-radius: 6px;
`

export const StyledFooter = styled('footer')<{}>`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
`

export const StyledCancelContainer = styled('div')<{}>`
  display: flex;
  justify-content: flex-end;
`
