/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledAmount, StyledLogo, StyledConverted, StyledTokens } from './style'

export interface Props {
  amount: number
  converted: number
  onClick: (amount: number) => void
  id?: string
  selected?: boolean
  type?: 'big' | 'small'
}

const logo = require('./assets/logo')

/*
  TODO
  - add local
  - add support for multiple currencies
 */

export default class Amount extends React.PureComponent<Props, {}> {
  render () {
    const { id, onClick, amount, selected, type } = this.props
    const converted = this.props.converted || 0

    return (
      <StyledWrapper id={id} onClick={onClick.bind(amount)}>
        <StyledAmount selected={selected} type={type}>
          <StyledLogo>{logo}</StyledLogo>{amount} <StyledTokens>{type === 'big' ? 'tokens' : null}</StyledTokens>
        </StyledAmount>
        <StyledConverted selected={selected} type={type}>
          about {converted.toFixed(2)} USD
        </StyledConverted>
      </StyledWrapper>
    )
  }
}
