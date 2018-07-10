/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

export interface Props {
  id?: string
  children?: React.ReactNode
}

export default class Hero extends React.PureComponent<Props, {}> {
  render () {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}
