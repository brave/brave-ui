/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'
// Direct access to SVG
export const Graphic = (
    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' fillRule='evenodd'>
            <path
                d='M11.7529 21.0875l3.469-5.945c.174-.298.475-.448.778-.448v-8.695c-.303 0-.604.15-.778.447l-11.098 19.025c-.174.299-.154.635-.006.897l7.608-4.437c-.123-.254-.135-.565.027-.844'
                fill='#FF5000'
            />
            <path
                d='M16.7783 15.1422l3.469 5.945c.162.28.15.59.027.844l7.608 4.438c.148-.263.167-.599-.006-.898l-11.098-19.024c-.174-.298-.476-.448-.778-.448v8.696c.302 0 .604.149.778.447'
                fill='#9E1F63'
            />
            <path
                d='M27.8818 26.3687l-7.607-4.437c-.143.292-.435.511-.807.511h-6.936c-.372 0-.664-.219-.806-.511l-7.608 4.437c.152.267.435.459.785.459h22.195c.349 0 .633-.192.784-.459'
                fill='#662D91'
            />
            <path
                d='M11.7256 21.9312c.143.293.435.512.807.512h6.935c.372 0 .664-.219.807-.512.123-.254.135-.564-.028-.844l-3.468-5.945c-.174-.298-.476-.447-.779-.447-.302 0-.604.149-.778.447l-3.469 5.945c-.162.28-.15.59-.027.844'
                fill='#FFF'
            />
        </g>
    </svg>
)
// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
