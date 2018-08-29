/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none'>
      <path
        d='M27.476 10.162a3.039 3.039 0 0 0-2.126-2.148C23.487 7.5 15.985 7.5 15.985 7.5s-7.502.016-9.366.53a3.039 3.039 0 0 0-2.126 2.148C4 12.06 4 16 4 16s0 3.939.508 5.838a3.039 3.039 0 0 0 2.126 2.148C8.498 24.5 16 24.5 16 24.5s7.502 0 9.366-.514a3.039 3.039 0 0 0 2.126-2.148C28 19.954 28 16 28 16s-.015-3.939-.524-5.838z'
        fill='red'
      />
      <path fill='#FFF' d='M14 19.524l6.035-3.512L14 12.5z'/>
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
