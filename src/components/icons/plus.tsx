/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

export const Graphic = (
  <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 4a1.5 1.5 0 011.5 1.5v9h9a1.5 1.5 0 110 3h-9v9a1.5 1.5 0 11-3 0v-9h-9a1.5 1.5 0 110-3h9v-9A1.5 1.5 0 0116 4z' />
  </svg>
)

export default GenerateComponentForGraphic(Graphic)
