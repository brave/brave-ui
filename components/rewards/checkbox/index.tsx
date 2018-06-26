/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledTitle, StyledLabel, StyledBox } from './style'

export interface Props {
  id?: string
  title?: string
  children: React.ReactNode
  multiple?: boolean
  value: {[key: string]: boolean}
  onChange?: (child: React.ReactNode, selected: boolean, all: {[key: string]: boolean}) => void
}

interface State {
  checked: {[key: string]: boolean}
}

/*
  TODO
  - make sure that props update is prepared into the state
 */
export default class Checkbox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      checked: Object.assign({}, props.value)
    }
  }


  generateChecks = (children: React.ReactNode) => {
    const self = this
    return React.Children.map(children, (child: any) => {
      if (child.props['data-key'] == undefined) {
        return null
      }

      const element = child.props.children
      const key = child.props['data-key']
      const selected = self.state.checked[key] || false
      return <StyledLabel onClick={self.onOptionClick.bind(self, key, child, selected)}>
        <StyledBox selected={selected} /> {element}
      </StyledLabel>
    })
  }

  onOptionClick = (key: string, child: React.ReactNode, selected: boolean) => {
    const multiple = this.props.multiple
    const checked = this.state.checked
    let newState: {[key: string]: boolean} = {}
    selected = !selected

    Object.keys(this.state.checked).map((item: string) => {
      newState[item] = multiple ? checked[item] : false;

      if (key == item) {
        newState[item] = selected
      }
    })

    this.setState({checked: newState})

    if (this.props.onChange) {
      this.props.onChange(child, selected, newState)
    }
  }

  render () {
    const { id, title, children } = this.props

    const num = React.Children.count(children)
    let data = null

    if (num > 0) {
      data = this.generateChecks(children)
    }

    return (
      <StyledWrapper id={id}>
        <StyledTitle>{title}</StyledTitle>
        {data}
      </StyledWrapper>
    )
  }
}
