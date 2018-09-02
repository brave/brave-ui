/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledTitle,
  StyledRemove,
  StyledRemoveIcon,
  StyledLink,
  StyledRemoveWrapper,
  StyledButtonWrapper
} from './style'
import { Modal, Table, Button } from '../../../components'
import { ProfileCell } from '../tableContribute'
import { getLocale } from '../../../helpers'
import { Row } from '../../../components/dataTables/table'
import Profile from '../profile'
import { RefreshIcon } from '../../../components/icons'

export interface DetailRow {
  profile: ProfileCell
  url: string
  onRestore?: () => void
}

export interface Props {
  rows: DetailRow[]
  onClose: () => void
  onRestoreAll: () => void
  id?: string
}

export default class ModalRestore extends React.PureComponent<Props, {}> {
  get headers () {
    return [
      {
        content: <div>{getLocale('site')}</div>
      },
      {
        content: ''
      }
    ]
  }

  getRows = (): Row[] | undefined => {
    const rows = this.props.rows
    if (!rows) {
      return
    }

    return rows.map((row: DetailRow): Row => {
      const cell: Row = {
        content: [
          {
            content: (
              <StyledLink href={row.url} target={'_blank'}>
                <Profile
                  title={row.profile.name}
                  provider={row.profile.provider}
                  verified={row.profile.verified}
                  src={row.profile.src}
                />
              </StyledLink>
            )
          },
          {
            content: (
              <StyledRemoveWrapper onClick={row.onRestore}>
                <StyledRemove>
                  <StyledRemoveIcon>
                    <RefreshIcon />
                  </StyledRemoveIcon>
                  {getLocale('restore')}
                </StyledRemove>
              </StyledRemoveWrapper>
            )
          }
        ]
      }

      return cell
    })
  }

  render () {
    const { id, onClose, onRestoreAll } = this.props

    return (
      <Modal id={id} onClose={onClose}>
        <StyledWrapper>
          <StyledTitle>{getLocale('restorePublishers')}</StyledTitle>
          <Table
            header={this.headers}
            rows={this.getRows()}
          />
          <StyledButtonWrapper>
            <Button
              text={getLocale('restoreAll')}
              size={'medium'}
              type={'accent'}
              onClick={onRestoreAll}
            />
          </StyledButtonWrapper>
        </StyledWrapper>
      </Modal>
    )
  }
}
