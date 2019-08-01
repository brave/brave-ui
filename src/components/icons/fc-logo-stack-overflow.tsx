/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <g fill='none'>
      <path fill='#BCBBBB' d='M23.5 26.75V20h3v9.75H4V20h3v6.75z' />
      <path
        fill='#F48024'
        d='M20.125 2L18.1 3.5l7.425 9.975 2.025-1.5L20.125 2zM23.5 15.8l-9.525-7.95 1.575-1.875 9.525 7.95L23.5 15.8zm-12.675-2.4l11.25 5.25 1.05-2.25-11.25-5.25-1.05 2.25zm10.5 8.092l.51-2.212L9.76 16.767l-.51 2.483 12.075 2.242zM21.25 24.5h-12v-2.25h12v2.25z'
      />
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
