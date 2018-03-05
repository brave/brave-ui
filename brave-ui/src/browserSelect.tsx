/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export interface BrowserSelectProps {
  titleName?: string,
  id?: string,
  multiple?: boolean,
  autoFocus?: boolean,
  disabled?: boolean,
  value: string,
  onChange?: () => void,
  children: React.ReactNode
}

class BrowserSelect extends React.PureComponent<BrowserSelectProps, {}> {
  render () {
    const { titleName, id, multiple, autoFocus, disabled, value, onChange, children } = this.props
    return (
      <div>
        <p className={css(styles.browserSelect_title)}>{titleName}</p>
        <div className={css(
          styles.browserSelectWrapper,
          disabled && styles.browserSelectWrapper__disabled
        )}>
          <select
            id={id}
            multiple={multiple}
            autoFocus={autoFocus}
            disabled={disabled}
            value={value}
            onChange={onChange}
            className={css(styles.browserSelect)}
          >
            {children}
          </select>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  browserSelect: {
    boxSizing: 'border-box',
    position: 'relative',
    borderRadius: '4px',
    boxShadow: '0px 2px 8px -5px rgba(0, 0, 0, 1)',
    display: 'block',
    color: 'rgb(68, 68, 68)',
    fontSize: '13px',
    border: 'solid 1px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    padding: '0.4em 1.5em 0.4em 0.4em',
    width: '100%',
    backgroundColor: '#fbfbfb',
    backgroundSize: '12px 12px',
    WebkitAppearance: 'none',
    height: '2rem',
    marginBottom: '.75rem'
  },

  browserSelect_title: {
    margin: '0 0 .25rem .25rem'
  },

  browserSelectWrapper: {
    position: 'relative',

    '::after': {
      content: '"▼"',
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      padding: '10px',
      fontSize: '13px'
    }
  },

  browserSelectWrapper__disabled: {
    opacity: 0.3,
    userSelect: 'none'
  }
})

export default BrowserSelect
