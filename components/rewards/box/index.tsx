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
  StyledSettingsText,
  StyledContentWrapper,
  StyledFlip
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
  - add fade effect
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
        <StyledFlip>
          <StyledContentWrapper open={!this.state.settingsOpened}>
            <StyledLeft>
              <StyledTitle theme={theme} checked={checked}>{title}</StyledTitle>
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
            <StyledContent>
              {
                toggle && !checked
                ? disabledContent
                : children
              }
            </StyledContent>
          </StyledContentWrapper>
          <StyledSettingsWrapper open={this.state.settingsOpened}>
              <StyledSettingsClose src={close} onClick={this.settingsClick} open={this.state.settingsOpened} />
              <StyledSettingsTitle>
                <StyledSettingsIcon src={settings} />
                <StyledSettingsText>{title} Settings</StyledSettingsText>
              </StyledSettingsTitle>
              {settingsChild}
          </StyledSettingsWrapper>
        </StyledFlip>
      </StyledWrapper>
    )
  }
}
