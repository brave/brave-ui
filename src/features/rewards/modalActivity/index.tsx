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
  StyledTableSubTitle,
  StyledVerified,
  StyledVerifiedText,
  StyledSelectOption,
  StyledIcon,
  StyledIconPDF,
  StyledClosing,
  StyledActionIcon,
  StyledAlertWrapper,
  StyledWarningWrapper,
  StyledVerifiedIcon
} from './style'
import TableContribute, { DetailRow as ContributeRow } from '../tableContribute'
import TableTransactions, { DetailRow as TransactionRow } from '../tableTransactions'
import { Select, ControlWrapper, Modal, Tabs } from '../../../components'
import { AlertCircleIcon, DownloadIcon, PrintIcon, VerifiedSIcon } from '../../../components/icons'
import ListToken from '../listToken'
import { Type as TokenType } from '../tokens'

// Utils
import { getLocale } from '../../../helpers'

export interface Token {
  value: string
  converted: string
  isNegative?: boolean
}

export type SummaryType = 'deposit' | 'grant' | 'ads' | 'contribute' | 'recurring' | 'donations'

export interface SummaryItem {
  type: SummaryType
  token: Token
  text: string
  notPaid?: boolean
}

export interface Props {
  contributeRows: ContributeRow[]
  donationRows: ContributeRow[]
  tipRows: ContributeRow[]
  onClose: () => void
  onPrint: () => void
  onDownloadPDF: () => void
  onMonthChange: (value: string, child: React.ReactNode) => void
  months: Record<string, string>
  currentMonth: string
  transactionRows: TransactionRow[]
  openBalance?: Token
  closingBalance?: Token
  id?: string
  summary: SummaryItem[]
  total: Token
  paymentDay: string
  isPdfVersion?: boolean
}

interface State {
  tabId: string
}

export default class ModalActivity extends React.PureComponent<Props, State> {
  private colors: Record<SummaryType, TokenType> = {
    deposit: 'earnings',
    grant: 'earnings',
    ads: 'earnings',
    contribute: 'contribute',
    recurring: 'donation',
    donations: 'donation'
  }

  private hasWarnings: boolean = false

  constructor (props: Props) {
    super(props)
    this.state = {
      tabId: 'cont1'
    }
  }

  get headers () {
    return [
      getLocale('rewardsContributeVisited'),
      getLocale('payment')
    ]
  }

  get tipsHeaders () {
    return [
      getLocale('rewardsTipVisited'),
      getLocale('rewardsTipDate'),
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
    let items: React.ReactNode[]

    if (!this.props.summary) {
      return null
    }

    items = this.props.summary.map((item: SummaryItem, i: number) => {
      let title: React.ReactNode = item.text

      if (item.notPaid) {
        this.hasWarnings = true
        title = (
          <StyledWarningWrapper>
            {title} <StyledAlertWrapper><AlertCircleIcon /></StyledAlertWrapper>
          </StyledWarningWrapper>
        )
      }

      return (
        <ListToken
          key={`${this.props.id}-summary-${i}`}
          title={title}
          value={item.token.value}
          converted={item.token.converted}
          color={item.notPaid ? 'notPaid' : this.colors[item.type]}
          size={'small'}
          border={i === 0 ? 'first' : 'default'}
          isNegative={item.token.isNegative}
        />
      )
    })

    items.push(
      <ListToken
        key={`${this.props.id}-summary-99`}
        title={<b>{getLocale('total')}</b>}
        value={this.props.total.value}
        converted={this.props.total.converted}
        size={'small'}
        border={'last'}
      />
    )

    return items
  }

  onChange = (tabId: string) => {
    this.setState({
      tabId: tabId
    })
  }

  render () {
    const {
      id,
      onClose,
      contributeRows,
      donationRows,
      tipRows,
      onMonthChange,
      currentMonth,
      openBalance,
      closingBalance,
      months,
      transactionRows,
      paymentDay,
      onDownloadPDF,
      onPrint
    } = this.props

    const customTableStyle = {
      'min-width': '100%',
      margin: '0'
    }

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
                openBalance && closingBalance
                  ? <StyledBalance>
                    <ListToken
                      title={getLocale('openBalance')}
                      value={openBalance.value}
                      converted={openBalance.converted}
                      color={'earnings'}
                      border={'last'}
                    />
                    <StyledClosing>
                      <ListToken
                        title={<b>{getLocale('closeBalance')}</b>}
                        value={closingBalance.value}
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
                <StyledIcon onClick={onPrint}>
                  <StyledActionIcon>
                    <PrintIcon />
                  </StyledActionIcon>
                  <StyledIconText>{getLocale('print')}</StyledIconText>
                </StyledIcon>
                <StyledIconPDF onClick={onDownloadPDF}>
                  <StyledActionIcon>
                    <DownloadIcon />
                  </StyledActionIcon>
                  <StyledIconText>{getLocale('downloadPDF')}</StyledIconText>
                </StyledIconPDF>
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
            <div>
              <Tabs activeTabId={this.state.tabId} onChange={this.onChange}>
                <div data-key='cont1' data-title={'Transactions'}>
                  <TableTransactions
                    rows={transactionRows}
                    testId={'txTable'}
                  >
                    {getLocale('noStatementTransactions')}
                  </TableTransactions>
                </div>
                <div data-key='cont2' data-title={'Monthly contributions'}>
                  <TableContribute
                    header={this.headers}
                    rows={donationRows}
                    allSites={true}
                    showRowAmount={true}
                    customStyle={customTableStyle}
                    testId={'monthlyTable'}
                  >
                    {getLocale('noStatementMonthlyContributions')}
                  </TableContribute>
                  <StyledTableSubTitle>
                    {getLocale('paymentMonthly', { day: paymentDay })}
                  </StyledTableSubTitle>
                </div>
                <div data-key='cont3' data-title={'Auto-Contribute'}>
                  <TableContribute
                    header={this.headers}
                    rows={contributeRows}
                    allSites={true}
                    showRowAmount={true}
                    customStyle={customTableStyle}
                    testId={'acTable'}
                  >
                    {getLocale('noStatementAutoContributions')}
                  </TableContribute>
                  <StyledTableSubTitle>
                    {getLocale('paymentMonthly', { day: paymentDay })}
                  </StyledTableSubTitle>
                </div>
                <div data-key='cont4' data-title={'Tips'}>
                <TableContribute
                  header={this.tipsHeaders}
                  rows={tipRows}
                  allSites={true}
                  showRowAmount={true}
                  customStyle={customTableStyle}
                  testId={'tipsTable'}
                >
                  {getLocale('noStatementTips')}
                </TableContribute>
                </div>
                <StyledVerified>
                  <StyledVerifiedIcon>
                    <VerifiedSIcon />
                  </StyledVerifiedIcon>
                  <StyledVerifiedText>{getLocale('braveVerified')}</StyledVerifiedText>
                </StyledVerified>
              </Tabs>
            </div>
          </StyledTables>
          <StyledNote>
            <b>{getLocale('pleaseNote')}</b> {getLocale('activityNote')}
            <br /><br />
            {getLocale('activityCopy')}
          </StyledNote>
        </StyledWrapper>
      </Modal>
    )
  }
}
