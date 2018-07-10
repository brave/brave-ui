/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledType, StyledDate, StyledRemove, StyledRemoveIcon, StyledToggle, StyledRecurringIcon } from './style'
import Table, { Cell, Row } from '../table'
import Profile, { Provider } from '../profile'
import Tokens from '../tokens'

interface ProfileCell {
  verified: boolean
  name: string
  provider?: Provider
  src: string
}

type DonationType = 'donation' | 'tip' | 'recurring'

export interface DetailRow {
  profile: ProfileCell
  contribute: {
    tokens: number
    converted: number
  }
  text?: string | React.ReactNode
  onRemove?: () => void
  type: DonationType
}

export interface Props {
  id?: string
  children?: React.ReactNode
  rows?: DetailRow[]
  numItems?: number
  allItems?: boolean
  onClick?: () => void
  theme?: Theme
}

interface Theme {
  headerColor?: CSS.Color
}

const removeIcon = require('./assets/close')
const monthlyIcon = require('./assets/monthly')

/*
  TODO
  - add local
 */
export default class DonationTable extends React.PureComponent<Props, {}> {
  getTypeContent (row: DetailRow): Cell {
    switch (row.type) {
      case 'recurring':
        return {
          content: <>
            <StyledType>Recurring <StyledRecurringIcon>{monthlyIcon}</StyledRecurringIcon></StyledType>
            <StyledRemove onClick={row.onRemove}>
              <StyledRemoveIcon> {removeIcon} </StyledRemoveIcon>remove
            </StyledRemove>
          </>
        }
      case 'donation':
        return {
          content: <>
            <StyledType>One time</StyledType>
            <StyledDate>{row.text}</StyledDate>
          </>
        }
      case 'tip':
        return {
           content: <>
            <StyledType>Tip on like</StyledType>
            <StyledDate>{row.text}</StyledDate>
          </>
        }
    }
  }

  getRows (rows?: DetailRow[]): Row[] | undefined {
    if (!rows) {
      return
    }

    return rows.map((row: DetailRow): Row => {
      return {
        content: [
          {
            content: <Profile
              title={row.profile.name}
              provider={row.profile.provider}
              verified={row.profile.verified}
              type={'small'}
              src={row.profile.src}
            />
          },
          this.getTypeContent(row),
          {
            content: <Tokens
              value={row.contribute.tokens}
              converted={row.contribute.converted}
              hideText
              theme={{
                display: 'block',
                size: {token: '14px', text: '10px'},
                color: {token: '#686978', text: '#9e9fab'}
              }}
            />,
            theme: {
              'text-align': 'right',
              'padding-right': '7px'
            }
          }
        ]
      }
    })
  }

  get headers (): Cell[] {
    let theme = {}

    if (this.props.theme && this.props.theme.headerColor) {
      theme = {
        border: 'none',
        'border-bottom': `1px solid ${this.props.theme.headerColor}`,
        'padding-top': '0',
        'padding-bottom': '0',
        color: this.props.theme.headerColor
      }
    }

    return [
      {
        content: 'Site visited',
        theme
      },
      {
        content: 'Type',
        theme
      },
      {
        content: 'Tokens',
        theme: Object.assign({
          'text-align': 'right',
          'padding-right': '7px'
        }, theme)
      },
    ]
  }

  render () {
    const { id, children, rows, numItems, allItems, onClick } = this.props

    return (
      <StyledWrapper id={id}>
        <Table
          children={children}
          rows={this.getRows(rows)}
          header={this.headers}
        />
        {
          !allItems
          ? <StyledToggle onClick={onClick}>See all {numItems || 0} items</StyledToggle>
          : null
        }
      </StyledWrapper>
    )
  }
}
