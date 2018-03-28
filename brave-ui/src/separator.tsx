/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import './separator.css'

export interface SeparatorProps {
  // component styles
  noMargin?: boolean
}

class Separator extends React.PureComponent<SeparatorProps, {}> {
  get componentStyles () {
    const { noMargin } = this.props
    return {
      '--separatorMargin': noMargin && 0
    }
  }

  render () {
    return (
      <hr className='separator' style={this.componentStyles} />
    )
  }
}

export default Separator
