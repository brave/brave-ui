/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledType, StyledDate, StyledRemove, StyledRemoveIcon, StyledToggle } from './style'
import Table, { Cell } from '../table';
import Profile, { Provider } from '../profile';
import Tokens from '../tokens';

interface ProfileCell {
  verified: boolean
  name: string
  provider?: Provider
  src: string
}

type DonationType = 'donation' | 'tip' | 'recurring'

export interface DetailCell {
  profile?: ProfileCell,
  text?: string | React.ReactNode,
  onClick?: () => void,
  type: DonationType
}

export interface Props {
  id?: string
  children?: React.ReactNode
  rows?: DetailCell[][]
  numItems?: number
  allItems?: boolean
  onClick?: () => void
}

const removeIcon = require('./assets/close.svg')

/*
  TODO
  - add local
 */
export default class DonationTable extends React.PureComponent<Props, {}> {
  getRows (rows?: DetailCell[][]): Cell[][] | undefined {
    if (!rows) {
      return
    }

    return rows.map((row: DetailCell[]): Cell[] => {
      return row.map((cell: DetailCell, i: number): Cell => {
        if (cell.profile) {
          const type = cell.type === 'donation' || cell.type === 'recurring' ? 'small' : 'min'
          return {
            content: <Profile
              title={cell.profile.name}
              provider={cell.profile.provider}
              verified={cell.profile.verified}
              type={type}
              src={cell.profile.src}
            />
          }
        }

        if (i === 1) {
          switch (cell.type) {
            case 'recurring':
              return {
                content: <>
                  <StyledType>Recurring</StyledType>
                  <StyledRemove onClick={cell.onClick}>
                    <StyledRemoveIcon src={removeIcon} /> remove
                  </StyledRemove>
                </>
              }
            case 'donation':
              return {
                content: <>
                  <StyledType>One time</StyledType>
                  <StyledDate>{cell.text}</StyledDate>
                </>
              }
            case 'tip':
              return {
                 content: <>
                  <StyledType>Tip on like</StyledType>
                  <StyledDate>{cell.text}</StyledDate>
                </>
              }
          }
        }

        if (i === 2) {
          return {
            content: <Tokens
              value={cell.text as string}
              theme={{size: '14px', color: {number: '#686978', text: '#9e9fab'}}}
            />,
            theme: {
              'text-align': 'right'
            }
          }
        }

        return {
          content: null
        }
      })
    })
  }

  render () {
    const { id, children, rows, numItems, allItems, onClick } = this.props

    return (
      <StyledWrapper id={id}>
        <Table
          children={children}
          rows={this.getRows(rows)}
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
