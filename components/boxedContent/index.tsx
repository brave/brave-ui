/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import StyledBoxedContent from './style'

export interface BoxedContentProps {
  id?: string,
  width?: string,
  margin?: string,
  children?: React.ReactNode
}

class BoxedContent extends React.PureComponent<BoxedContentProps, {}> {
  render () {
    const { id, width, margin, children } = this.props
    return (
      <StyledBoxedContent id={id} width={width} margin={margin}>
        {children}
      </StyledBoxedContent>
    )
  }
}

export default BoxedContent
