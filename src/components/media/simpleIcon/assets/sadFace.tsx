/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

module.exports = (fill: string) => {
  return (
    <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
      <g fill={fill} fillRule='evenodd'>
        <path
          d='M11.99.02C5.379.02 0 5.4 0 12.01 0 18.621 5.379 24 11.99 24c6.61 0 11.99-5.379 11.99-11.99C23.98 5.4 18.6.02 11.99.02zm0 22.684c-2.937 0-5.602-1.191-7.536-3.114a10.755 10.755 0 0 1-1.94-2.627 10.627 10.627 0 0 1-1.218-4.953c0-5.896 4.797-10.693 10.694-10.693a10.65 10.65 0 0 1 7.253 2.844c.99.914 1.806 2.012 2.395 3.24a10.627 10.627 0 0 1 1.045 4.61c0 5.896-4.797 10.693-10.693 10.693z'
        />
        <path
          d='M9.37 9.337a1.296 1.296 0 1 1-2.592 0 1.296 1.296 0 0 1 2.592 0zM17.39 9.337a1.296 1.296 0 1 1-2.591 0 1.296 1.296 0 0 1 2.592 0zM11.967 14.538c2.507 0 4.91 1.282 6.287 3.412l-1.089.703a6.211 6.211 0 0 0-5.89-2.78 6.217 6.217 0 0 0-4.46 2.78l-1.09-.703a7.526 7.526 0 0 1 5.402-3.364c.28-.032.56-.048.84-.048z'
        />
      </g>
    </svg>
  )
}
