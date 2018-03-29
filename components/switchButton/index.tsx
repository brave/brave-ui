/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import './style.css'

import { applyClass } from '../helpers'

export interface SwitchButtonProps {
  checked: boolean,
  disabled?: boolean,
  onChange?: (e: any) => void,
  id: string,
  readOnly?: boolean,
  autoFocus?: boolean,
  leftText?: string,
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
    props.onChange!({ target: { checked: e.target.checked } })
  }

  get componentStyles () {
    const { props } = this
    return {
      '--width': 'small' in props && '40px',
      '--height': 'small' in props && '14px'
    }
  }

  render () {
    const { id, readOnly, disabled, autoFocus, leftText, rightText } = this.props
    const { checked } = this.state

    return (
      <div className={applyClass({
        switchButton_wrapper: true,
        switchButton_wrapper__disabled: disabled
      })}>
        {
          !!leftText &&
          <label
            id={`${id}LeftText`}
            className='switchButton_label__left'
            htmlFor={id}>
            {leftText}
          </label>
        }
        <div>
          <input
            type='checkbox'
            id={id}
            readOnly={readOnly}
            disabled={disabled}
            className='checkbox'
            checked={!!checked}
            onChange={this.handleChange}
            autoFocus={autoFocus}
          />
          <label
            htmlFor={id}
            className={applyClass({
              switchButton: true,
              switchButton__checked: !!checked
            })}
            style={this.componentStyles}
          >
            <i
              style={this.componentStyles}
              className={applyClass({
                switchButton_knob: true,
                switchButton_knob__checked: !!checked
              })}
            />
          </label>
        </div>
        {
          !!rightText &&
          <label
            id={`${id}RightText`}
            className='switchButton_label__right'
            htmlFor={id}>
            {rightText}
          </label>
        }
      </div>
    )
  }
}

export default SwitchButton
