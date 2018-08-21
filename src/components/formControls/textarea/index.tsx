/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledArea } from './style'
import ControlWrapper from '../../../features/rewards/controlWrapper/index'

export interface Props {
  id?: string
  title?: React.ReactNode
  value?: string
  disabled?: boolean
  customStyle?: Theme
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, child: React.ReactNode) => void
}

interface Theme {
  maxWidth?: CSS.MaxWidthProperty<1>
  minHeight?: CSS.MinHeightProperty<1>
}

export default class TextArea extends React.PureComponent<Props, {}> {
  render () {
    const { id, onChange, value, title, customStyle, disabled } = this.props

    return (
      <StyledWrapper id={id} customStyle={customStyle}>
        <ControlWrapper title={title} customStyle={customStyle}>
          <StyledArea onChange={onChange} disabled={disabled} value={value} customStyle={customStyle} />
        </ControlWrapper>
      </StyledWrapper>
    )
  }
}
