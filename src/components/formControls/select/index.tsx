/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import {
  StyledWrapper,
  StyledSelect,
  StyledOptions,
  StyledOption,
  StyledSelectWrapper,
  StyledSelectText,
  StyledSelectArrow,
  StyledOptionCheck,
  StyledOptionText
} from './style'
import ControlWrapper from '../../../features/rewards/controlWrapper/index'

export interface Props {
  children: React.ReactNode
  id?: string
  disabled?: boolean
  value?: string
  title?: React.ReactNode
  onChange?: (value: string, child: React.ReactNode) => void
  theme?: Theme
}

interface State {
  value: string | number
  selected: React.ReactNode
  show: boolean
}

export interface Theme {
  maxWidth?: CSS.MaxWidthProperty<1>
  border?: CSS.BorderProperty<1>
  padding?: CSS.PaddingProperty<1>
  arrowPadding?: CSS.RightProperty<1>
}

const check = require('./assets/check')
const arrow = require('./assets/arrow')

/*
  TODO
  - add tab option movement
  - add enter key confirm
  - add autoFocus
  - add empty first choice?
 */
export default class Select extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)

    const obj = this.getDefaultValue(props)
    this.state = {
      value: obj.value,
      selected: obj.selected,
      show: false
    }
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      const obj = this.getDefaultValue(this.props)
      this.setState({
        value: obj.value,
        selected: obj.selected,
        show: false
      })
    }
  }

  getDefaultValue (props: Props) {
    const children = React.Children.toArray(props.children)
    let child: any
    const value: string = (props.value || '').toString()

    child = children.find((child: any) => child.props['data-value'] === value)

    if (child === undefined && children) {
      child = children.find((child: any) => child && child.props['data-value'] !== undefined)
    }

    if (!child || !child.props) {
      return {
        value: '',
        selected: null
      }
    }

    return {
      value: child.props['data-value'],
      selected: child.props.children
    }
  }

  generateOptions = (value: string | undefined, children: React.ReactNode) => {
    const self = this
    return React.Children.map(children, (child: any, i: number) => {
      if (child.props['data-value'] === undefined) {
        return null
      }

      const element = child.props.children
      const value = child.props['data-value']
      const selected = value === self.state.value
      return (
        <StyledOption
          key={`${self.props.id}-option-${i}`}
          onClick={self.onOptionClick.bind(self, value, child, element)}
          selected={selected}
        >
          <StyledOptionCheck>{selected ? check : null}</StyledOptionCheck><StyledOptionText>{element}</StyledOptionText>
        </StyledOption>
      )
    })
  }

  onOptionClick = (value: string, child: React.ReactNode, element: React.ReactNode) => {
    this.setState({
      value: value,
      selected: element,
      show: false
    })

    if (this.props.onChange) {
      this.props.onChange(value, child)
    }
  }

  onSelectClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  onBlur = () => {
    this.setState({
      show: false
    })
  }

  render () {
    const { id, children, disabled, value, title, theme } = this.props

    const num = React.Children.count(children)
    let data = null

    if (num > 0) {
      data = this.generateOptions(value, children)
    }

    return (
      <StyledWrapper id={id} theme={theme}>
        <ControlWrapper title={title} theme={theme}>
          {
            num > 0
            ? <StyledSelectWrapper tabIndex='0' onBlur={this.onBlur}>
              <StyledSelect onClick={this.onSelectClick} disabled={disabled} show={this.state.show} theme={theme}>
                <StyledSelectText>{this.state.selected}</StyledSelectText>
                <StyledSelectArrow theme={theme}>{arrow}</StyledSelectArrow>
              </StyledSelect>
              <StyledOptions show={this.state.show}>
                {data}
              </StyledOptions>
            </StyledSelectWrapper>
            : null
          }
        </ControlWrapper>
      </StyledWrapper>
    )
  }
}
