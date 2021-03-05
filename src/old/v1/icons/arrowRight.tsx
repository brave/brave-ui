/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  stroke: inherit;
`

class ArrowRight extends React.PureComponent {
  render () {
    return (
      <StyledSVG id='arrow' width='15' height='14' xmlns='http://www.w3.org/2000/svg'>
        <g strokeWidth='1.5' fill='none' fillRule='evenodd' strokeLinecap='round'>
          <path d='M.5 6.5h12'/>
          <path strokeLinejoin='round' d='M10 1l4 5.625L10 12'/>
        </g>
      </StyledSVG>
    )
  }
}

export default ArrowRight
