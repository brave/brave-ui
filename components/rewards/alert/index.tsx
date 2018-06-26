/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledIcon, StyledContent, StyledClose } from './style'

export interface Props {
  id?: string
  type: 'error' | 'success'
  children?: React.ReactNode
  onClose?: () => void
}

const success = require('./assets/success.svg')
const error = require('./assets/error.svg')
const close = require('./assets/close.svg')

export default class Alert extends React.PureComponent<Props, {}> {
  get icon () {
    switch (this.props.type) {
      case 'error':
        return error
      case 'success':
        return success
    }

    return null
  }

  render () {
    const { id, children, onClose } = this.props


    return (
      <StyledWrapper id={id}>
        <StyledIcon src={this.icon} />
        <StyledContent>
          {children}
        </StyledContent>
        {
          onClose
          ? <StyledClose src={close}/>
          : null
        }
      </StyledWrapper>
    )
  }
}
