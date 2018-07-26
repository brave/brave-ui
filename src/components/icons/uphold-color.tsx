/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
// TODO(petemill): generate unique IDs to not polute global DOM id scope, this could cause issues.
export const Graphic = (
    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <defs>
            <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'>
                <stop stopColor='#78BE06' offset='0%' />
                <stop stopColor='#FF523C' offset='100%' />
            </linearGradient>
            <linearGradient x1='50%' y1='0%' x2='50%' y2='97.602%' id='b'>
                <stop stopColor='#FAB406' offset='0%' />
                <stop stopColor='#FA5235' offset='100%' />
            </linearGradient>
            <linearGradient x1='50%' y1='0%' x2='50%' y2='97.184%' id='c'>
                <stop stopColor='#3D58D0' offset='0%' />
                <stop stopColor='#78B81B' offset='100%' />
            </linearGradient>
        </defs>
        <g fill='none'>
            <path
                d='M13.211 28.506c-.5205-.185-.7927-.7575-.608-1.2787.1848-.5212.7565-.7938 1.277-.6088.7123.2532 1.4176.3786 2.12.3786.7024 0 1.4077-.1254 2.12-.3786.5205-.185 1.0922.0876 1.277.6088.1847.5212-.0875 1.0937-.608 1.2787-.924.3285-1.855.494-2.789.494-.934 0-1.865-.1655-2.789-.494z'
                fill='#FF523C'
            />
            <path
                d='M9 22c-5.0258 0-9-4.9678-9-11S3.9742 0 9 0s9 4.9678 9 11-3.9742 11-9 11zm0-2c3.8108 0 7-3.9865 7-9 0-5.0135-3.1892-9-7-9s-7 3.9865-7 9c0 5.0135 3.1892 9 7 9z'
                fill='url(#a)'
                transform='translate(7 3)'
            />
            <path
                d='M9 22c-5.0258 0-9-4.9678-9-11 0-.2485.0169-.6624.067-1.1886.0835-.8768.2341-1.7554.4715-2.5861C1.2718 4.6585 2.6934 3 5 3c4.7426 0 9 5.1363 9 11 0 5.1313-2.2023 8-5 8zm0-2c1.5605 0 3-1.8751 3-6 0-4.8334-3.4537-9-7-9-1.1934 0-2.0218.9665-2.5385 2.7747-.2001.7006-.3308 1.4626-.4035 2.2264-.0436.4581-.058.81-.058.9989 0 5.0135 3.1892 9 7 9z'
                fill='url(#b)'
                transform='translate(7 3)'
            />
            <path
                d='M13 22c-5.0258 0-9-4.9678-9-11 0-.2485.0169-.6624.067-1.1886.0835-.8768.2341-1.7554.4715-2.5861C5.2718 4.6585 6.6934 3 9 3c4.7426 0 9 5.1363 9 11 0 5.1313-2.2023 8-5 8zm0-2c1.5605 0 3-1.8751 3-6 0-4.8334-3.4537-9-7-9-1.1934 0-2.0218.9665-2.5385 2.7747-.2001.7006-.3308 1.4626-.4035 2.2264-.0436.4581-.058.81-.058.9989 0 5.0135 3.1892 9 7 9z'
                fill='url(#c)'
                transform='matrix(-1 0 0 1 29 3)'
            />
        </g>
    </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
