/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <path fill='#8C8C8C' d='M16.102 4l-5.728 8.836-2.16 3.333 7.888-3.333z'/>
      <path fill='#393939' d='M8.213 16.17l2.531 1.39 5.358 2.945V12.836z'/>
      <path fill='#343434' d='M16.102 4v8.836l7.888 3.333-2.16-3.333z'/>
      <path fill='#151515' d='M16.102 17.56v2.945l5.358-2.945 2.53-1.39-7.888-3.334z'/>
      <path fill='#8C8C8C' d='M8.213 17.56l2.248 2.945 5.64 7.39v-6.002l-2.527-1.388-5.36-2.945z'/>
      <path fill='#343434' d='M18.631 20.505l-2.53 1.388v6.003l5.645-7.391 2.244-2.939v-.003z'/>
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
