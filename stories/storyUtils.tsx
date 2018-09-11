/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

const fullPageStoryStyles: object = {
  width: '-webkit-fill-available',
  height: '-webkit-fill-available'
}

export const FullPageStory = (storyFn: any) =>
  <div style={fullPageStoryStyles}>{storyFn()}</div>
