/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { PageProps } from './index'
import { checkIfThemeProp } from '../helpers'

const StyledPage = styled.div`
  font-family: ${(p: PageProps) => checkIfThemeProp(p.theme, 'page', 'fontFamily') || 'inherit'};
  color: ${(p: PageProps) => checkIfThemeProp(p.theme, 'page', 'color') || 'inherit'};
  padding: ${(p: PageProps) => checkIfThemeProp(p.theme, 'page', 'padding') || '40px'};
  background: ${(p: PageProps) => checkIfThemeProp(p.theme, 'page', 'background') || 'inherit'};
  box-sizing: border-box;
  background-attachment: fixed;
  background-size: auto;
  font-size: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
` as any

const StyledPageContent = styled.main`
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  width: 100%;
  height: 100%;
` as any

export {
  StyledPage,
  StyledPageContent
}
