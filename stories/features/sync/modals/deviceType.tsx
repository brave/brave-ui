/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Button from '../../../../src/components/buttonsIndicators/button'
import Modal from '../../../../src/components/popupModals/modal'

// Feature-specific components
import {
  ModalHeader,
  ModalIcon,
  ModalTitle,
  DeviceGrid,
  DeviceContainer,
  DeviceImage,
  ModalSubTitle
} from '../../../../src/features/sync'

// Modals
import AddNewChainNoCamera from './addNewChainNoCamera'
import ScanCode from './scanCode'

// Utils
import { getLocale } from '../page/fakeLocale'

// Images
import syncMobileImg from '../../../assets/img/sync/sync_mobile.svg'
import syncDesktopImg from '../../../assets/img/sync/sync_desktop.svg'
import syncAddIcon from '../../../assets/img/sync/sync_add_icon.svg'

interface Props {
  mainDeviceName: string
  onClose: () => void
}

interface State {
  addNewChainNoCamera: boolean
  scanCode: boolean
}

export default class DeviceTypeModal extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      addNewChainNoCamera: false,
      scanCode: false
    }
  }

  onClickPhoneTabletButton = () => {
    this.setState({ scanCode: !this.state.scanCode })
  }

  onClickComputerButton = () => {
    this.setState({ addNewChainNoCamera: !this.state.addNewChainNoCamera })
  }

  render () {
    const { onClose, mainDeviceName } = this.props
    const { addNewChainNoCamera, scanCode } = this.state
    return (
      <Modal id='deviceTypeModal' onClose={onClose} size='small'>
        {
          scanCode
          ? <ScanCode onClose={this.onClickPhoneTabletButton} />
          : null
        }
        {
          addNewChainNoCamera
            ? <AddNewChainNoCamera onClose={this.onClickComputerButton} />
            : null
        }
        <ModalHeader>
          <ModalIcon src={syncAddIcon} />
          <div>
            <ModalTitle level={1}>{getLocale('letsSync')}<br />“{mainDeviceName}”.</ModalTitle>
            <ModalSubTitle>{getLocale('chooseDeviceType')}</ModalSubTitle>
          </div>
        </ModalHeader>
        <DeviceGrid>
          <DeviceContainer>
            <DeviceImage src={syncMobileImg} />
            <Button
              level='primary'
              type='accent'
              size='medium'
              onClick={this.onClickPhoneTabletButton}
              text={getLocale('phoneTablet')}
            />
          </DeviceContainer>
          <DeviceContainer>
          <DeviceImage src={syncDesktopImg} />
            <Button
              level='primary'
              type='accent'
              size='medium'
              onClick={this.onClickComputerButton}
              text={getLocale('computer')}
            />
          </DeviceContainer>
        </DeviceGrid>
      </Modal>
    )
  }
}
