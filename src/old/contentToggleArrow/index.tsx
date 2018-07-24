/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import Separator from '../separator/index'

import {
  StyledContentToggleArrow,
  StyledContentToggleArrowControl,
  StyledContentToggleArrowSummary,
  StyledContentToggleArrowContent
} from './style'

export interface ContentToggleArrowProps {
  id?: string
  summary: string
  open?: boolean
  defaultOpen?: boolean
  withSeparator?: boolean
  children?: React.ReactNode
  onClick?: (e: any) => void
}

export interface ContentToggleArrowState {
  open?: boolean
}

class ContentToggleArrow extends React.PureComponent<ContentToggleArrowProps, ContentToggleArrowState> {
  constructor (props: ContentToggleArrowProps) {
    super(props)
    // defaultOpen is only valid when there's no user activity
    // which means open is undefined
    this.state = { open: props.open !== undefined ? props.open : props.defaultOpen }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps: ContentToggleArrowProps) {
    if ('open' in nextProps) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick (e: any) {
    this.setState((prevState: ContentToggleArrowState) => ({ open: !prevState.open }))

    this.props.onClick!({
      target: {
        open: this.state.open,
        id: e.target.id
      }
    })
  }

  render () {
    const { id, summary, withSeparator, children } = this.props
    const { open } = this.state

    return (
      <StyledContentToggleArrow id={id} open={open} withSeparator={withSeparator}>
        <StyledContentToggleArrowControl
          id={`${id}Control`}
          open={open}
          onClick={this.handleClick}
        >
          <StyledContentToggleArrowSummary>{summary}</StyledContentToggleArrowSummary>
        </StyledContentToggleArrowControl>
        {withSeparator && <Separator />}
        <StyledContentToggleArrowContent
          open={open}
          withSeparator={withSeparator}
        >
          {children}
        </StyledContentToggleArrowContent>
          {open && withSeparator && <Separator />}
      </StyledContentToggleArrow>
    )
  }
}

export default ContentToggleArrow
