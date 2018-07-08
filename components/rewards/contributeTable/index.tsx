/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledText,
  StyledRemove,
  StyledToggle,
  StyledTHSite,
  StyledTHOther,
  StyledTokens,
  StyledTHLast
} from './style'
import Table, { Row } from '../table';
import Profile, { Provider } from '../profile';
import Tokens from '../tokens';

interface ProfileCell {
  verified: boolean
  name: string
  provider?: Provider
  src: string
}

export interface DetailRow {
  profile: ProfileCell
  contribute: {
    attention: number
    tokens: number
    converted: number
  }
  onRemove?: () => void
}

export interface Props {
  id?: string
  header: string[]
  children?: React.ReactNode
  rows?: DetailRow[]
  numSites?: number
  allSites?: boolean
  onShowAll?: () => void
  showRowAmount?: boolean
}

const closeIcon = require('./assets/close')

/*
  TODO
  - add local
  - add optional border above
 */
export default class ContributeTable extends React.PureComponent<Props, {}> {
  getHeader (header: string[]) {
    if (!header) {
      return
    }

    return header.map((item: string, i: number) => {
      return {
        content: i === 0
        ? <StyledTHSite>{item}</StyledTHSite>
        : (i - 1) === header.length
          ? <StyledTHOther>{item}</StyledTHOther>
          : <StyledTHLast>{item}</StyledTHLast>
      }
    })
  }

  getRows = (rows?: DetailRow[]): Row[] | undefined => {
    const self = this
    if (!rows) {
      return
    }

    return rows.map((row: DetailRow): Row => {
      const cell: Row = {
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
          {
            content: <StyledText>{row.contribute.attention}%</StyledText>
          },
          {
            content: <StyledTokens oneLine={self.props.showRowAmount}>
              <Tokens
                value={row.contribute.tokens}
                converted={row.contribute.converted}
                hideText={!self.props.showRowAmount}
                theme={{
                  display: self.props.showRowAmount ? 'inline-block' : 'block',
                  size: {text: '10px', token: '14px'},
                  color: {token: '#686978', text: '#9e9fab'}
                }}
              />
              <StyledRemove onClick={row.onRemove}>{closeIcon}</StyledRemove>
            </StyledTokens>
          }
        ]
      }

      if (this.props.showRowAmount) {
        const remaining = 100 - row.contribute.attention
        cell.theme = {
          background: `linear-gradient(90deg, #FFF ${remaining}%, #d2c6f3 ${row.contribute.attention}%)`
        }
      }

      return cell
    })
  }

  render () {
    const { id, header, children, rows, numSites, allSites, onShowAll } = this.props

    return (
      <StyledWrapper id={id}>
        <Table
          header={this.getHeader(header)}
          children={children}
          rows={this.getRows(rows)}
        />
        {
          !allSites
          ? <StyledToggle onClick={onShowAll}>See all {numSites || 0} sites</StyledToggle>
          : null
        }
      </StyledWrapper>
    )
  }
}
