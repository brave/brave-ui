/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

const featureStyles: object = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '-webkit-fill-available',
  height: '-webkit-fill-available'
}

const pageStyles: object = {
  width: '-webkit-fill-available',
  height: '-webkit-fill-available'
}

export const BetterVisualizer = (storyFn: any) => <div style={featureStyles}>{storyFn()}</div>

export const BetterPageVisualizer = (storyFn: any) => <div style={pageStyles}>{storyFn()}</div>
