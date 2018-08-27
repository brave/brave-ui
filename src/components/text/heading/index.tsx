/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 } from './style'

export interface HeadingProps {
  testId?: string
  level?: number
  className?: string
  children?: React.ReactNode
}

export default class Heading extends React.PureComponent<HeadingProps, {}> {
  render () {
    const { testId, level, children, className } = this.props
    switch (level) {
      case 1:
        return <StyledH1 data-test-id={testId} className={className}>{children}</StyledH1>
      case 2:
        return <StyledH2 data-test-id={testId} className={className}>{children}</StyledH2>
      case 3:
        return <StyledH3 data-test-id={testId} className={className}>{children}</StyledH3>
      case 4:
        return <StyledH4 data-test-id={testId} className={className}>{children}</StyledH4>
      case 5:
        return <StyledH5 data-test-id={testId} className={className}>{children}</StyledH5>
      case 6:
        return <StyledH6 data-test-id={testId} className={className}>{children}</StyledH6>
      default:
        return <StyledH1 data-test-id={testId} className={className}>{children}</StyledH1>
    }
  }
}
