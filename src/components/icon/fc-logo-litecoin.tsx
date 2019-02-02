/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <circle cx='16' cy='16' r='13' fill='#bebebe' />
      <path
        fill='#fff'
        d='M16.09 16.29l1.99-.73.5-1.86-.02-.05-1.97.72 1.42-5.34h-4.02l-1.85 6.96-1.55.57-.51 1.93 1.54-.57-1.09 4.11h10.7l.69-2.56h-6.68l.85-3.18'
      />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
