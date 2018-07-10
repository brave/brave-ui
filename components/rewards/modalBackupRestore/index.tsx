/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledContent,
  StyledImport,
  StyleButtonWrapper,
  StyledActionsWrapper,
  StyledDoneWrapper
} from './style'
import Tabs from '../tabs';
import TextArea from '../textarea';
import Modal from '../modal';
import ButtonPrimary from '../buttonPrimary';
import ButtonSecondary from '../buttonSecondary';

export type TabsType = 'backup' | 'restore'

export interface Props {
  id?: string
  recoveryKey: string
  error?: React.ReactNode
  activeTabId: TabsType
  onTabChange: (tab: TabsType) => void
  onClose: () => void
  onCopy: (key: string) => void
  onPrint: (key: string) => void
  onSaveFile: (key: string) => void
  onRestore: (key: string) => void
  onImport: () => void
}

/*
  TODO
  - add local
  - add error flow
 */
export default class ModalBackupRestore extends React.PureComponent<Props, {}> {
  render () {
    const {
      id,
      recoveryKey,
      activeTabId,
      onClose,
      onTabChange,
      onCopy,
      onPrint,
      onSaveFile,
      onRestore,
      onImport,
      error
    } = this.props

    return (
      <Modal id={id} onClose={onClose} theme={{maxWidth: '666px'}}>
        <StyledWrapper>
          <Tabs activeTabId={activeTabId} onChange={onTabChange}>
          <div id={`${id}-backup`} data-key={'backup'} data-title={'Backup your Wallet'}>
            <StyledContent>
              Keep this anonymized recovery key for your Brave wallet in the safe place in case you lose access
              to this browser. Your funds are safe as long as you keep this recovery key either on a paper
              or in a device with preferably no internet connection.
            </StyledContent>
            <TextArea
              title={'Recovery Key'}
              theme={{maxWidth: '100%', minHeight: '112px'}}
              defaultValue={recoveryKey}
              disabled
            />
            <StyleButtonWrapper>
              <ButtonSecondary text={'Copy'} size={'small'} color={'subtle'} onClick={onCopy.bind(this, recoveryKey)} />
              <ButtonSecondary text={'Print'} size={'small'} color={'subtle'} onClick={onPrint.bind(this, recoveryKey)} />
              <ButtonSecondary text={'Save as File'} size={'small'} color={'subtle'} onClick={onSaveFile.bind(this, recoveryKey)} />
            </StyleButtonWrapper>
            <StyledDoneWrapper>
              <ButtonPrimary text={'Done'} size={'medium'} color={'brand'} onClick={onClose} />
            </StyledDoneWrapper>
          </div>
          <div id={`${id}-restore`} data-key={'restore'} data-title={'Restore your Wallet'}>
            <StyledContent>
              Enter the recovery key to restore your Brave wallet. Make sure that the current wallet doesn’t
              have any balance or is backed up safely. Restoring a wallet replaces the current wallet and you
              will loose any balance if you don’t back up its recovery key.
            </StyledContent>
            {
              error
              ? <div>TODO: {error}</div>
              : null
            }
            <TextArea
              title={<>Enter your recovery key or <StyledImport onClick={onImport}>import</StyledImport></>}
              theme={{maxWidth: '100%', minHeight: '112px'}}
              defaultValue={''}
            />
            <StyledActionsWrapper>
              <ButtonSecondary text={'Cancel'} size={'medium'} color={'brand'} onClick={onClose} />
              <ButtonPrimary text={'Restore'} size={'medium'} color={'brand'} onClick={onRestore.bind(this, recoveryKey)} />
            </StyledActionsWrapper>
          </div>
        </Tabs>
        </StyledWrapper>
      </Modal>
    )
  }
}
