/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
  <g fill='#FFF' fill-rule='evenodd' opacity='.3'>
    <path d='M15 33.1a2.093 2.093 0 0 1-1.484-.614l-12.9-12.9a2.1 2.1 0 0 1 0-2.972 2.104 2.104 0 0 1 2.972 0l11.411 11.414 11.415-11.412a2.1 2.1 0 0 1 2.97 2.97l-12.9 12.9c-.407.41-.947.614-1.485.614z'/>
    <rect fill-rule='nonzero' x='13' width='4' height='29' rx='2'/>
  </g>
</svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
