/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledTokens, StyledContent, StyledTokenValue } from './style'

export interface Props {
  id?: string
  value: string | number
  converted?: string | number
  currency?: string
  hideText?: boolean
}
/*
  TODO
  - add local
 */
export default class Tokens extends React.PureComponent<Props, {}> {
  render () {
    const { id, converted, value, currency, hideText } = this.props
    const defaultCurrency = 'USD'

    return (
      <div id={id}>
        <StyledTokens>
          <StyledTokenValue>{value}</StyledTokenValue> { !hideText ? <span>tokens</span> : null }
        </StyledTokens>
        {
          converted
          ? <StyledContent>
            ~{converted} {currency || defaultCurrency}
          </StyledContent>
          : null
        }
      </div>
    )
  }
}
