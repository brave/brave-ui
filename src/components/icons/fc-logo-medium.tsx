/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <g fill='none' fillRule='evenodd'>
      <path fill='#FFF' d='M5 7h23v19H5z' />
      <path
        fill='#000'
        fillRule='nonzero'
        d='M2 2v28h28V2H2zm23.262 6.634l-1.497 1.443a.452.452 0 00-.173.42v10.575a.452.452 0 00.173.42l1.464 1.443v.313h-7.377v-.313l1.519-1.475c.15-.15.15-.194.15-.42v-8.55L15.29 23.257h-.57L9.807 12.49v7.194a.96.96 0 00.269.819l1.981 2.401v.312h-5.61v-.312l2.014-2.401a.958.958 0 00.247-.819V11.37a.722.722 0 00-.247-.624L6.706 8.59v-.27h5.46l4.21 9.24 3.706-9.24h5.18v.313z'
      />
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
