/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper,
  StyledLeft,
  StyledRight,
  StyledDescription,
  StyledSettingsIcon,
  StyledContent,
  StyledTitle,
  StyledBreak,
  StyledSettingsWrapper,
  StyledSettingsClose,
  StyledSettingsTitle,
  StyledSettingsText
} from './style'
import Checkbox from '../toggle'

const close = require('./assets/close.svg')
const settings = require('./assets/settings.svg')

export interface Theme {
  titleColor: string
}

export interface Props {
  id?: string
  title: string
  theme?: Theme
  description?: string
  toggle?: boolean
  checked?: boolean
  onToggle?: () => void
  settingsChild?: React.ReactNode
  disabledContent?: React.ReactNode
  children?: React.ReactNode
}

interface State {
  settingsOpened: boolean
}

/*
  TODO
  - add local
 */
export default class Box extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      settingsOpened: false
    }
  }

  settingsClick = () => {
    this.setState({settingsOpened: !this.state.settingsOpened})
  }

  render () {
    const {
      id,
      title,
      toggle,
      checked,
      onToggle,
      settingsChild,
      disabledContent,
      description,
      theme,
      children
    } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledLeft>
          <StyledTitle theme={theme}>{title}</StyledTitle>
        </StyledLeft>
        <StyledRight>
          {
            toggle ?
            <Checkbox onClick={onToggle} checked={checked} />
            : null
          }
        </StyledRight>
        <StyledBreak />
        <StyledLeft>
          <StyledDescription>
          {description}
          </StyledDescription>
        </StyledLeft>
        <StyledRight>
          {
            settingsChild && ((toggle && checked) || !toggle) ?
            <StyledSettingsIcon src={settings} float={'right'} onClick={this.settingsClick} />
            : null
          }
        </StyledRight>
        {
          this.state.settingsOpened
          ? <StyledSettingsWrapper>
              <StyledSettingsClose src={close} onClick={this.settingsClick} />
              <StyledSettingsTitle>
                <StyledSettingsIcon src={settings} />
                <StyledSettingsText>{title} Settings</StyledSettingsText>
              </StyledSettingsTitle>
              {settingsChild}
          </StyledSettingsWrapper>
          : null
        }
        <StyledContent>
          {
            toggle && !checked
            ? disabledContent
            : children
          }
        </StyledContent>
      </StyledWrapper>
    )
  }
}
