/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { HeadingProps } from './index'
import { setTheme } from '../../helpers'

// All feature-based text inherits from StyledSharedHeading
// which excludes normal h1...h6 headings
const StyledSharedHeading = styled.span`
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: default;
` as any

const StyledHeadingTitle = styled(StyledSharedHeading.withComponent('h1'))`
  margin: 0;
  font-weight: 400;
  white-space: nowrap;
  font-size: 28px;
  color: rgb(255, 80, 0);
`

const StyledHeadingTitleLabel = styled.sup`
  box-sizing: border-box;
  color: #999;
  font-size: 15px;
` as any

const StyledSectionHeading = styled(StyledSharedHeading.withComponent('h2'))`
  color: rgb(68, 68, 68);
  font-size: 20px;
  margin: 0 0 20px;
  font-weight: 400;
`

const StyledFeatureHeading = styled(StyledSharedHeading.withComponent('h2'))`
  color: #444444;
  font-weight: normal;
  font-size: 14px;
  margin: 18px 0 8px;
  min-width: 160px;
`

const StyledH1 = styled.h1`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  color: ${(p: HeadingProps) => setTheme(p.customStyle, 'color')};
  font-weight: ${(p: HeadingProps) => setTheme(p.customStyle, 'fontWeight') || '400'};
  font-family: ${(p: HeadingProps) => setTheme(p.customStyle, 'fontFamily') || 'inherit'};
  margin: ${(p: HeadingProps) => setTheme(p.customStyle, 'margin') || '14px 0 22px'};
  font-size: ${(p: HeadingProps) => setTheme(p.customStyle, 'fontSize') || '30px'};
  text-align: ${(p: HeadingProps) => setTheme(p.customStyle, 'textAlign') || 'left'};
  line-height: ${(p: HeadingProps) => setTheme(p.customStyle, 'lineHeight') || '44px'};
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
