/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.062 4L4.45 8.12v16.835h5.731V28h3.224l3.045-3.045h4.657l6.268-6.268V4H6.062zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045H8.032V6.149h17.194v11.463zm-3.582-7.343v6.268h-2.15V10.27h2.15zm-5.731 0v6.268h-2.15V10.27h2.15z'
      fill='#6441A4'
      fillRule='evenodd'
    />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
