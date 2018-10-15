/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import {
  StyledWrapper,
  StyledTitle,
  StyledSubTitle,
  StyledHeader,
  StyledLeft,
  StyledRight,
  StyledIconWrap,
  StyledIconText,
  StyledBalance,
  StyledWarning,
  StyledWarningText,
  StyledTables,
  StyledNote,
  StyledTableTitle,
  StyledTableSubTitle,
  StyledVerified,
  StyledVerifiedText,
  StyledSelectOption,
  StyledIcon,
  StyledClosing,
  StyledActionIcon,
  StyledAlertWrapper,
  StyledWarningWrapper,
  StyledVerifiedIcon
} from './style'
import TableContribute, { DetailRow as ContributeRow } from '../tableContribute'
import TableTransactions, { DetailRow as TransactionRow } from '../tableTransactions'
import { Select, ControlWrapper, Modal } from '../../../components'
import { AlertCircleIcon, DownloadIcon, PrintIcon, VerifiedFillIcon } from '../../../components/icons'
import ListToken from '../listToken'
import { Type } from '../tokens'

// Utils
import { getLocale } from '../../../helpers'

export interface Token {
  tokens: string
  converted: string
  isNegative?: boolean
  notPaid?: boolean
}

export interface Props {
  contributeRows: ContributeRow[]
  onClose: () => void
  onPrint?: () => void
  onDownloadPDF?: () => void
  onMonthChange: (value: string, child: React.ReactNode) => void
  months: Record<string, string>
  currentMonth: string
  transactionRows: TransactionRow[]
  openBalance?: Token
  closingBalance?: Token
  id?: string
  hideBalance?: boolean
  report: {
    grant?: Token
    deposit?: Token
    ads?: Token
    contribute?: Token
    donation?: Token
    tips?: Token
  }
  total: Token
  paymentDay: number
}

export default class ModalActivity extends React.PureComponent<Props, {}> {
  private hasWarnings: boolean = false

  get headers () {
    return [
      getLocale('rewardsContributeVisited'),
      getLocale('rewardsContributeAttention'),
      getLocale('payment')
    ]
  }

  get selectTitle () {
    return (
      <StyledTitle>
        {getLocale('braveRewards')} <StyledSubTitle>{getLocale('walletActivity')}</StyledSubTitle>
      </StyledTitle>
    )
  }

  getSummaryBox = () => {
    this.hasWarnings = false

    if (!this.props.report) {
      return null
    }

    const list = [
      {
        key: 'grant',
        translation: 'tokenGrant',
        color: 'earnings'
      },
      {
        key: 'ads',
        translation: 'earningsAds',
        color: 'earnings'
      },
      {
        key: 'deposit',
        translation: 'deposits',
        color: 'earnings'
      },
      {
        key: 'contribute',
        translation: 'rewardsContribute',
        color: 'contribute',
        negative: true
      },
      {
        key: 'donation',
        translation: 'recurringDonations',
        color: 'donation',
        negative: true
      },
      {
        key: 'tips',
        translation: 'oneTimeDonation',
        color: 'donation',
        negative: true
      }
    ]

    let result: React.ReactNode[] = []
    const all = Object.keys(this.props.report).length
    let current = 0

    list.forEach((item, index) => {
      const data = (this.props.report as Record<string, Token>)[item.key]
      let title: React.ReactNode = getLocale(item.translation)

      if (data.notPaid) {
        this.hasWarnings = true
        title = (
          <StyledWarningWrapper>
            {title} <StyledAlertWrapper><AlertCircleIcon /></StyledAlertWrapper>
          </StyledWarningWrapper>
        )
      }
      if (data) {
        current++
        result.push((
          <ListToken
            key={`activity--${index}-${data.tokens}`}
            value={data.tokens}
            converted={data.converted}
            color={item.color as Type}
            title={title}
            isNegative={item.negative}
            border={all === current ? 'last' : undefined}
          />
        ))
      }
    })

    return result
  }

  render () {
    const {
      id,
      onClose,
      contributeRows,
      onMonthChange,
      currentMonth,
      openBalance,
      closingBalance,
      months,
      transactionRows,
      paymentDay,
      onPrint,
      onDownloadPDF,
      hideBalance
    } = this.props

    return (
      <Modal id={id} onClose={onClose}>
        <StyledWrapper>
          <StyledHeader>
            <StyledLeft>
              {
                months
                ? <ControlWrapper text={this.selectTitle}>
                  <Select
                    value={currentMonth}
                    onChange={onMonthChange}
                  >
                    {
                      Object.keys(months).map((item: string) => {
                        return <div data-value={item} key={`${id}-monthly-${item}`}>
                          <StyledSelectOption>{months[item]}</StyledSelectOption>
                        </div>
                      })
                    }
                  </Select>
                </ControlWrapper>
                : null
              }
              {
                !hideBalance && openBalance && closingBalance
                ? <StyledBalance>
                  <ListToken
                    title={getLocale('openBalance')}
                    value={openBalance.tokens}
                    converted={openBalance.converted}
                    color={'earnings'}
                    border={'last'}
                  />
                  <StyledClosing>
                    <ListToken
                      title={<b>{getLocale('closeBalance')}</b>}
                      value={closingBalance.tokens}
                      converted={closingBalance.converted}
                      color={'contribute'}
                      border={'last'}
                    />
                  </StyledClosing>
                </StyledBalance>
                : null
              }

            </StyledLeft>
            <StyledRight>
              <StyledIconWrap>
                {
                  onPrint
                  ? <StyledIcon onClick={onPrint}>
                    <StyledActionIcon>
                      <PrintIcon />
                    </StyledActionIcon>
                    <StyledIconText>{getLocale('print')}</StyledIconText>
                  </StyledIcon>
                  : null
                }
                {
                  onDownloadPDF
                  ? <StyledIcon onClick={onDownloadPDF}>
                    <StyledActionIcon>
                      <DownloadIcon />
                    </StyledActionIcon>
                    <StyledIconText>{getLocale('downloadPDF')}</StyledIconText>
                  </StyledIcon>
                  : null
                }
              </StyledIconWrap>
              {this.getSummaryBox()}
            </StyledRight>
          </StyledHeader>
          {
            this.hasWarnings
            ? <StyledWarning>
                <StyledAlertWrapper>
                  <AlertCircleIcon />
                </StyledAlertWrapper>
                <StyledWarningText>
                  <b>{getLocale('paymentNotMade')}</b> {getLocale('paymentWarning')}
                </StyledWarningText>
            </StyledWarning>
            : null
          }
          <StyledTables>
            {
              transactionRows.length > 0
              ? <>
                <StyledTableTitle>{getLocale('transactions')}</StyledTableTitle>
                <TableTransactions
                  rows={transactionRows}
                />
              </>
              : null
            }
            {
              contributeRows.length > 0
              ? <>
                <StyledTableTitle>
                  <span>{getLocale('contributeAllocation')}</span>
                  <StyledTableSubTitle>
                    {getLocale('paymentMonthly', { day: paymentDay })}
                  </StyledTableSubTitle>
                  </StyledTableTitle>
                <TableContribute
                  header={this.headers}
                  rows={contributeRows}
                  allSites={true}
                  showRowAmount={true}
                />
              </>
              : null
            }
            <StyledVerified>
              <StyledVerifiedIcon>
                <VerifiedFillIcon />
              </StyledVerifiedIcon>
              <StyledVerifiedText>{getLocale('braveVerified')}</StyledVerifiedText>
            </StyledVerified>
          </StyledTables>
          <StyledNote>
            <b>{getLocale('pleaseNote')}</b> {getLocale('activityNote')}
            <br/><br/>
            {getLocale('activityCopy')}
          </StyledNote>
        </StyledWrapper>
      </Modal>
    )
  }
}
