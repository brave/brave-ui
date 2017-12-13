/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// We need to clear buffer of the Aphrodite dep inside brave-ui package
// to avoid conflicts when you have both deps installed leading to failing tests
import {StyleSheetTestUtils as StyleSheetTestUtilsGlobal} from 'aphrodite'
import {StyleSheetTestUtils as StyleSheetTestUtilsLocal} from '../../brave-ui/node_modules/aphrodite'

const resumeStyleInjection = () => {
  // Aphrodite injects styles async immediately after render().
  // If jest test instances are created before style injections,
  // our tests will fail as `[data-aphrodite]` selector is not yet ready
  return new Promise(resolve => {
    StyleSheetTestUtilsGlobal.clearBufferAndResumeStyleInjection()
    StyleSheetTestUtilsLocal.clearBufferAndResumeStyleInjection()
    return process.nextTick(resolve)
  })
}

export {
  resumeStyleInjection
}
