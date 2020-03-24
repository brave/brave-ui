/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

export const Graphic = (
  <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
    <path d='M27.223 28.276H3.889C1.745 28.276 0 26.279 0 23.83V9.016c0-2.45 1.745-4.445 3.889-4.445h23.334c2.144 0 3.888 1.995 3.888 4.445v14.815c0 2.45-1.744 4.445-3.888 4.445zM3.889 25.31h23.334c.716 0 1.295-.663 1.295-1.48v-8.888H2.592v8.889c0 .818.58 1.48 1.297 1.48zM28.518 9.016c0-.818-.58-1.482-1.295-1.482H3.889c-.716 0-1.295.664-1.295 1.482v1.481h25.924v-1.48z' />
  </svg>
)

export default GenerateComponentForGraphic(Graphic)
