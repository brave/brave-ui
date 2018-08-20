/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { StyledCard } from './style'

export interface CardProps {
  testId?: string
  children?: React.ReactNode
}

/**
 * Card Component
 * Styled block simulating a *card* style usually made as a styled wrapper
 * @prop {string} testId - the test id to be used for testing
 * @prop {React.ReactNode} children - the child components/elements to be included
 */
export default class Card extends React.PureComponent<CardProps, {}> {
  render () {
    const { testId, children } = this.props
    return (
      <StyledCard data-test-id={testId}>{children}</StyledCard>
    )
  }
}
