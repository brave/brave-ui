/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { PageProps } from './index'
import { setTheme } from '../helpers'

const StyledPage = styled.div`
  font-family: ${(p: PageProps) => setTheme(p.theme, 'fontFamily') || 'inherit'};
  color: ${(p: PageProps) => setTheme(p.theme, 'color') || 'inherit'};
  padding: ${(p: PageProps) => setTheme(p.theme, 'padding') || '40px'};
  background: ${(p: PageProps) => setTheme(p.theme, 'background') || 'inherit'};
  box-sizing: border-box;
  background-attachment: fixed;
  background-size: auto;
  font-size: inherit;
  display: flex;
  flex-direction: column;
  height: initial;
  min-height: 100%;
` as any

const StyledPageContent = styled.main`
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
` as any

export {
  StyledPage,
  StyledPageContent
}
