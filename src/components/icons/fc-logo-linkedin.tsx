/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <g fill='none'>
      <path
        fill='#0077B5'
        d='M2 4.34A2.34 2.34 0 014.34 2h23.32A2.34 2.34 0 0130 4.34v23.32A2.34 2.34 0 0127.66 30H4.34A2.34 2.34 0 012 27.66V4.34z'
      />
      <path
        fill='#FFF'
        d='M13.083 12.675h3.792v1.905c.547-1.095 1.947-2.08 4.051-2.08 4.033 0 4.99 2.18 4.99 6.182v7.41h-4.083v-6.5c0-2.278-.546-3.563-1.936-3.563-1.928 0-2.73 1.386-2.73 3.564v6.499h-4.084V12.675zm-7 13.242h4.084V12.5H6.083v13.417zM10.75 8.125a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
      />
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
