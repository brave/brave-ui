/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledLogo,
  StyledTitle,
  StyledTM,
  StyledLeft,
  StyledRight,
  StyleTitle,
  StyleText,
  StyledContent
} from './style'
import SimpleIcon from '../../../components/media/simpleIcon'
import Toggle from '../../../components/formControls/toggle/index'
import { getLocale } from '../../../helpers'

export interface Props {
  enabled: boolean
  onToggle: () => void
  id?: string
}

export default class MainToggle extends React.PureComponent<Props, {}> {
  render () {
    const { id, enabled, onToggle } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledLeft>
          <StyledLogo>
            <SimpleIcon type='bat'/>
          </StyledLogo>
          <StyledTitle>
            {getLocale('braveRewards')} <StyledTM>TM</StyledTM>
          </StyledTitle>
        </StyledLeft>
        <StyledRight>
          <Toggle checked={enabled} onToggle={onToggle} size={'large'} />
        </StyledRight>
        {
          !enabled
          ? <StyledContent>
            <StyleTitle>{getLocale('rewardsWhy')}</StyleTitle>
            <StyleText>
              {getLocale('rewardsOffText1')} <br/>
              <b>{getLocale('rewardsOffText2')}</b>
            </StyleText>
            <StyleTitle>{getLocale('rewardsOffText3')}</StyleTitle>
            <StyleText>
              {getLocale('rewardsOffText4')}
            </StyleText>
          </StyledContent>
          : null
        }
      </StyledWrapper>
    )
  }
}
