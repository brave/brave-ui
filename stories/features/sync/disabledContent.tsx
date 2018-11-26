/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Button from '../../../src/components/buttonsIndicators/button'

// Component-specific components
import {
  Main,
  Title,
  SectionBlock,
  DisabledContentButtonGrid,
  TableGrid,
  Paragraph
} from '../../../src/features/sync'

// Modals
import DeviceType from './modals/deviceType'
import EnterSyncCode from './modals/enterSyncCode'

const syncStart = require('../../assets/img/sync/sync_start.svg')

// Utils
import { getLocale } from './page/fakeLocale'
import data from './page/fakeData'

interface State {
  newToSync: boolean
  existingSyncCode: boolean
}

export default class SyncDisabledContent extends React.PureComponent<{}, State> {
  constructor (props: {}) {
    super(props)
    this.state = {
      newToSync: false,
      existingSyncCode: false
    }
  }

  get mainDeviceName () {
    return data.device1.name
  }

  onClickNewSyncChainButton = () => {
    this.setState({ newToSync: !this.state.newToSync })
  }

  onClickEnterSyncChainCodeButton = () => {
    this.setState({ existingSyncCode: !this.state.existingSyncCode })
  }

  render () {
    const { newToSync, existingSyncCode } = this.state
    return (
      <Main>
        {
          newToSync
            ? <DeviceType onClose={this.onClickNewSyncChainButton} mainDeviceName={this.mainDeviceName} />
            : null
        }
        {
          existingSyncCode
            ? <EnterSyncCode onClose={this.onClickEnterSyncChainCodeButton} />
            : null
        }
        <TableGrid>
          <img src={syncStart} />
          <div>
            <Title level={2}>{getLocale('syncTitle')}</Title>
            <Paragraph>{getLocale('syncDescription')}</Paragraph>
            <SectionBlock>
              <DisabledContentButtonGrid>
                <div>
                  <Button
                    level='primary'
                    type='accent'
                    onClick={this.onClickNewSyncChainButton}
                    text={getLocale('startSyncChain')}
                  />
                </div>
                <div>
                  <Button
                    level='secondary'
                    type='accent'
                    onClick={this.onClickEnterSyncChainCodeButton}
                    text={getLocale('enterSyncChainCode')}
                  />
                </div>
              </DisabledContentButtonGrid>
            </SectionBlock>
          </div>
        </TableGrid>
      </Main>
    )
  }
}
