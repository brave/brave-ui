/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <path d='M10.6 7.364v-1.91C10.6 4.053 11.873 3 13.36 3h5.28c1.487 0 2.76 1.052 2.76 2.455v1.909H27a1 1 0 0 1 0 2h-2.3v17.015c0 1.467-1.252 2.621-2.76 2.621H10.06c-1.508 0-2.76-1.154-2.76-2.621V9.364H5a1 1 0 1 1 0-2h5.6zm2 0h6.8v-1.91c0-.204-.302-.454-.76-.454h-5.28c-.458 0-.76.25-.76.455v1.909zM14 23.636V12.727a1 1 0 0 0-2 0v10.91a1 1 0 1 0 2 0zm6 0V12.727a1 1 0 0 0-2 0v10.91a1 1 0 1 0 2 0z' />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
