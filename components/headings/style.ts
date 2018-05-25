/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { HeadingProps } from './index'
import { setTheme } from '../helpers'

// All feature-based text inherits from StyledSharedHeading
// which excludes normal h1...h6 headings
const StyledSharedHeading = styled.span`
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: default;
  font-family: inherit;
` as any

const StyledHeadingTitle = StyledSharedHeading.withComponent('h1').extend`
  margin: 0;
  font-weight: 400;
  white-space: nowrap;
  font-size: 28px;
  color: rgb(255, 80, 0);
` as any

const StyledHeadingTitleLabel = styled.sup`
  box-sizing: border-box;
  color: #999;
  font-size: 15px;
` as any

const StyledSectionHeading = StyledSharedHeading.withComponent('h2').extend`
  color: rgb(68, 68, 68);
  font-size: 20px;
  margin: 0 0 20px;
  font-weight: 400;
` as any

const StyledFeatureHeading = StyledSharedHeading.withComponent('h2').extend`
  color: #444444;
  font-weight: normal;
  font-size: 14px;
  margin: 18px 0 8px;
  min-width: 160px;
` as any

const StyledH1 = styled.h1`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  color: ${(p: HeadingProps) => setTheme(p.theme, 'color')};
  font-weight: ${(p: HeadingProps) => setTheme(p.theme, 'fontWeight') || '400'};
  font-family: ${(p: HeadingProps) => setTheme(p.theme, 'fontFamily') || 'inherit'};
  margin-top: 14px;
  margin-bottom: 22px;
  letter-spacing: -0.4px;
  font-size: 30px;
` as any

const StyledH2 = styled.h2`
  /* TBD */
` as any

const StyledH3 = styled.h3`
  /* TBD */
` as any

const StyledH4 = styled.h4`
  /* TBD */
` as any

const StyledH5 = styled.h5`
  /* TBD */
` as any

const StyledH6 = styled.h6`
  /* TBD */
` as any

export {
  StyledHeadingTitle,
  StyledHeadingTitleLabel,
  StyledSectionHeading,
  StyledFeatureHeading,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6
}
