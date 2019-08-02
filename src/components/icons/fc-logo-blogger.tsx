/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <defs>
      <radialGradient id='brave-blogger-a' cx='.259%' cy='0%' r='140.588%' fx='.259%' fy='0%'>
        <stop offset='0%' stopColor='#F59839' />
        <stop offset='100%' stopColor='#F38936' />
      </radialGradient>
      <radialGradient
        id='brave-blogger-b'
        cx='.209%'
        cy='.103%'
        r='141.122%'
        fx='.209%'
        fy='.103%'
      >
        <stop offset='0%' stopColor='#FFF' stopOpacity='0.1' />
        <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
      </radialGradient>
    </defs>
    <g fill='none'>
      <path
        fill='url(#brave-blogger-a)'
        d='M28 25.637A2.353 2.353 0 0125.637 28H2.363A2.353 2.353 0 010 25.637V2.363A2.353 2.353 0 012.362 0h23.363C26.95 0 28 1.05 28 2.362v23.275z'
        transform='translate(2 2)'
      />
      <path
        fill='#FFF'
        d='M24.137 13.637H23a1.158 1.158 0 01-1.137-1.137A5.863 5.863 0 0016 6.638h-3.5A5.863 5.863 0 006.638 12.5v7a5.863 5.863 0 005.862 5.863h7a5.863 5.863 0 005.863-5.863v-4.637c0-.7-.526-1.226-1.226-1.226zm-11.725-2.274h4.2c.613 0 1.138.524 1.138 1.137s-.525 1.137-1.137 1.137h-4.2a1.158 1.158 0 01-1.138-1.137c0-.613.525-1.137 1.137-1.137zm7.175 9.274H12.5a1.158 1.158 0 01-1.137-1.137c0-.613.524-1.137 1.137-1.137h7.087c.613 0 1.138.524 1.138 1.137s-.525 1.137-1.138 1.137z'
      />
      <path
        fill='url(#brave-blogger-b)'
        d='M28 25.637A2.353 2.353 0 0125.637 28H2.363A2.353 2.353 0 010 25.637V2.363A2.353 2.353 0 012.362 0h23.363C26.95 0 28 1.05 28 2.362v23.275z'
        transform='translate(2 2)'
      />
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
