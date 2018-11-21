/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='26' height='26' xmlns='http://www.w3.org/2000/svg'>
    <g transform='translate(1 1)' fill='none' fill-rule='evenodd'>
      <circle stroke='#A1A8F2' opacity='.651' cx='12' cy='12' r='12'/>
      <path d='M12.263 9a.734.734 0 0 0-.52.216l-4.527 4.526a.737.737 0 1 0 1.043 1.043l4.004-4.005 4.005 4.004a.737.737 0 0 0 1.042-1.042l-4.526-4.526A.732.732 0 0 0 12.263 9z' fill='#4C54D2'/>
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
