/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledTabWrapper, StyledTab, StyledContent } from './style'

export interface Props {
  activeTabId: string
  onChange: (tabId: any) => void
  children?: React.ReactNode
  id?: string
  className?: string
}

export default class Tabs extends React.PureComponent<Props, {}> {
  generateTabs = () => {
    let content: React.ReactNode = null
    const self = this

    if (React.Children.count(self.props.children) === 0) {
      return {
        tabs: null,
        content: null
      }
    }

    const tabs = React.Children.map(self.props.children, (child: any, i: number) => {
      if (child.props['data-key'] === undefined) {
        return null
      }

      const key = child.props['data-key']
      const title = child.props['data-title'] || `Tab - ${i}`
      const selected = !!self.props.activeTabId && (
        self.props.activeTabId === key ||
        (
          self.props.activeTabId.length === 0 &&
          i === 0
        )
      )

      if (selected) {
        content = child.props.children
      }

      return (
        <StyledTab
          key={`${self.props.id}-tab-${key}`}
          onClick={self.props.onChange.bind(self, key)}
          selected={selected}
        >
          {title}
        </StyledTab>
      )
    })

    return {
      tabs,
      content
    }
  }

  render () {
    const { id, className } = this.props
    const { content, tabs } = this.generateTabs()

    return (
      <div className={className} id={id}>
        <StyledTabWrapper>
          {tabs}
        </StyledTabWrapper>
        <StyledContent>
          {content}
        </StyledContent>
      </div>
    )
  }
}
