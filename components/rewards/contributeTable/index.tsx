/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledText, StyledRemove, StyledToggle, StyledTHSite, StyledTHOther } from './style'
import Table, { Cell } from '../table';
import Profile, { Provider } from '../profile';

interface ProfileCell {
  verified: boolean
  name: string
  provider?: Provider
  src: string
}

interface DetailCell {
  profile?: ProfileCell,
  text?: string,
  onClick?: () => void
}

export interface Props {
  id?: string
  header: string[]
  children?: React.ReactNode
  rows?: DetailCell[][]
  numSites?: number
  allSites?: boolean
  onClick?: () => void
}

const closeIcon = require('./assets/close.svg')

export default class ContributeTable extends React.PureComponent<Props, {}> {
  getHeader (header: string[]) {
    if (!header) {
      return
    }

    return header.map((item: string, i: number) => {
      return {
        content: i === 0 ? <StyledTHSite>{item}</StyledTHSite> : <StyledTHOther>{item}</StyledTHOther>
      }
    })
  }

  getRows (rows?: DetailCell[][]): Cell[][] | undefined {
    if (!rows) {
      return
    }

    return rows.map((row: DetailCell[]): Cell[] => {
      return row.map((cell: DetailCell): Cell => {
        if (cell.profile) {
          return {
            content: <Profile
              title={cell.profile.name}
              provider={cell.profile.provider}
              verified={cell.profile.verified}
              type={'small'}
              src={cell.profile.src}
            />
          }
        }

        if (cell.text) {
          return {
            content: <StyledText>
              {cell.text}
              {
                cell.onClick
                ? <StyledRemove src={closeIcon} onClick={cell.onClick} />
                : null
              }
            </StyledText>
          }
        }

        return {
          content: null
        }
      })
    })
  }

  render () {
    const { id, header, children, rows, numSites, allSites, onClick } = this.props

    return (
      <StyledWrapper id={id}>
        <Table
          header={this.getHeader(header)}
          children={children}
          rows={this.getRows(rows)}
        />
        {
          !allSites
          ? <StyledToggle onClick={onClick}>See all {numSites || 0} sites</StyledToggle>
          : null
        }
      </StyledWrapper>
    )
  }
}
