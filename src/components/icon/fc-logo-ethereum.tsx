/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg id='outlines' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <defs />
    <path className='cls-1' d='M16 2.94l-5.81 9.62L8 16.18l8-3.62V2.94z' />
    <path
      fill='#393939'
      fillRule='evenodd'
      d='M8 16.18l2.57 1.52L16 20.9v-8.34l-8 3.62z'
    />
    <path
      className='cls-3'
      d='M16 2.94v9.62l8 3.62-2.19-3.62L16 2.94z'
    />
    <path
      fill='#151515'
      fillRule='evenodd'
      d='M16 17.7v3.2l5.43-3.2L24 16.18l-8-3.62v5.14z'
    />
    <path
      className='cls-1'
      d='M8 17.7l2.28 3.2L16 28.94v-6.53l-2.56-1.51L8 17.7z'
    />
    <path
      className='cls-3'
      d='M18.57 20.9L16 22.41v6.53l5.72-8.04L24 17.7l-5.43 3.2z'
    />
</svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
