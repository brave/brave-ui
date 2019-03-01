/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledDialog, StyledClose, StyledContent } from './style'
import { CloseCircleOIcon } from '../../icons'

export interface Props {
  id?: string
  outsideClose?: boolean
  children?: React.ReactNode
  onClose?: () => void
  size?: 'small' | 'normal'
  testId?: string
  displayCloseButton?: boolean
  isMobile?: boolean
}

export default class Modal extends React.PureComponent<Props, {}> {
  static defaultProps = {
    size: 'normal',
    id: 'modal',
    displayCloseButton: true
  }

  outsideClose = () => {
    if (!this.props.outsideClose) {
      return
    }

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  isLandscape = () => {
    const isLandscape = (window.innerWidth > window.innerHeight)
    return isLandscape
  }

  render () {
    const {
      id,
      onClose,
      displayCloseButton,
      children,
      size,
      testId,
      isMobile
    } = this.props

    return (
      <StyledWrapper id={id} onClick={this.outsideClose} data-test-id={testId}>
        <StyledDialog size={size}>
          {
            displayCloseButton
              ? <StyledClose onClick={onClose}><CloseCircleOIcon /></StyledClose>
              : null
          }
          <StyledContent isMobile={isMobile} isLandscape={this.isLandscape()}>
            {children}
          </StyledContent>
        </StyledDialog>
      </StyledWrapper>
    )
  }
}
