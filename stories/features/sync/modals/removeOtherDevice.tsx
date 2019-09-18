/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import { Modal, Button } from '../../../../src/components'

// Feature-specific components
import {
  Paragraph,
  ModalHeader,
  Title,
  ModalContent,
  TwoColumnButtonGrid,
  OneColumnButtonGrid
} from '../../../../src/features/sync'

// Utils
import { getLocale } from '../page/fakeLocale'

interface Props {
  otherDeviceName: string
  onClose: () => void
}

export default class RemoveMainDeviceModal extends React.PureComponent<Props, {}> {
  render () {
    const { onClose, otherDeviceName } = this.props
    return (
      <Modal id='removeMainDeviceModal' displayCloseButton={false} size='small'>
        <ModalHeader>
          <Title level={1}>{getLocale('remove')} “{otherDeviceName}” {getLocale('thisSyncChain')}</Title>
        </ModalHeader>
        <ModalContent>
        <Paragraph>{getLocale('otherDeviceRemovalDescription')}</Paragraph>
        </ModalContent>
        <TwoColumnButtonGrid>
          <OneColumnButtonGrid>
            <Button
              level='tertiary'
              size='medium'
              onClick={onClose}
              text={getLocale('cancel')}
            />
          </OneColumnButtonGrid>
          <Button
            level='primary'
            size='medium'
            onClick={onClose}
            text={getLocale('remove')}
          />
        </TwoColumnButtonGrid>
      </Modal>
    )
  }
}
