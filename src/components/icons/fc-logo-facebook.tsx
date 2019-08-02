/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <g fill='none' fillRule='evenodd'>
      <path
        fill='#1877F2'
        d='M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16c0 6.988 5.12 12.78 11.813 13.83v-9.783h-3.555V16h3.555v-3.084c0-3.51 2.09-5.447 5.288-5.447 1.531 0 3.133.273 3.133.273v3.446H20.47c-1.74 0-2.282 1.079-2.282 2.186V16h3.883l-.62 4.047h-3.262v9.783C24.88 28.78 30 22.988 30 16'
      />
      <path
        fill='#FFF'
        d='M21.45 20.047L22.07 16h-3.883v-2.626c0-1.107.543-2.187 2.282-2.187h1.765V7.742s-1.602-.273-3.133-.273c-3.198 0-5.288 1.938-5.288 5.447V16h-3.555v4.047h3.555v9.783a14.105 14.105 0 004.374 0v-9.783h3.263'
      />
    </g>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
