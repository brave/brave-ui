/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import theme from './theme'

export default class SwitchButton extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { checked: props.checked }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: nextProps.checked })
    }
  }

  handleChange (e) {
    const { props } = this
    if (props.disabled) {
      return
    }
    if (!('checked' in props)) {
      this.setState({ checked: e.target.checked })
    }
    props.onChange({ target: { checked: e.target.checked } })
  }

  get componentStyles () {
    const customStyle = {}

    if (this.props.small != null) {
      customStyle['--width'] = '40px'
      customStyle['--height'] = '14px'
    }

    return customStyle
  }

  render () {
    const { id, readOnly, disabled, autoFocus, leftText, rightText } = this.props
    const { checked } = this.state

    return (
      <div className={css(styles.switchButton_wrapper)}>
        {
          !!leftText &&
          <label
            className={css(styles.switchButton_label__left)}
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
            className={css(styles.checkbox)}
            checked={!!checked}
            onChange={this.handleChange}
            autoFocus={autoFocus}
          />
          <label
            htmlFor={id}
            className={css(
              styles.switchButton,
              !!checked && styles.switchButton__checked
          )}
            style={this.componentStyles}
          >
            <i
              style={this.componentStyles}
              className={css(
                styles.switchButton_knob,
                !!checked && styles.switchButton_knob__checked
              )}
            />
          </label>
        </div>
        {
          !!rightText &&
          <label
            className={css(styles.switchButton_label__right)}
            htmlFor={id}>
            {rightText}
          </label>
        }
      </div>
    )
  }
}

const checkboxWidth = 'var(--width, 48px)'
const checkboxHeight = 'var(--height, 16px)'
const knobSize = `calc(${checkboxHeight} - 4px)`

const styles = StyleSheet.create({
  checkbox: {
    display: 'none'
  },

  switchButton_wrapper: {
    display: 'flex',
    alignItems: 'center'
  },

  switchButton: {
    boxSizing: 'border-box',
    padding: '0 2px',
    display: 'flex',
    alignItems: 'center',
    width: checkboxWidth,
    height: checkboxHeight,
    borderRadius: checkboxHeight,
    boxShadow: 'inset 0 1px 1px 1px #bbb',
    background: theme.switchButton.uncheckedBg,
    transition: 'all 0.4s',

    ':active': {
      boxShadow: `inset 0 0 0 ${checkboxHeight} #bbb`
    },

    ':active > i': {
      width: checkboxHeight
    }
  },

  switchButton__checked: {
    boxShadow: `inset 0 0 0 ${checkboxHeight} ${theme.switchButton.checkedBg}`,
    border: 'none',

    ':active > i': {
      marginLeft: `calc(90% - ${knobSize})`
    }
  },

  switchButton_knob: {
    boxSizing: 'border-box',
    height: knobSize,
    width: knobSize,
    borderRadius: checkboxHeight,
    background: theme.switchButton.knob,
    transition: 'all 0.3s',
    WebkitTransition: 'all 0.3s',
    boxShadow: '0 2px 2px rgba(0,0,0,0.25)',
    pointerEvents: 'none'
  },

  switchButton_knob__checked: {
    marginLeft: `calc(100% - ${knobSize})`,
    boxShadow: '0 2px 2px rgba(0,0,0,0.25)'
  },

  switchButton_label__left: {
    marginRight: '10px'
  },

  switchButton_label__right: {
    marginLeft: '10px'
  }
})
