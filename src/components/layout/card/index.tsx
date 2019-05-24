/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import * as Styled from './style'

export type Emphasis = '50' | '60' // a (small) scale
export interface CardProps {
  testId?: string
  children?: React.ReactNode
  className?: string
  useDefaultContentPadding?: boolean
  emphasis?: Emphasis
}

interface PropsWithDefaults {
  useDefaultContentPadding: boolean
  emphasis: Emphasis
}

type ActualProps = CardProps & PropsWithDefaults

/**
 * Card Component
 * Styled block simulating a *card* style usually made as a styled wrapper
 * @prop {string} testId - the test id to be used for testing
 * @prop {React.ReactNode} children - the child components/elements to be included
 */
export default class Card extends React.Component<ActualProps, {}> {
  static defaultProps = {
    useDefaultContentPadding: true,
    emphasis: '50'
  }

  render () {
    const {
      testId,
      children
    } = this.props

    const styleProps = {
      className: this.props.className,
      useDefaultContentPadding: this.props.useDefaultContentPadding,
      emphasis: this.props.emphasis
    }
    return (
      <Styled.Card data-test-id={testId} {...styleProps}>
        <Styled.Content {...styleProps}>
          {children}
        </Styled.Content>
      </Styled.Card>
    )
  }
}
