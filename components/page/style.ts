/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

const StyledPage = styled.div`
  box-sizing: border-box;
  background-attachment: fixed;
  background-size: auto;
  font-family: inherit;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
` as any

const StyledPageContent = styled.main`
  box-sizing: border-box;
  font-family: inherit;
  width: 100%;
  height: 100%;
` as any

export {
  StyledPage,
  StyledPageContent
}
