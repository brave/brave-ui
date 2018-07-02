/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledIcon, StyledContent, StyledClose } from './style'

interface Theme {
  position?: CSS.PositionProperty
  top?: CSS.TopProperty<1>
  left?: CSS.LeftProperty<1>
}

export interface Props {
  id?: string
  type: 'error' | 'success'
  children?: React.ReactNode
  onClose?: () => void
  theme?: Theme
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
    const { id, children, onClose, theme } = this.props

    return (
      <StyledWrapper id={id} theme={theme}>
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
