/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <path d='M21.027 27.895c-.004.04-.077.105-.118.105H11.09c-.04 0-.113-.066-.117-.105L8.864 8.998h14.308l-2.145 18.896zM13.454 5c0-.551.448-1 1-1h3.092c.551 0 1 .449 1 1v2h-5.092V5zM27 7h-6.454V5c0-1.655-1.346-3-3-3h-3.092c-1.655 0-3 1.345-3 3v2H5a1 1 0 1 0 0 2h1.851l2.134 19.117A2.144 2.144 0 0 0 11.09 30h9.82a2.142 2.142 0 0 0 2.104-1.88L25.184 9H27a1 1 0 1 0 0-2z'/>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
