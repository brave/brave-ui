/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <path d='M10.75 9.875V2h10.5v7.875h-10.5zm10.5 4.375H30V30H2V14.25h8.75v7.875h10.5V14.25z' />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
