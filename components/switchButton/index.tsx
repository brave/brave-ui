/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledSwitchButtonWrapper,
  StyledSwitchButtonLeftLabel,
  StyledSwitchButtonRightLabel,
  StyledCheckbox,
  StyledSwitchButton,
  StyledSwitchButtonKnob
} from './style'

export interface SwitchButtonProps {
  checked: boolean,
  disabled?: boolean,
  onChange?: (e: any) => void,
  id: string,
  readOnly?: boolean,
  autoFocus?: boolean,
  leftText?: string,
  rightText?: string,
  small?: boolean
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

  render () {
    const { id, readOnly, disabled = false, autoFocus, leftText, rightText } = this.props
    const { checked } = this.state

    return (
      <StyledSwitchButtonWrapper disabled={disabled}>
        {
          !!leftText &&
          <StyledSwitchButtonLeftLabel id={`${id}LeftText`} htmlFor={id}>
            {leftText}
          </StyledSwitchButtonLeftLabel>
        }
        <div>
          <StyledCheckbox
            type='checkbox'
            id={id}
            readOnly={readOnly}
            disabled={disabled}
            checked={!!checked}
            onChange={this.handleChange}
            autoFocus={autoFocus}
          />
          <StyledSwitchButton htmlFor={id} checked={!!checked} small={this.props.small}>
            <StyledSwitchButtonKnob checked={!!checked} small={this.props.small} />
          </StyledSwitchButton>
        </div>
        {
          !!rightText &&
          <StyledSwitchButtonRightLabel id={`${id}RightText`} htmlFor={id}>
            {rightText}
          </StyledSwitchButtonRightLabel>
        }
      </StyledSwitchButtonWrapper>
    )
  }
}

export default SwitchButton
