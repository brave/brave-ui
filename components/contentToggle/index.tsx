/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledContentToggle,
  StyledContentToggleControl,
  StyledContentToggleSummary,
  StyledContentToggleContent
} from './style'

import Separator from '../separator'

export interface ContentToggleProps {
  id?: string,
  summary: string,
  open?: boolean,
  defaultOpen?: boolean,
  withSeparator?: boolean,
  children?: React.ReactNode,
  onClick?: (e: any) => void
}

export interface ContentToggleState {
  open?: boolean
}

class ContentToggle extends React.PureComponent<ContentToggleProps, ContentToggleState> {
  constructor (props: ContentToggleProps) {
    super(props)
    // defaultOpen is only valid when there's no user activity
    // which means open is undefined
    this.state = { open: props.open != null ? props.open : props.defaultOpen }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps: ContentToggleProps) {
    if ('open' in nextProps) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick (e: any) {
    this.setState((prevState: ContentToggleState) => ({open: !prevState.open}))

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
      <StyledContentToggle id={id} open={open} withSeparator={withSeparator}>
        <StyledContentToggleControl
          id={`${id}Control`}
          open={open}
          onClick={this.handleClick}
        >
          {withSeparator && <Separator />}
          <StyledContentToggleSummary>{summary}</StyledContentToggleSummary>
          {withSeparator && <Separator />}
        </StyledContentToggleControl>
        <StyledContentToggleContent open={open}>{children}</StyledContentToggleContent>
      </StyledContentToggle>
    )
  }
}

export default ContentToggle
