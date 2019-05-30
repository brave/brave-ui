/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledBox,
  StyledTitle,
  StyledValue,
  StyledText,
  StyledButtonWrapper
} from './style'
import { getLocale } from '../../../helpers'
import Button from '../../../components/buttonsIndicators/button'

export interface Props {
  id?: string
  testId?: string
  onClose: () => void
  amount: string
  date: string,
  isMobile?: boolean
  amountTitleText?: string
  dateTitleText?: string
}

export default class GrantComplete extends React.PureComponent<Props, {}> {
  static defaultProps = {
    amountTitleText: getLocale('newTokenGrant'),
    dateTitleText: getLocale('grantExpire')
  }
  render () {
    const { id, testId, onClose, amount, date, isMobile } = this.props

    return (
      <StyledWrapper id={id} data-test-id={testId}>
        <StyledBox>
          <StyledTitle>{this.props.amountTitleText}</StyledTitle>
          <StyledValue>{amount} BAT</StyledValue>
          {
            date && date.length > 0
            ? <>
              <StyledTitle>{this.props.dateTitleText}</StyledTitle>
              <StyledValue>{date}</StyledValue>
            </>
            : null
          }
        </StyledBox>
        {
          !isMobile && date && date.length > 0
          ? <StyledText>
              {getLocale('grantDisclaimer')}
            </StyledText>
          : null
        }
        <StyledButtonWrapper isMobile={isMobile}>
          <Button
            text={getLocale('ok')}
            size={'call-to-action'}
            type={'accent'}
            onClick={onClose}
          />
        </StyledButtonWrapper>
      </StyledWrapper>
    )
  }
}
