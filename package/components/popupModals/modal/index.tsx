/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledDialog, StyledClose, StyledContent } from './style'

export interface Props {
  id?: string
  outsideClose?: boolean
  children?: React.ReactNode
  onClose?: () => void
  theme?: Theme
}

interface Theme {
  maxWidth?: CSS.MaxWidthProperty<1>
}

const close = require('./assets/close')

export default class Modal extends React.PureComponent<Props, {}> {
  outsideClose = (e: React.ChangeEvent<HTMLDivElement>) => {
    if (!this.props.outsideClose) {
      return
    }

    if (this.props.onClose && (e.target && e.target.id === this.props.id)) {
      this.props.onClose()
    }
  }

  render () {
    const { id, onClose, children, theme } = this.props

    return (
      <StyledWrapper id={id || 'modal'} onClick={this.outsideClose}>
        <StyledDialog theme={theme}>
          <StyledClose onClick={onClose}>
            {close}
          </StyledClose>
          <StyledContent>
            {children}
          </StyledContent>
        </StyledDialog>
      </StyledWrapper>
    )
  }
}
