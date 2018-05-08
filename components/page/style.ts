/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { PageProps } from './index'

const StyledPage = styled.div`
  color: ${(p: PageProps) => p.color};
  padding: ${(p: PageProps) => p.padding};
  background-image: ${(p: PageProps) => p.background};
  background-attachment: fixed;
  background-size: auto;
  font-family: inherit;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  padding: 40px;
  display: flex;
  flex-direction: column;
` as any

const StyledPageContent = styled.main`
  font-family: inherit;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
` as any

export {
  StyledPage,
  StyledPageContent
}
