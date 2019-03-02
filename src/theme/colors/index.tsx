// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at http://mozilla.org/MPL/2.0/

import makeColor from '../util/make-color'
import tinyColor from '@ctrl/tinycolor'

const baseColors = {
  black: '#1E2029',
  blue: '#339af0',
  blurple: '#4C54D2',
  cyan: '#22B8CF',
  green: '#51cf66',
  grey: '#AEB1C2',
  magenta: '#CA3BB2',
  orange: '#FB542B',
  purple: '#845ef7',
  red: '#E32444',
  teal: '#20c997',
  yellow: '#FFD43B'
}

const white = '#FFFFFF'
const black = baseColors.black

/**
 * This palette is the only hand selected palette
 * due to it not behaving well using the scale
 * because of the absence of any hue for the
 * makeColor function
 */

const scaleNeutral = {
  neutral000: '#f8f9fa',
  neutral100: '#f1f3f5',
  neutral200: '#e9ecef',
  neutral300: '#dee2e6',
  neutral400: '#ced4da',
  neutral500: '#adb5bd',
  neutral600: '#868e96',
  neutral700: '#495057',
  neutral800: '#343a40',
  neutral900: '#212529'
}

const scaleGrey = {
  grey000: makeColor(baseColors.grey, 1),
  grey100: makeColor(baseColors.grey, 2),
  grey200: makeColor(baseColors.grey, 3),
  grey300: makeColor(baseColors.grey, 4),
  grey400: makeColor(baseColors.grey, 5),
  grey500: baseColors.grey,
  grey600: makeColor(baseColors.grey, 7),
  grey700: makeColor(baseColors.grey, 8),
  grey800: makeColor(baseColors.grey, 9),
  grey900: makeColor(baseColors.grey, 10)
}

const scaleCyan = {
  cyan000: makeColor(baseColors.cyan, 1),
  cyan100: makeColor(baseColors.cyan, 2),
  cyan200: makeColor(baseColors.cyan, 3),
  cyan300: makeColor(baseColors.cyan, 4),
  cyan400: makeColor(baseColors.cyan, 5),
  cyan500: baseColors.cyan,
  cyan600: makeColor(baseColors.cyan, 7),
  cyan700: makeColor(baseColors.cyan, 8),
  cyan800: makeColor(baseColors.cyan, 9),
  cyan900: makeColor(baseColors.cyan, 10)
}

const scaleOrange = {
  orange000: makeColor(baseColors.orange, 1),
  orange100: makeColor(baseColors.orange, 2),
  orange200: makeColor(baseColors.orange, 3),
  orange300: makeColor(baseColors.orange, 4),
  orange400: makeColor(baseColors.orange, 5),
  orange500: baseColors.orange,
  orange600: makeColor(baseColors.orange, 7),
  orange700: makeColor(baseColors.orange, 8),
  orange800: makeColor(baseColors.orange, 9),
  orange900: makeColor(baseColors.orange, 10)
}

const scaleBlurple = {
  blurple000: makeColor(baseColors.blurple, 1),
  blurple100: makeColor(baseColors.blurple, 2),
  blurple200: makeColor(baseColors.blurple, 3),
  blurple300: makeColor(baseColors.blurple, 4),
  blurple400: makeColor(baseColors.blurple, 5),
  blurple500: baseColors.blurple,
  blurple600: makeColor(baseColors.blurple, 7),
  blurple700: makeColor(baseColors.blurple, 8),
  blurple800: makeColor(baseColors.blurple, 9),
  blurple900: makeColor(baseColors.blurple, 10)
}

const scaleBlue = {
  blue000: makeColor(baseColors.blue, 1),
  blue100: makeColor(baseColors.blue, 2),
  blue200: makeColor(baseColors.blue, 3),
  blue300: makeColor(baseColors.blue, 4),
  blue400: makeColor(baseColors.blue, 5),
  blue500: baseColors.blue,
  blue600: makeColor(baseColors.blue, 7),
  blue700: makeColor(baseColors.blue, 8),
  blue800: makeColor(baseColors.blue, 9),
  blue900: makeColor(baseColors.blue, 10)
}

const scaleYellow = {
  yellow000: makeColor(baseColors.yellow, 1),
  yellow100: makeColor(baseColors.yellow, 2),
  yellow200: makeColor(baseColors.yellow, 3),
  yellow300: makeColor(baseColors.yellow, 4),
  yellow400: makeColor(baseColors.yellow, 5),
  yellow500: baseColors.yellow,
  yellow600: makeColor(baseColors.yellow, 7),
  yellow700: makeColor(baseColors.yellow, 8),
  yellow800: makeColor(baseColors.yellow, 9),
  yellow900: makeColor(baseColors.yellow, 10)
}

const scaleGreen = {
  green000: makeColor(baseColors.green, 1),
  green100: makeColor(baseColors.green, 2),
  green200: makeColor(baseColors.green, 3),
  green300: makeColor(baseColors.green, 4),
  green400: makeColor(baseColors.green, 5),
  green500: baseColors.green,
  green600: makeColor(baseColors.green, 7),
  green700: makeColor(baseColors.green, 8),
  green800: makeColor(baseColors.green, 9),
  green900: makeColor(baseColors.green, 10)
}

const scaleRed = {
  red000: makeColor(baseColors.red, 1),
  red100: makeColor(baseColors.red, 2),
  red200: makeColor(baseColors.red, 3),
  red300: makeColor(baseColors.red, 4),
  red400: makeColor(baseColors.red, 5),
  red500: baseColors.red,
  red600: makeColor(baseColors.red, 7),
  red700: makeColor(baseColors.red, 8),
  red800: makeColor(baseColors.red, 9),
  red900: makeColor(baseColors.red, 10)
}

const scalePurple = {
  purple000: makeColor(baseColors.purple, 1),
  purple100: makeColor(baseColors.purple, 2),
  purple200: makeColor(baseColors.purple, 3),
  purple300: makeColor(baseColors.purple, 4),
  purple400: makeColor(baseColors.purple, 5),
  purple500: baseColors.purple,
  purple600: makeColor(baseColors.purple, 7),
  purple700: makeColor(baseColors.purple, 8),
  purple800: makeColor(baseColors.purple, 9),
  purple900: makeColor(baseColors.purple, 10)
}

const scaleTeal = {
  teal000: makeColor(baseColors.teal, 1),
  teal100: makeColor(baseColors.teal, 2),
  teal200: makeColor(baseColors.teal, 3),
  teal300: makeColor(baseColors.teal, 4),
  teal400: makeColor(baseColors.teal, 5),
  teal500: baseColors.teal,
  teal600: makeColor(baseColors.teal, 7),
  teal700: makeColor(baseColors.teal, 8),
  teal800: makeColor(baseColors.teal, 9),
  teal900: makeColor(baseColors.teal, 10)
}

const scaleMagenta = {
  magenta000: makeColor(baseColors.magenta, 1),
  magenta100: makeColor(baseColors.magenta, 2),
  magenta200: makeColor(baseColors.magenta, 3),
  magenta300: makeColor(baseColors.magenta, 4),
  magenta400: makeColor(baseColors.magenta, 5),
  magenta500: baseColors.magenta,
  magenta600: makeColor(baseColors.magenta, 7),
  magenta700: makeColor(baseColors.magenta, 8),
  magenta800: makeColor(baseColors.magenta, 9),
  magenta900: makeColor(baseColors.magenta, 10)
}

const fades = {
  blackFade15: tinyColor(black).setAlpha(.85).toHslString(),
  blackFade30: tinyColor(black).setAlpha(.70).toHslString(),
  blackFade50: tinyColor(black).setAlpha(.50).toHslString(),
  blackFade70: tinyColor(black).setAlpha(.30).toHslString(),
  blackFade85: tinyColor(black).setAlpha(.15).toHslString(),
  whiteFade85: tinyColor(white).setAlpha(.15).toHslString(),
  whiteFade70: tinyColor(white).setAlpha(.30).toHslString(),
  whiteFade50: tinyColor(white).setAlpha(.50).toHslString(),
  whiteFade30: tinyColor(white).setAlpha(.70).toHslString(),
  whiteFade15: tinyColor(white).setAlpha(.85).toHslString()
}

export default {
  ...scaleBlue,
  ...scaleBlurple,
  ...scaleCyan,
  ...scaleGreen,
  ...scaleGrey,
  ...scaleMagenta,
  ...scaleNeutral,
  ...scaleOrange,
  ...scalePurple,
  ...scaleRed,
  ...scaleTeal,
  ...scaleYellow,
  ...fades,
  white,
  black
}
