/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledArea } from './style'
import ControlWrapper from '../controlWrapper';

export interface Props {
  id?: string
  title?: React.ReactNode
  defaultValue?: string
  disabled?: boolean
  theme?: Theme
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, child: React.ReactNode) => void
}

interface Theme {
  maxWidth?: CSS.MaxWidthProperty<1>
  minHeight?: CSS.MinHeightProperty<1>
}

export default class TextArea extends React.PureComponent<Props, {}> {
  render () {
    const { id, onChange, defaultValue, title, theme, disabled } = this.props

    return (
      <StyledWrapper id={id} theme={theme}>
        <ControlWrapper title={title} theme={theme}>
          <StyledArea onChange={onChange} disabled={disabled} defaultValue={defaultValue} theme={theme} />
        </ControlWrapper>
      </StyledWrapper>
    )
  }
}
