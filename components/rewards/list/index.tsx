/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledTitle, StyledContent } from './style'

export interface Props {
  id?: string
  title?: string
  children?: React.ReactChild
  onClick?: () => void
}

export default class List extends React.PureComponent<Props, {}> {
  render () {
    const { id, onClick, title, children } = this.props

    const props: Props = {
      id
    }

    if (onClick) {
      props.onClick = onClick
    }

    return (
      <StyledWrapper {...props}>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>
          {children}
        </StyledContent>
      </StyledWrapper>
    )
  }
}
