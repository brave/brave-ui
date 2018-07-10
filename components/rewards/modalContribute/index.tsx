/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledTitle, StyledContent, StyledNum } from './style'
import Modal from '../modal'
import ContributeTable, { DetailRow } from '../contributeTable'

export interface Props {
  rows: DetailRow[]
  onClose: () => void
  id?: string
}

/*
  TODO
  - add local
 */
export default class ModalContribute extends React.PureComponent<Props, {}> {
  get headers () {
    return [
      'Site visited',
      'Your attention metric'
    ]
  }

  render () {
    const { id, onClose, rows } = this.props
    const numSites = rows && rows.length || 0

    return (
      <Modal id={id} onClose={onClose}>
        <StyledWrapper>
          <StyledTitle>Brave Contribute</StyledTitle>
          <StyledContent>
            You’re currently supporting <StyledNum>{numSites}</StyledNum> sites.
          </StyledContent>
          <ContributeTable
            header={this.headers}
            rows={rows}
            numSites={numSites}
            allSites
            showRowAmount
          />
        </StyledWrapper>
      </Modal>
    )
  }
}
