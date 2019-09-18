/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import { Modal, Button } from '../../../../src/components'

// Feature-specific components
import {
  ModalHeader,
  Title,
  Paragraph,
  ScanGrid,
  ThreeColumnButtonGrid
} from '../../../../src/features/sync'

// Images
import { SyncMobilePicture, QRCode } from '../../../../src/features/sync/images'

// Fake QR Code
import qrCodeImage from '../../../assets/img/fakeQRCodeImage.png'

// Modals
import ViewSyncCodeModal from './viewSyncCode'

// Utils
import { getLocale } from '../page/fakeLocale'

interface Props {
  onClose: (event?: any) => void
}

interface State {
  enterCodeWordsInstead: boolean
}

export default class ScanCodeModal extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      enterCodeWordsInstead: false
    }
  }

  onClickEnterCodeWordsInstead = () => {
    this.setState({ enterCodeWordsInstead: !this.state.enterCodeWordsInstead })
  }

  onCancel = () => {
    this.props.onClose()
  }

  render () {
    const { onClose } = this.props
    const { enterCodeWordsInstead } = this.state
    return (
      <Modal id='scanCodeModal' displayCloseButton={false} size='small'>
      {
        enterCodeWordsInstead
          ? <ViewSyncCodeModal onClose={this.onClickEnterCodeWordsInstead} />
          : null
      }
        <ModalHeader>
          <div>
            <Title level={1}>{getLocale('scanThisCode')}</Title>
            <Paragraph>{getLocale('scanThisCodeHowTo')}</Paragraph>
          </div>
        </ModalHeader>
          <ScanGrid>
            <SyncMobilePicture />
            <QRCode size='normal' src={qrCodeImage} />
          </ScanGrid>
          <ThreeColumnButtonGrid>
          <div>
            <Button level='tertiary' onClick={this.onCancel} text={getLocale('cancel')}/>
          </div>
          <div>
            <Button
              level='secondary'
              size='medium'
              onClick={onClose}
              text={getLocale('viewSyncCode')}
            />
          </div>
          <div>
            <Button
              level='primary'
              size='medium'
              onClick={onClose}
              text={getLocale('viewCodeWords')}
            />
          </div>
        </ThreeColumnButtonGrid>
      </Modal>
    )
  }
}
