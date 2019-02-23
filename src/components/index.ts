/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export { default as Button } from './button'
export { default as Checkbox } from './formControl/checkbox'
export { default as ControlWrapper } from './formControl/controlWrapper'
export { default as Input } from './formControl/input'
export { default as Modal } from './modal'
export { default as AlertBox } from './alertBox'
export { default as Radio } from './formControl/radio'
export { default as Select } from './formControl/select'
export { default as Table } from './table'
export { default as Tabs } from './tabs'
export { default as Card } from './card'
export { default as TextArea } from './formControl/textarea'
export { default as TextAreaClipboard } from './formControl/textareaClipboard'
export { default as Toggle } from './formControl/toggle'
export { Grid, Column } from './grid'
export { default as Heading } from './text/heading'

// This module is included to verify that tree shaking is working by a client.
// It is important that clients do not include modules from this library that
// will not be used by the client. Tree shaking can be tested by looking in
// a bundle's output for the present of the 'tree-shake-evidence' module.
export { default as TreeShakeTest } from './tree-shake-evidence'
