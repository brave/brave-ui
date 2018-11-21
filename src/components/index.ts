/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export { default as Button } from './buttonsIndicators/button'
export { default as Checkbox } from './formControls/checkbox'
export { default as ControlWrapper } from './formControls/controlWrapper'
export { default as Input } from './formControls/input'
export { default as Modal } from './popupModals/modal'
export { default as AlertBox } from './popupModals/alertBox'
export { default as Radio } from './formControls/radio'
export { default as Select } from './formControls/select'
export { default as Table } from './dataTables/table'
export { default as Tabs } from './layout/tabs'
export { default as Card } from './layout/card'
export { default as TextArea } from './formControls/textarea'
export { default as TextAreaClipboard } from './formControls/textareaClipboard'
export { default as Toggle } from './formControls/toggle'
export { Grid, Column } from './layout/gridList'
export { default as Heading } from './text/heading'

// This module is included to verify that tree shaking is working by a client.
// It is important that clients do not include modules from this library that
// will not be used by the client. Tree shaking can be tested by looking in
// a bundle's output for the present of the 'tree-shake-evidence' module.
export { default as TreeShakeTest } from './tree-shake-evidence'
