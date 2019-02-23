/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledSlider, StyledBullet, StyleToggle, StyledText } from './style'
import { getLocale } from '../../../helpers'

export interface Props {
  id?: string
  disabled?: boolean
  checked?: boolean
  size?: 'large' | 'small'
  type?: 'dark' | 'light'
  onToggle?: (event: React.MouseEvent<HTMLDivElement>) => void
  testId?: string
}

export default class Toggle extends React.PureComponent<Props, {}> {
  static defaultProps = {
    size: 'large',
    type: 'dark'
  }

  render () {
    const { id, onToggle, disabled, checked, type, size, testId } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledText size={size} checked={checked} disabled={disabled}>
          {getLocale('off')}
        </StyledText>
        <StyleToggle data-test-id='toggle' data-test-id2={testId} data-toggled={checked} onClick={!disabled ? onToggle : undefined} size={size}>
          <StyledSlider size={size} disabled={disabled}/>
          <StyledBullet size={size} checked={checked} type={type} disabled={disabled} />
        </StyleToggle>
      </StyledWrapper>
    )
  }
}
