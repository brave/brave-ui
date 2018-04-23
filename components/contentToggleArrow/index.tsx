/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledContentToggleArrow,
  StyledContentToggleArrowControl,
  StyledContentToggleArrowSummary,
  StyledContentToggleArrowContent
} from './style'

import Separator from '../separator'

export interface ContentToggleArrowProps {
  id?: string,
  summary: string,
  open?: boolean,
  defaultOpen?: boolean,
  withSeparator?: boolean,
  children?: React.ReactNode,
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
    this.state = { open: props.open != null ? props.open : props.defaultOpen }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps: ContentToggleArrowProps) {
    if ('open' in nextProps) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick (e: any) {
    this.setState((prevState: ContentToggleArrowState) => ({open: !prevState.open}))

    this.props.onClick!({
      target: {
        open: this.state.open,
        id: e.target.id
      }
    })
  }

  render() {
    const { id, summary, withSeparator, children } = this.props
    const { open } = this.state

    return (
      <StyledContentToggleArrow id={id} open={open} withSeparator={withSeparator}>
        <StyledContentToggleArrowControl
          id={`${id}Control`}
          open={open}
          onClick={this.handleClick}
        >
          {withSeparator && <Separator />}
          <StyledContentToggleArrowSummary>{summary}</StyledContentToggleArrowSummary>
          {withSeparator && <Separator />}
        </StyledContentToggleArrowControl>
        <StyledContentToggleArrowContent open={open}>{children}</StyledContentToggleArrowContent>
      </StyledContentToggleArrow>
    )
  }
}

export default ContentToggleArrow
