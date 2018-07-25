/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
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
import SimpleIcon from '../../../components/media/simpleIcon'
import Toggle from '../../../components/formControls/toggle/index'
import { getLocale } from '../../../helpers'

export interface Theme {
  titleColor: CSS.Color
}

export interface Props {
  title: string
  id?: string
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
    this.setState({ settingsOpened: !this.state.settingsOpened })
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
                <Toggle onToggle={onToggle} checked={checked} size={'large'} />
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
                <StyledSettingsIcon float={'right'} onClick={this.settingsClick}>
                  <SimpleIcon type='settings' theme={{ color: 'none' }}/>
                </StyledSettingsIcon>
                : null
              }
            </StyledRight>
            <StyledContent>
              {
                (toggle && !checked) || (!toggle && disabledContent)
                ? disabledContent
                : children
              }
            </StyledContent>
          </StyledContentWrapper>
          <StyledSettingsWrapper open={this.state.settingsOpened}>
            <StyledSettingsClose onClick={this.settingsClick} open={this.state.settingsOpened}>
              <SimpleIcon type='close' theme={{ color: '#DFDFE8' }}/>
            </StyledSettingsClose>
            <StyledSettingsTitle>
              <StyledSettingsIcon>
                <SimpleIcon type='settings' theme={{ color: 'none' }}/>
              </StyledSettingsIcon>
              <StyledSettingsText>{title} {getLocale('settings')}</StyledSettingsText>
            </StyledSettingsTitle>
            {settingsChild}
          </StyledSettingsWrapper>
        </StyledFlip>
      </StyledWrapper>
    )
  }
}
