/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import './style.css'

import { applyClass } from '../helpers'

export interface BrowserSelectProps {
  titleName?: string,
  id?: string,
  multiple?: boolean,
  autoFocus?: boolean,
  disabled?: boolean,
  value?: string,
  onChange?: () => void,
  children: React.ReactNode
}

class BrowserSelect extends React.PureComponent<BrowserSelectProps, {}> {
  render () {
    const { titleName, id, multiple, autoFocus, disabled, value, onChange, children } = this.props
    return (
      <div>
        <p className='browserSelect_title'>{titleName}</p>
        <div className={applyClass({
          browserSelectWrapper: !multiple,
          browserSelectWrapper__disabled: disabled
        }
        )}>
          <select
            id={id}
            multiple={multiple}
            autoFocus={autoFocus}
            disabled={disabled}
            value={value}
            onChange={onChange}
            className={applyClass({
              browserSelect: true,
              browserSelect__multiple: multiple
            })}
          >
            {children}
          </select>
        </div>
      </div>
    )
  }
}

export default BrowserSelect
