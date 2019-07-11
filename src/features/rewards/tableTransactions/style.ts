/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { TransactionType } from './index'

const colors: Record<TransactionType, string> = {
  depositTx: '#9f22a1',
  tipOnLikeTx: '#696fdc',
  donationTx: '#696fdc',
  contributeTx: '#9752cb',
  recurringDonationTx: '#696fdc',
  grantsTx: '#c12d7c',
  earningFromAdsTx: '#c12d7c'
}

const getColor = (p: StyleProps) => {
  const color = colors[p.type]

  return css`
    --tableTransactions-type-color: ${color};
  `
}

interface StyleProps {
  type: TransactionType
}

export const StyledTHLast = styled<{}, 'div'>('div')`
  text-align: right;
  padding-right: 14px;
`

export const StyledProvider = styled<{}, 'span'>('span')`
  color: #9e9fab;
`

export const StyledType = styled<StyleProps, 'div'>('div')`
  ${getColor};
  color: var(--tableTransactions-type-color);
`
