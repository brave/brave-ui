// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at http://mozilla.org/MPL/2.0/

import colors from './colors'
import ITheme from './theme-interface'
import { fontStack } from './util/common'

const theme: ITheme = {
  name: 'Default Theme',
  palette: {
    ...colors
  },
  brand: {
    brave: colors.orange500,
    braveHover: colors.orange400,
    braveActive: colors.orange600,
    rewards: colors.blurple500,
    rewardsHover: colors.blurple400,
    rewardsActive: colors.blurple600
  },
  status: {
    error: colors.red500,
    failure: colors.red500,
    info: colors.blue500,
    warn: colors.yellow500,
    success: colors.green500
  },
  btn: {
    danger: colors.red500,
    dangerHover: colors.red400,
    dangerActive: colors.red600,
    default: colors.grey600,
    defaultHover: colors.grey500,
    defaultActive: colors.grey700,
    disabled: colors.grey300
  },
  breakpoint: {
    small: '544px',
    medium: '768px',
    large: '1280px'
  },
  spacing: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
    '40px',
    '48px',
    '64px',
    '80px',
    '96px',
    '112px',
    '128px'
  ],
  borderRadius: [
    '4px',
    '8px'
  ],
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    default: '0 2px 8px rgba(0, 0, 0, 0.2)',
    large: '0 4px 12px rgba(0, 0, 0, 0.2)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em',
    modalOverlayBackground: 'rgba(36,37,54,0.85)'
  },
  transitionSpeed: [
    '.2s',
    '.4s',
    '.6s'
  ],
  fontFamily: {
    heading: fontStack([
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    body: fontStack([
      'Muli',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    code: fontStack([
      'SFMono-Regular',
      'Consolas',
      'Liberation Mono',
      'Menlo',
      'Courier',
      'monospace']
    )
  },
  fontWeight: {
    light: 200,
    regular: 400,
    bold: 600
  },
  textSize: [
    '10px',
    '12px',
    '14px',
    '16px'
  ],
  headingSize: [
    '14px',
    '16px',
    '20px',
    '24px',
    '32px',
    '40px',
    '48px',
    '60px'
  ],
  textColor: {
    lightUltra: colors.blackFade50,
    light: colors.blackFade30,
    default: colors.black
  },
  lineHeight: {
    smallUltra: 1,
    small: 1.3,
    default: 1.6
  },
  borderColor: colors.grey500
}

export default theme
