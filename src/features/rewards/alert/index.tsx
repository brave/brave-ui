/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import SimpleIcon from '../../../components/media/simpleIcon'
import { StyledWrapper, StyledContent, StyledClose, StyledIcon } from './style'

interface Theme {
  position?: CSS.PositionProperty
  top?: CSS.TopProperty<1>
  left?: CSS.LeftProperty<1>
}

export interface Props {
  type: 'error' | 'success'
  id?: string
  children?: React.ReactNode
  onClose?: () => void
  theme?: Theme
}

export default class Alert extends React.PureComponent<Props, {}> {
  get icon () {
    switch (this.props.type) {
      case 'error':
        return (
          <SimpleIcon type='error' theme={{ color: '#F43405' }}/>
        )
      case 'success':
        return (
          <SimpleIcon type='success' theme={{ color: '#1BBA6A' }}/>
        )
    }

    return null
  }

  render () {
    const { id, children, onClose, theme } = this.props

    return (
      <StyledWrapper id={id} theme={theme}>
        <StyledIcon>{this.icon}</StyledIcon>
        <StyledContent>
          {children}
        </StyledContent>
        {
          onClose
          ? <StyledClose>
              <SimpleIcon type='close' theme={{ color: '#DFDFE8' }}/>
            </StyledClose>
          : null
        }
      </StyledWrapper>
    )
  }
}
