/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Separator from './separator'

export interface ContentToggleProps {
  id?: string,
  summary: string,
  open?: boolean,
  defaultOpen?: boolean,
  withSeparator?: boolean,
  children?: React.ReactNode,
  onClick: (e: any) => void
}

export interface ContentToggleState {
  open?: boolean
}

class ContentToggle extends React.PureComponent<ContentToggleProps, ContentToggleState> {
  constructor (props: ContentToggleProps) {
    super(props)
    const open = 'open' in props ? props.open : props.defaultOpen
    this.state = { open }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps: ContentToggleProps) {
    if ('open' in nextProps) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick (e: any) {
    const { props } = this
    if (!('open' in props)) {
      this.setState({ open: e.target.open })
    }
    props.onClick({ target: { open: e.target.open } })
  }

  render () {
    const { id, summary, defaultOpen, withSeparator, children } = this.props
    const { open } = this.state
    const maybeOpen = 'defaultOpen' in this.props ? (defaultOpen && open) : !!open
    return (
      <details
        id={id}
        open={maybeOpen}>
        <summary
          onClick={this.handleClick}
          className={css(
            styles.summary,
            maybeOpen && styles.summary__open
          )}
        >
          {summary}
          {withSeparator && <Separator />}
        </summary>
        <div>{children}</div>
        {withSeparator && <Separator />}
      </details>
    )
  }
}

const styles = StyleSheet.create({
  summary: {
    display: 'block',

    // webkit does handle the caret by default
    // but if we want to style it in the future
    // it's better to have our own defined
    '::-webkit-details-marker': {
      display: 'none'
    },

    '::before': {
      content: '"▶"',
      paddingRight: '0.5em'
    }
  },

  summary__open: {
    '::before': {
      content: '"▼"'
    }
  }
})

export default ContentToggle
