/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
<svg width='32' height='32' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <defs>
        <path d='M28.704 27.28L17.41 15.996 28.704 4.709a1.004 1.004 0 0 0-1.419-1.42L16 14.587 4.715 3.29a1.004 1.004 0 1 0-1.42 1.42l11.296 11.285L3.296 27.281a1 1 0 0 0 0 1.42 1 1 0 0 0 1.419 0L16 17.404 27.285 28.7a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z' id='b' />
        <filter x='-17.3%' y='-17.3%' width='134.6%' height='134.6%' filterUnits='objectBoundingBox' id='a'>
            <feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
            <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1' />
            <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0' in='shadowBlurOuter1' />
        </filter>
    </defs>
    <g fill='none' fillRule='evenodd'>
        <use fill='#000' filter='url(#a)' xlinkHref='#b' />
        <use fill='#FFF' xlinkHref='#b' />
    </g>
</svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
