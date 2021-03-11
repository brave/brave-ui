/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { setTheme } from '../../helpers'
import { CustomStyleProps } from '..'

interface HeadingTheme {
  color?: string
  fontFamily?: string
  fontWeight?: string
  margin?: string
}

export type StyleProps = {
  customStyle?: HeadingTheme
}

// All feature-based text inherits from StyledSharedHeading
// which excludes normal h1...h6 headings
const StyledSharedHeading = styled.span<CustomStyleProps>`
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: default;
`

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
`

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

const StyledH1 = styled.h1<StyleProps>`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  color: ${(p) => setTheme(p.customStyle, 'color')};
  font-weight: ${(p) => setTheme(p.customStyle, 'fontWeight') || '400'};
  font-family: ${(p) => setTheme(p.customStyle, 'fontFamily') || 'inherit'};
  margin: ${(p) => setTheme(p.customStyle, 'margin') || '14px 0 22px'};
  font-size: ${(p) => setTheme(p.customStyle, 'fontSize') || '30px'};
  text-align: ${(p) => setTheme(p.customStyle, 'textAlign') || 'left'};
  line-height: ${(p) => setTheme(p.customStyle, 'lineHeight') || '44px'};
`

const StyledH2 = styled.h2<StyleProps>`
  /* TBD */
`

const StyledH3 = styled.h3<StyleProps>`
  /* TBD */
`

const StyledH4 = styled.h4<StyleProps>`
  /* TBD */
`

const StyledH5 = styled.h5<StyleProps>`
  /* TBD */
`

const StyledH6 = styled.h6<StyleProps>`
  /* TBD */
`

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
