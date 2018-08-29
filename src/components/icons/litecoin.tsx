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
        d='M16 4C9.372 4 4 9.372 4 16s5.372 12 12 12 12-5.372 12-12S22.628 4 16 4z'
        fill='#BEBEBE'
      />
      <path
        fill='#FFF'
        d='M16.078 16.271l1.846-.674.458-1.725-.016-.043-1.816.664 1.309-4.929h-3.712l-1.712 6.431-1.43.522-.472 1.779 1.428-.522-1.008 3.79h9.878l.634-2.359h-6.166l.779-2.934'
      />
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
