/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { PageProps } from './index'
import { setTheme } from '../../helpers'

const StyledPage = styled.div<PageProps>`
  font-family: ${(p: PageProps) => setTheme(p.customStyle, 'fontFamily') || 'inherit'};
  color: ${(p: PageProps) => setTheme(p.customStyle, 'color') || 'inherit'};
  padding: ${(p: PageProps) => setTheme(p.customStyle, 'padding') || '40px'};
  background: ${(p: PageProps) => setTheme(p.customStyle, 'background') || 'inherit'};
  align-items: ${(p: PageProps) => setTheme(p.customStyle, 'alignItems')};
  justify-content: ${(p: PageProps) => setTheme(p.customStyle, 'justifyContent')};
  height: ${(p: PageProps) => setTheme(p.customStyle, 'height') || 'initial'};
  background-size: ${(p: PageProps) => setTheme(p.customStyle, 'backgroundSize') || 'auto'};
  box-sizing: border-box;
  background-attachment: fixed;
  font-size: inherit;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const StyledPageContent = styled.main`
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
`

export {
  StyledPage,
  StyledPageContent
}
