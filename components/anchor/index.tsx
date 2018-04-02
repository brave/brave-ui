/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import './style.css'

import { applyClass } from '../helpers'

export interface ActionButtonProps {
  id?: string,
  href: string
  noStyle?: boolean
  target?: '_blank' | '_parent' | '_self' | '_top'
  text: string | number
}

class Anchor extends React.PureComponent<ActionButtonProps, {}> {
  render () {
    const { id, href, noStyle = false, target, text } = this.props
    return (
      <a
        id={id}
        className={applyClass({
          anchor: true,
          anchor__noStyle: noStyle
        })}
        href={href}
        target={target}
        rel='noreferrer noopener'
      >
        {text.toString()}
      </a>
    )
  }
}

export default Anchor
