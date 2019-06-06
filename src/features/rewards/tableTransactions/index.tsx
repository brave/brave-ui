/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledTHLast,
  StyledProvider
} from './style'
import Table, { Row } from '../../../components/dataTables/table/index'
import { getLocale } from '../../../helpers'
import Tokens, { Type as TokenType } from '../tokens'

export type TransactionType = 'depositTx' | 'tipOnLikeTx' | 'donationTx' | 'contributeTx' | 'recurringDonationTx' | 'grantsTx' | 'earningFromAdsTx'

type Description = string | { publisher: string, platform: string }

export interface DetailRow {
  date: string
  type: TransactionType
  description: Description
  amount: { value: string, converted: string, isNegative?: boolean }
}

export interface Props {
  id?: string
  children?: React.ReactNode
  rows?: DetailRow[]
  testId?: string
}

export default class TableTransactions extends React.PureComponent<Props, {}> {
  private tokenColors: Record<TransactionType, TokenType> = {
    depositTx: 'earnings',
    tipOnLikeTx: 'donation',
    donationTx: 'donation',
    contributeTx: 'contribute',
    recurringDonationTx: 'donation',
    grantsTx: 'earnings',
    earningFromAdsTx: 'earnings'
  }

  getHeader = () => {
    const header: string[] = [
      getLocale('date'),
      getLocale('description'),
      getLocale('amount')
    ]

    return header.map((item: string, i: number) => {
      return {
        content: i === header.length - 1
        ? <StyledTHLast>{item}</StyledTHLast>
        : item
      }
    })
  }

  getDescription = (desc: Description) => {
    if (typeof desc === 'string') {
      return desc
    }

    return (
      <>
        <span>{desc.publisher}</span> <StyledProvider>{getLocale('on')} {desc.platform}</StyledProvider>
      </>
    )
  }

  getRows = (rows?: DetailRow[]): Row[] | undefined => {
    if (!rows) {
      return
    }

    return rows.map((row: DetailRow): Row => {
      const cell: Row = {
        content: [
          {
            content: row.date
          },
          {
            content: this.getDescription(row.description)
          },
          {
            content: (
              <Tokens
                value={row.amount.value}
                isNegative={row.amount.isNegative}
                converted={row.amount.converted}
                color={this.tokenColors[row.type]}
                size={'small'}
              />
            ),
            customStyle: {
              'text-align': 'right',
              'padding-right': '14px'
            }
          }
        ]
      }
      return cell
    })
  }

  render () {
    const { id, children, rows, testId } = this.props

    return (
      <div id={id} data-test-id={testId}>
        <Table
          header={this.getHeader()}
          children={children}
          rows={this.getRows(rows)}
        />
      </div>
    )
  }
}
