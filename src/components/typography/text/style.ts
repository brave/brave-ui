/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import styled, { StyledProps } from 'styled-components'

import { NullThemeProviderError } from '../../../errors'
import { Props } from './index'

function getFontFamily ({ type, theme = {} }: StyledProps<Props>) {
  const font = theme.fontFamily

  if (font === undefined) {
    throw new NullThemeProviderError()
  }

  return type === 'display' ? font.heading : font.body
}

const StyledSharedText = styled('span')<Props>`
  line-height: 1.5;
  letter-spacing: 0;
  font-family: ${getFontFamily};
`

export const StyledText00 = styled(StyledSharedText)`
  font-size: 10px;
`

export const StyledText01 = styled(StyledSharedText)`
  font-size: 11px;
`

export const StyledText02 = styled(StyledSharedText)`
  font-size: 12px;
`

export const StyledText03 = styled(StyledSharedText)`
  font-size: 14px;
`

export const StyledText04 = styled(StyledSharedText)`
  font-size: 16px;
`

export const StyledText05 = styled(StyledSharedText)`
  font-size: 18px;
`

export const StyledText06 = styled(StyledSharedText)`
  font-size: 22px;
`

export const StyledText07 = styled(StyledSharedText)`
  font-size: 28px;
`

export const StyledText08 = styled(StyledSharedText)`
  font-size: 38px;
`

export const StyledText09 = styled(StyledSharedText)`
  font-size: 48px;
`

export const StyledText10 = styled(StyledSharedText)`
  font-size: 60px;
`

export const StyledText11 = styled(StyledSharedText)`
  font-size: 76px;
`
