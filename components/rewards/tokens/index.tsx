/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledTokens, StyledContent, StyledTokenValue } from './style'

interface Theme {
  color?: {
    token?: CSS.Color
    tokenNum?: CSS.Color
    text?: CSS.Color
  }
  size?: {
    token?: CSS.FontSizeProperty<1>
    text?: CSS.FontSizeProperty<1>
  }
  display?: CSS.DisplayProperty
}

export interface Props {
  id?: string
  value: string | number
  converted?: string | number
  currency?: string
  hideText?: boolean
  isNegative?: boolean
  theme?: Theme
}
/*
  TODO
  - add local
 */
export default class Tokens extends React.PureComponent<Props, {}> {
  render () {
    const { id, converted, value, currency, hideText, isNegative, theme } = this.props
    const defaultCurrency = 'USD'

    return (
      <div id={id}>
        <StyledTokens theme={theme}>
          <StyledTokenValue theme={theme}>
            { isNegative ? '-' : '' }{value}
          </StyledTokenValue> { !hideText ? <span>tokens</span> : null }
        </StyledTokens>
        {
          converted
          ? <StyledContent theme={theme}>
            ~ {converted} {currency || defaultCurrency}
          </StyledContent>
          : null
        }
      </div>
    )
  }
}
