/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledLabel,
  StyledCircle,
  StyledText,
  StyledFill,
  StyledInput
} from './style'

export type Size = 'big' | 'small'

export interface Props {
  id?: string
  size?: Size
  value: {[key: string]: boolean}
  disabled?: boolean
  children: React.ReactNode
  onChange?: (key: string, selected: boolean, child: React.ReactNode, all: {[key: string]: boolean}) => void
}

export default class Radio extends React.PureComponent<Props, {}> {
  static defaultProps = {
    size: 'small',
    disabled: false
  }

  generateChecks = (children: React.ReactNode) => {
    const self = this
    return React.Children.map(children, (child: any, i: number) => {
      if (child.props['data-value'] === undefined) {
        return null
      }

      const element = child.props.children
      const key = child.props['data-value']
      const selected = self.props.value[key] || false

      return (
        <StyledLabel
          key={`option-${i}`}
          onClick={!self.props.disabled ? self.onOptionClick.bind(self, key, child, selected) : undefined}
          size={self.props.size}
        >
          <StyledCircle
            selected={selected}
            disabled={self.props.disabled}
            size={self.props.size}
          >
            {selected ? <StyledFill size={self.props.size}/> : null}
          </StyledCircle>
          <StyledText
            disabled={self.props.disabled}
            size={self.props.size}
          >
            {element}
          </StyledText>
          <StyledInput
            type={'radio'}
            checked={selected}
            readOnly={true}
          />
        </StyledLabel>
      )
    })
  }

  onOptionClick = (key: string, child: React.ReactNode, selected: boolean) => {
    if (!this.props.onChange) {
      return
    }

    let newState: {[key: string]: boolean} = {}

    if (!this.props.value[key]) {
      Object.keys(this.props.value).map((item: string) => {
        newState[item] = key === item ? !selected : false
      })
    }

    this.props.onChange(key, !selected, child, newState)
  }

  render () {
    const { id, children } = this.props
    const numChildren = React.Children.count(children)

    return (
      <div id={id}>
        {
          numChildren > 0
          ? this.generateChecks(children)
          : null
        }
      </div>
    )
  }
}
