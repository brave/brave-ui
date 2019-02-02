/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <circle cx='16' cy='16' r='13' fill='#f7931a' />
    <path
      d='M20 11.8l-.48-.15.67-2.26-1.73-.52-.67 2.27-1.48-.44.69-2.27-.41-.12-1.68-.5-.66 2.19-2.05-.62-.58 1.94 2.05.61-2.1 7.07-2.05-.61-.58 1.94 2.05.61-.55 1.84.41.12 1.68.5.58-1.92 1.48.44-.59 1.92 1.73.52.57-1.93.49.15a3.34 3.34 0 0 0 .94.14 3.28 3.28 0 0 0 2.85-4.88 3.27 3.27 0 0 0 1.62-2A3.28 3.28 0 0 0 20 11.8zm-.92 8a1.38 1.38 0 0 1-.68.85 1.4 1.4 0 0 1-1.08.11l-3.65-1.08.83-2.68 3.64 1.09a1.41 1.41 0 0 1 .95 1.75zm1.35-4.5a1.43 1.43 0 0 1-1.77 1L15 15.21l.81-2.72 3.64 1.09a1.39 1.39 0 0 1 .84.68 1.46 1.46 0 0 1 .15 1.08z'
      fill='#fff'
    />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
