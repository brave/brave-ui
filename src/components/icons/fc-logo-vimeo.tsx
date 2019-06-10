
/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from './template'

// Direct access to SVG
export const Graphic = (
  <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M29 26.4a2.6 2.6 0 0 1-2.6 2.6H5.6A2.6 2.6 0 0 1 3 26.4V5.6A2.6 2.6 0 0 1 5.6 3h20.8A2.6 2.6 0 0 1 29 5.6v20.8'
      fill='#31AFD8'
    />
    <path
      d='M24.877 11.634c-.083 1.83-1.36 4.333-3.831 7.512-2.555 3.319-4.716 4.979-6.484 4.979-1.095 0-2.022-1.01-2.78-3.032l-1.516-5.561c-.562-2.021-1.165-3.033-1.81-3.033-.14 0-.633.296-1.475.885l-.883-1.138c.927-.815 1.842-1.63 2.741-2.445 1.237-1.068 2.166-1.63 2.785-1.687 1.462-.14 2.362.858 2.7 2.998.365 2.308.617 3.743.76 4.305.421 1.915.885 2.872 1.391 2.872.393 0 .984-.621 1.772-1.864.786-1.242 1.208-2.187 1.265-2.837.112-1.071-.31-1.609-1.265-1.609-.45 0-.914.104-1.39.308.923-3.024 2.687-4.492 5.29-4.409 1.931.057 2.842 1.309 2.73 3.756'
      fill='#FFFFFE'
    />
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
