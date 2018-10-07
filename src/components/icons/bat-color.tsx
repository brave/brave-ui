/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'
// Direct access to SVG
export const Graphic = (
    <svg width='32' height='32'>
        <g fill='none' fillRule='evenodd'>
            <path d='M2.05 27.5l8.2-4.87 5.65-10V3c-.15 0-.3.1-.42.3L8.8 15.14 2.1 26.98c-.1.2-.12.38-.04.51' fill='#FF4724' />
            <path d='M15.9 3v9.64l5.65 10 8.2 4.85c.07-.13.06-.3-.06-.5L23 15.13 16.3 3.3c-.1-.2-.25-.3-.4-.3' fill='#9E1F63' />
            <path d='M29.74 27.5l-8.2-4.87h-11.3l-8.2 4.86c.08.14.24.22.47.22h26.78c.22 0 .38-.08.45-.22' fill='#662D91' />
            <path fill='#FFF' d='M10.24 22.63h11.31l-5.65-9.99z' />
        </g>
</svg>
)
// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
