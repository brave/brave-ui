/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M27.898 16.06c0 6.594-5.346 11.94-11.94 11.94-6.595 0-11.94-5.346-11.94-11.94 0-6.595 5.345-11.941 11.94-11.941 6.594 0 11.94 5.346 11.94 11.94'
        fill='#F7931A'
      />
      <path
        d='M18.857 19.549c-.1.336-.325.613-.633.78a1.303 1.303 0 0 1-.999.103l-3.363-1.002.75-2.515 3.362 1.002c.693.206 1.09.939.883 1.632m1.134-5.154a1.314 1.314 0 0 1-1.528 1.882L15.1 15.275l.749-2.515 3.362 1.002c.336.1.613.325.78.633m1.505-.814a3.004 3.004 0 0 0-1.796-1.46l-.445-.132.623-2.091-1.598-.476-.623 2.091-1.364-.406.623-2.091-.383-.114-1.55-.462-.601 2.016-1.89-.563-.534 1.79 1.89.564-1.941 6.519-1.89-.563-.534 1.791 1.89.563-.506 1.701.382.114 1.551.462.53-1.777 1.367.408-.53 1.777 1.592.474.53-1.777.447.133a3.007 3.007 0 0 0 2.302-.238 3.004 3.004 0 0 0 1.46-1.797 3.013 3.013 0 0 0-.264-2.339 3.014 3.014 0 0 0 1.5-1.816 3.004 3.004 0 0 0-.238-2.301'
        fill='#FFF'
      />
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
