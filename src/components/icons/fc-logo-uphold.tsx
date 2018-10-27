/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
// TODO(petemill): generate unique IDs to not polute global DOM id scope, this could cause issues.
export const Graphic = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <defs>
            <linearGradient
                id='a'
                x1='-378.78'
                y1='583.86'
                x2='-378.78'
                y2='582.86'
                gradientTransform='matrix(18 0 0 -22 6834 12848)'
                gradientUnits='userSpaceOnUse'
            >
                <stop offset='0' stopColor='#78be06' />
                <stop offset='1' stopColor='#ff523c' />
            </linearGradient>
            <linearGradient
                id='b'
                x1='-372.29'
                y1='587.63'
                x2='-372.29'
                y2='586.66'
                gradientTransform='matrix(14 0 0 -19 5226 11171)'
                gradientUnits='userSpaceOnUse'
            >
                <stop offset='0' stopColor='#fab406' />
                <stop offset='1' stopColor='#fa5235' />
            </linearGradient>
            <linearGradient
                id='c'
                x1='-430.71'
                y1='587.63'
                x2='-430.71'
                y2='586.66'
                gradientTransform='matrix(-14 0 0 -19 -6012 11171)'
                gradientUnits='userSpaceOnUse'
            >
                <stop offset='0' stopColor='#3d58d0' />
                <stop offset='1' stopColor='#78b81b' />
            </linearGradient>
        </defs>
        <path
            d='M13.21 28.51a1 1 0 0 1 .67-1.89 6.1 6.1 0 0 0 4.24 0 1 1 0 0 1 .67 1.89 8.19 8.19 0 0 1-5.58 0z'
            fill='#ff523c'
        />
        <path
            d='M16 25c-5 0-9-5-9-11s4-11 9-11 9 5 9 11-4 11-9 11zm0-2c3.81 0 7-4 7-9s-3.19-9-7-9-7 4-7 9 3.19 9 7 9z'
            fill='url(#a)'
        />
        <path
            d='M16 25c-5 0-9-5-9-11 0-.25 0-.66.07-1.19a13.81 13.81 0 0 1 .47-2.58C8.27 7.66 9.69 6 12 6c4.74 0 9 5.14 9 11 0 5.13-2.2 8-5 8zm0-2c1.56 0 3-1.88 3-6 0-4.83-3.45-9-7-9-1.19 0-2 1-2.54 2.77a12.53 12.53 0 0 0-.4 2.23A9.51 9.51 0 0 0 9 14c0 5 3.19 9 7 9z'
            fill='url(#b)'
        /> <path
            d='M16 25c5 0 9-5 9-11 0-.25 0-.66-.07-1.19a13.81 13.81 0 0 0-.47-2.58C23.73 7.66 22.31 6 20 6c-4.74 0-9 5.14-9 11 0 5.13 2.2 8 5 8zm0-2c-1.56 0-3-1.88-3-6 0-4.83 3.45-9 7-9 1.19 0 2 1 2.54 2.77a12.53 12.53 0 0 1 .4 2.23 9.51 9.51 0 0 1 .06 1c0 5-3.19 9-7 9z'
            fill='url(#c)'
        />
    </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
