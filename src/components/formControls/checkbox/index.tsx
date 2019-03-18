/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledLabel, StyledBox, StyledText } from './style'
import { CheckIcon } from '../../icons'

export type Type = 'dark' | 'light'
export type Size = 'big' | 'small'

export interface Props {
  value: {[key: string]: boolean}
  id?: string
  testId?: string
  children: React.ReactNode
  multiple?: boolean
  disabled?: boolean
  type?: Type
  size?: Size
  onChange?: (key: string, selected: boolean, child: React.ReactNode, all: {[key: string]: boolean}) => void
}

export default class Checkbox extends React.PureComponent<Props, {}> {
  static defaultProps = {
    type: 'light',
    size: 'small',
    disabled: false,
    multiple: false
  }

  generateChecks = (children: React.ReactNode) => {
    const self = this
    return React.Children.map(children, (child: any, i: number) => {
      if (child.props['data-key'] === undefined) {
        return null
      }

      const element = child.props.children
      const key = child.props['data-key']
      const selected = self.props.value[key] || false
      return (
        <StyledLabel
          key={`checkbox-${i}`}
          onClick={!self.props.disabled ? self.onOptionClick.bind(self, key, child, selected) : undefined}
          type={self.props.type}
          size={self.props.size}
        >
          <StyledBox
            selected={selected}
            type={self.props.type}
            disabled={self.props.disabled}
            size={self.props.size}
          >
            {selected ? <CheckIcon /> : null}
          </StyledBox>
          <StyledText
            disabled={self.props.disabled}
            size={self.props.size}
          >
            {element}
          </StyledText>
        </StyledLabel>
      )
    })
  }

  onOptionClick = (key: string, child: React.ReactNode, selected: boolean) => {
    const multiple = this.props.multiple
    const checked = this.props.value
    let newState: {[key: string]: boolean} = {}
    selected = !selected

    Object.keys(this.props.value).map((item: string) => {
      newState[item] = multiple ? checked[item] : false

      if (key === item) {
        newState[item] = selected
      }
    })

    if (this.props.onChange) {
      this.props.onChange(key, selected, child, newState)
    }
  }

  render () {
    const { id, testId, children } = this.props
    const num = React.Children.count(children)
    let data = null

    if (num > 0) {
      data = this.generateChecks(children)
    }

    return (
      <div id={id} data-test-id={testId}>
        {data}
      </div>
    )
  }
}
