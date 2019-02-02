/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import GenerateComponentForGraphic from '../template'

// Direct access to SVG
export const Graphic = (
  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 32 32'>
    <defs>
      <path
        id='gift'
        d='M13 25.5C6.09644 25.5.5 19.90356.5 13S6.09644.5 13 .5 25.5 6.09644 25.5 13 19.90356 25.5 13 25.5zm0-1c6.35127 0 11.5-5.14873 11.5-11.5S19.35127 1.5 13 1.5 1.5 6.64873 1.5 13 6.64873 24.5 13 24.5zm-4.00018-15C8.68597 9.08217 8.5 8.5628 8.5 8c0-1.38071 1.11929-2.5 2.5-2.5.8178 0 1.54389.39267 2 .99976.45611-.60709 1.1822-.99976 2-.99976 1.38071 0 2.5 1.11929 2.5 2.5 0 .5628-.18597 1.08217-.49982 1.5H19c.27614 0 .5.22386.5.5v3c0 .27614-.22386.5-.5.5h-.5V19c0 .27614-.22386.5-.5.5H8c-.27614 0-.5-.22386-.5-.5v-5.5H7c-.27614 0-.5-.22386-.5-.5v-3c0-.27614.22386-.5.5-.5h1.99982zM11 9.5h1.5V8c0-.82843-.67157-1.5-1.5-1.5S9.5 7.17157 9.5 8s.67157 1.5 1.5 1.5zm2.5 0H15c.82843 0 1.5-.67157 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.67157-1.5 1.5v1.5zm0 1v2h5v-2h-5zm-1 0h-5v2h5v-2zm0 3h-4v5h4v-5zm1 0v5h4v-5h-4z'
      />
    </defs>
    <use transform='translate(3 3)' xlinkHref='#gift'/>
  </svg>
)

// Styled Component for SVG
export default GenerateComponentForGraphic(Graphic)
