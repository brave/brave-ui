/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M28 8.318c-.837.425-1.814.709-2.79.85 1.046-.637 1.813-1.63 2.232-2.835-.977.567-2.023.993-3.14 1.205a4.965 4.965 0 0 0-5.956-.938c-1.97 1.066-3.011 3.325-2.555 5.545-3.907-.212-7.675-2.055-10.117-5.245a4.885 4.885 0 0 0-.598 3.656 4.817 4.817 0 0 0 2.133 3.007c-.767 0-1.535-.142-2.232-.496.07 2.339 1.674 4.394 3.907 4.89-.698.213-1.465.213-2.233.071.698 2.056 2.582 3.473 4.675 3.544C9.302 23.273 6.58 24.053 4 23.628a13.7 13.7 0 0 0 14.666.472c4.577-2.694 7.25-7.797 6.892-13.16.977-.708 1.814-1.559 2.442-2.622'
      fill='#1DA1F3'
    />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
