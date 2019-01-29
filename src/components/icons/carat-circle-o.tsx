/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <path d='M21.673 18.74a1.001 1.001 0 0 0 .067-1.413l-5-5.5c-.38-.417-1.101-.417-1.48 0l-5 5.5a1.001 1.001 0 0 0 1.48 1.346L16 13.987l4.26 4.686a.998.998 0 0 0 1.413.067M16 5C9.935 5 5 9.935 5 16c0 6.066 4.935 11 11 11 6.066 0 11-4.934 11-11 0-6.065-4.934-11-11-11m0 24C8.832 29 3 23.169 3 16 3 8.832 8.832 3 16 3s13 5.832 13 13c0 7.169-5.832 13-13 13' />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
