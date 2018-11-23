/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Button from '../../../../src/components/buttonsIndicators/button'
import Modal from '../../../../src/components/popupModals/modal'

// Feature-specific components
import { ModalHeader, ModalTitle, ModalSubTitle, ModalIcon,ScanGrid,
  MobileHandImage,
  QRCodeContainer,
  ThreeColumnButtonGrid,
  ThreeColumnButtonGridCol1,
  ThreeColumnButtonGridCol2 } from '../../../../src/features/sync'

// Modals
import AddNewChainCameraOption from './addNewChainCameraOption'

// Utils
import { getLocale } from '../page/fakeLocale'

// Images
import syncHandMobileImg from '../../../assets/img/sync/sync_mobile_device.png'
import syncAddIcon from '../../../assets/img/sync/sync_add_icon.svg'
import qrCodeImage from '../../../assets/img/sync/qrCode.png'

interface Props {
  onClose: () => void
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

  render () {
    const { onClose } = this.props
    const { enterCodeWordsInstead } = this.state
    return (
      <Modal id='scanCodeModal' onClose={onClose} size='small'>
      {
        enterCodeWordsInstead
          ? <AddNewChainCameraOption fromMobileScreen={true} onClose={this.onClickEnterCodeWordsInstead} />
          : null
      }
        <ModalHeader>
          <ModalIcon src={syncAddIcon} />
          <div>
            <ModalTitle level={1}>{getLocale('scanThisCode')}</ModalTitle>
            <ModalSubTitle>{getLocale('scanThisCodeHowTo')}</ModalSubTitle>
          </div>
        </ModalHeader>
          <ScanGrid>
            <div><MobileHandImage src={syncHandMobileImg} /></div>
            <QRCodeContainer><img src={qrCodeImage} /></QRCodeContainer>
          </ScanGrid>
          <ThreeColumnButtonGrid>
            <ThreeColumnButtonGridCol1>
              <Button
                level='secondary'
                type='accent'
                size='medium'
                onClick={this.onClickEnterCodeWordsInstead}
                text={getLocale('enterCodeWordsInstead')}
              />
            </ThreeColumnButtonGridCol1>
            <ThreeColumnButtonGridCol2>
              <Button
                level='secondary'
                type='accent'
                size='medium'
                onClick={onClose}
                text={getLocale('previous')}
              />
              <Button
                level='primary'
                type='accent'
                size='medium'
                onClick={onClose}
                disabled={true}
                text={getLocale('lookingForDevice')}
              />
            </ThreeColumnButtonGridCol2>
        </ThreeColumnButtonGrid>
      </Modal>
    )
  }
}
