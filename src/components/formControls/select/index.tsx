/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledSelect,
  StyledOptions,
  StyledOption,
  StyledSelectWrapper,
  StyledSelectText,
  StyledSelectArrow,
  StyledOptionCheck,
  StyledOptionText,
  StyledOptionsOverlay,
  StyledOptionsModal,
  StyledSelectTitle,
  StyledModalContent,
  StyledRadioOptions
} from './style'
import { Radio } from '../../'
import { CheckIcon, CaratDownIcon } from '../../icons'

export type Type = 'dark' | 'light'

export interface Props {
  children: React.ReactNode
  id?: string
  title?: string
  disabled?: boolean
  floating?: boolean
  showAllContents?: boolean
  value?: string
  onChange?: (value: string, child: React.ReactNode) => void
  type?: Type
}

interface State {
  value: string | number
  show: boolean
  radioShown: boolean
}

interface RadioOptionsObj {
  [key: string]: boolean
}

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

    this.state = {
      value: this.getDefaultValue(props).value,
      show: false,
      radioShown: false
    }
  }

  static defaultProps = {
    type: 'light'
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.getDefaultValue(this.props).value,
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

  getRadioOptions = (value: string | undefined, children: React.ReactNode) => {
    const currentValue = this.state.value
    let options: RadioOptionsObj = {}

    React.Children.map(children, (child: any, i: number) => {
      if (child.props['data-value'] === undefined) {
        return null
      }

      const value = child.props['data-value']
      const selected = value === currentValue

      return options[value] = selected
    })

    return options
  }

  onRadioOptionClick = (key: string, selected: boolean, child: React.ReactNode, all: {[key: string]: boolean}) => {
    this.setState({
      value: key,
      radioShown: false
    })

    if (this.props.onChange) {
      this.props.onChange(key, child)
    }
  }

  onOverlayClick = (event: any) => {
    if (event.target.hasAttribute('data-overlay')) {
      this.setState({
        radioShown: false
      })
    }
  }

  styledModalOverlay = (value: string | undefined, children: React.ReactNode) => {
    if (!this.state.radioShown) {
      return null
    }

    return (
      <StyledOptionsOverlay
        data-overlay='overlay'
        onClick={this.onOverlayClick}
      >
        <StyledOptionsModal>
          <StyledModalContent>
            {
              this.props.title
              ? <StyledSelectTitle>
                  {this.props.title}
                </StyledSelectTitle>
              : null
            }
            <StyledRadioOptions>
              <Radio
                size={'big'}
                disabled={false}
                onChange={this.onRadioOptionClick}
                value={this.getRadioOptions(value, children)}
              >
                {this.props.children}
              </Radio>
            </StyledRadioOptions>
          </StyledModalContent>
        </StyledOptionsModal>
      </StyledOptionsOverlay>
    )
  }

  generateOptions = (value: string | undefined, children: React.ReactNode, showAllContents: boolean | undefined) => {
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
          showAllContents={showAllContents}
          key={`${self.props.id}-option-${i}`}
          onClick={self.onOptionClick.bind(self, value, child)}
          selected={selected}
        >
          <StyledOptionCheck>
            {selected ? <CheckIcon /> : null}
          </StyledOptionCheck><StyledOptionText showAllContents={showAllContents}>{element}</StyledOptionText>
        </StyledOption>
      )
    })
  }

  onOptionClick = (value: string, child: React.ReactNode) => {
    this.setState({
      value: value,
      show: false
    })

    if (this.props.onChange) {
      this.props.onChange(value, child)
    }
  }

  isTouchscreen = () => {
    return 'ontouchstart' in window
  }

  onSelectClick = () => {
    if (!this.isTouchscreen()) {
      this.setState({
        show: !this.state.show
      })
      return
    }

    this.setState({
      radioShown: true
    })
  }

  onBlur = () => {
    this.setState({
      show: false
    })
  }

  render () {
    const { id, children, disabled, value, type, floating, showAllContents } = this.props

    const num = React.Children.count(children)
    let data = null

    if (num > 0) {
      data = this.generateOptions(value, children, showAllContents)
    }

    return (
      <StyledWrapper id={id}>
        {
          num > 0
          ? <StyledSelectWrapper tabIndex={0} onBlur={this.onBlur}>
            <StyledSelect
              onClick={!disabled ? this.onSelectClick : undefined}
              disabled={disabled}
              show={this.state.show}
              type={type}
              floating={floating}
            >
              <StyledSelectText floating={floating}>
                {this.getDefaultValue(this.props).selected}
              </StyledSelectText>
              <StyledSelectArrow floating={floating}>
                <CaratDownIcon />
              </StyledSelectArrow>
            </StyledSelect>
            <StyledOptions
              show={this.state.show}
              showAllContents={showAllContents}
            >
              {data}
            </StyledOptions>
            {this.styledModalOverlay(value, children)}
          </StyledSelectWrapper>
          : null
        }
      </StyledWrapper>
    )
  }
}
