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
import Checkbox from '../checkbox'

const close = require('./assets/close.svg')

export interface Props {
  id?: string
  title: string
  description?: string
  toggle?: boolean
  checked?: boolean
  toggleClick?: () => void
  settingsIcon?: string
  settingsChild?: React.ReactNode
  children?: React.ReactNode
}

interface State {
  settingsOpened: boolean
}

/*
  TODO
  - add local
 */
class Box extends React.PureComponent<Props, State> {
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
      toggleClick,
      settingsIcon,
      settingsChild,
      description,
      children
    } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledLeft>
          <StyledTitle>{title}</StyledTitle>
        </StyledLeft>
        <StyledRight>
          {
            toggle ?
            <Checkbox onClick={toggleClick} checked={checked} />
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
            settingsIcon ?
            <StyledSettingsIcon src={settingsIcon} float={'right'} onClick={this.settingsClick} />
            : null
          }
        </StyledRight>
        {
          this.state.settingsOpened
          ? <StyledSettingsWrapper>
              <StyledSettingsClose src={close} onClick={this.settingsClick} />
              <StyledSettingsTitle>
                <StyledSettingsIcon src={settingsIcon} />
                <StyledSettingsText>{title} Settings</StyledSettingsText>
              </StyledSettingsTitle>
              {settingsChild}
          </StyledSettingsWrapper>
          : null
        }
        <StyledContent>
          {children}
        </StyledContent>
      </StyledWrapper>
    )
  }
}

export default Box
