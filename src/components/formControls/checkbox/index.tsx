/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledLabel, StyledBox, StyledText } from './style'
import ControlWrapper from '../../../features/rewards/controlWrapper/index'

const check = require('./assets/check')

export interface Props {
  value: {[key: string]: boolean}
  children: React.ReactNode
  id?: string
  multiple?: boolean
  title?: React.ReactNode
  theme?: Theme
  onChange?: (key: string, selected: boolean, child: React.ReactNode, all: {[key: string]: boolean}) => void
}

export interface Theme {
  checkColor?: CSS.Color
  borderColor?: CSS.Color
  maxWidth?: CSS.MaxWidthProperty<1>
}

export default class Checkbox extends React.PureComponent<Props, {}> {
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
        <StyledLabel key={`${self.props.id}-checkbox-${i}`} onClick={self.onOptionClick.bind(self, key, child, selected)}>
          <StyledBox selected={selected} theme={self.props.theme}>{selected ? check : null}</StyledBox><StyledText>{element}</StyledText>
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
    const { id, children, title, theme } = this.props
    const num = React.Children.count(children)
    let data = null

    if (num > 0) {
      data = this.generateChecks(children)
    }

    return (
      <StyledWrapper id={id}>
        <ControlWrapper title={title} theme={theme}>
          {data}
        </ControlWrapper>
      </StyledWrapper>
    )
  }
}
