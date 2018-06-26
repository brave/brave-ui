/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledTitle,
  StyledSelect,
  StyledOptions,
  StyledOption,
  StyledSelectWrapper
} from './style'

export interface Props {
  title?: string,
  id?: string,
  disabled?: boolean,
  value?: string,
  onChange?: (e: any) => void,
  children: React.ReactNode
}

interface State {
  value: string | number
  selected: React.ReactNode
  show: boolean
}

/*
  TODO
  - add tab option movement
  - add enter key confirm
  - add autoFocus
  - make sure that props update is prepared into the state
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

  getDefaultValue (props: Props) {
    const children = React.Children.toArray(props.children)
    let child: any

    if (props.value != undefined) {
      child = children.find((child: any) => child.props['data-value'] == props.value)
    }

    if (child == undefined) {
      child = children.find((child: any) => child && child.props['data-value'] != undefined)
    }

    return {
        value: child.props['data-value'],
        selected: child.props.children
      }
  }

  generateOptions = (value: string | undefined, children: React.ReactNode) => {
    const self = this
    return React.Children.map(children, (child: any, i) => {
      if (child.props['data-value'] == undefined) {
        return null
      }

      const element = child.props.children
      const value = child.props['data-value']
      const selected = value == self.state.value
      return <StyledOption onClick={self.onOptionClick.bind(self, value, child, element)} selected={selected}>
        {element}
      </StyledOption>
    })
  }

  onOptionClick = (value: string, child: React.ReactNode, element: React.ReactNode) => {
    this.setState({
      value: value,
      selected: element,
      show: false
    })

    if (this.props.onChange) {
      this.props.onChange(child)
    }
  }

  onSelectClick = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  onBlur = () => {
    this.setState({
      show: false,
    })
  }

  render () {
    const { id, title, children, disabled, value } = this.props

    const num = React.Children.count(children)
    let data = null

    if (num > 0) {
      data = this.generateOptions(value, children)
    }

    return (
      <StyledWrapper id={id}>
        <StyledTitle>{title}</StyledTitle>
        {
          num > 0
          ? <StyledSelectWrapper tabIndex='0' onBlur={this.onBlur}>
            <StyledSelect onClick={this.onSelectClick} disabled={disabled} show={this.state.show}>
              {this.state.selected}
            </StyledSelect>
            <StyledOptions show={this.state.show}>
              {data}
            </StyledOptions>
          </StyledSelectWrapper>
          : null
        }
      </StyledWrapper>
    )
  }
}
