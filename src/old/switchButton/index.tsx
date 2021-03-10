/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { capitalize } from '../../helpers'

import {
  StyledSwitchButtonWrapper,
  StyledSwitchButtonLabel,
  StyledSwitchButton,
  StyleProps
} from './style'

export type SwitchButtonProps = StyleProps & {
  checked: boolean
  onChange?: (e: any) => void
  id: string
  readOnly?: boolean
  autoFocus?: boolean
  leftText?: string
  rightText?: string
}

export interface SwitchButtonState {
  checked?: boolean
}

class SwitchButton extends React.PureComponent<SwitchButtonProps, SwitchButtonState> {
  constructor (props: SwitchButtonProps) {
    super(props)
    this.state = { checked: props.checked }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps (nextProps: SwitchButtonProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: nextProps.checked })
    }
  }

  handleChange (e: any) {
    const { props } = this
    if (props.disabled) {
      return
    }
    if (!('checked' in props)) {
      this.setState({ checked: e.target.checked })
    }
    // add non-null assertion operator
    // in case onChange is not defined i.e. used in a prototype
    props.onChange!({
      target: {
        checked: e.target.checked,
        id: e.target.id
      }
    })
  }

  getLabel (side: 'left' | 'right') {
    return (
      <StyledSwitchButtonLabel
        id={`${this.props.id + capitalize(side)}Text`}
        htmlFor={this.props.id}
        switchSize={this.props.switchSize}
        customStyle={this.props.customStyle}
      >
        {side === 'left' ? this.props.leftText : this.props.rightText}
      </StyledSwitchButtonLabel>
    )
  }

  render () {
    const {
      id,
      readOnly,
      disabled,
      autoFocus,
      switchSize = 'medium',
      rightText,
      leftText
    } = this.props

    const { checked } = this.state

    return (
      <StyledSwitchButtonWrapper disabled={disabled}>
        {leftText && this.getLabel('left')}
          <StyledSwitchButton
            type='checkbox'
            id={id}
            checked={!!checked}
            readOnly={readOnly}
            disabled={disabled}
            autoFocus={autoFocus}
            switchSize={switchSize}
            onChange={this.handleChange}
          />
        {rightText && this.getLabel('right')}
      </StyledSwitchButtonWrapper>
    )
  }
}

export default SwitchButton
