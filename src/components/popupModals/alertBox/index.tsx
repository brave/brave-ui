/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledDialogWrapper, StyledDialog, StyledFooter, StyledCancelContainer } from './style'
import Button from '../../buttonsIndicators/button'

export interface Props {
  testId?: string
  children?: React.ReactNode
  onClickCancel?: () => void
  onClickOk?: () => void
  cancelString?: string
  okString: string
}

export default class AlertBox extends React.PureComponent<Props, {}> {
  render () {
    const { testId, children, ...buttonProps } = this.props
    const { onClickCancel, cancelString, onClickOk, okString } = buttonProps
    return (
      <StyledDialogWrapper>
      <StyledDialog data-test-id={testId}>
        <div>{children}</div>
        <StyledFooter>
          <StyledCancelContainer>
            {
              cancelString
                ? <Button onClick={onClickCancel} text={cancelString} />
                : null
            }
          </StyledCancelContainer>
          <Button level='primary' onClick={onClickOk} text={okString} />
        </StyledFooter>
      </StyledDialog>
      </StyledDialogWrapper>
    )
  }
}
