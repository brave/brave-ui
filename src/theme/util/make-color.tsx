// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at http://mozilla.org/MPL/2.0/

import { TinyColor } from '@ctrl/tinycolor'

const makeColor = function (color: any, index: number) {
  const hueStep = 0
  const saturationStep1 = 16
  const saturationStep2 = 5
  const brightnessStep1 = 5
  const brightnessStep2 = 15
  const lightColorCount = 5
  const darkColorCount = 4

  const getHue = function (hsv: any, i: any, isLight: boolean) {
    let hue
    if (hsv.h >= 60 && hsv.h <= 240) {
      hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i
    } else {
      hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i
    }
    if (hue < 0) {
      hue += 360
    } else if (hue >= 360) {
      hue -= 360
    }
    return Math.round(hue)
  }
  const getSaturation = function (hsv: any, i: any, isLight: boolean) {
    let saturation
    if (isLight) {
      saturation = Math.round(hsv.s * 100) - saturationStep1 * i
    } else if (i === darkColorCount) {
      saturation = Math.round(hsv.s * 100) + saturationStep1
    } else {
      saturation = Math.round(hsv.s * 100) + saturationStep2 * i
    }
    if (saturation > 100) {
      saturation = 100
    }
    if (isLight && i === lightColorCount && saturation > 10) {
      saturation = 10
    }
    if (saturation < 6) {
      saturation = 6
    }
    return Math.round(saturation)
  }
  const getValue = function (hsv: any, i: any, isLight: boolean) {
    if (isLight) {
      return Math.round(hsv.v * 100) + brightnessStep1 * i
    }
    return Math.round(hsv.v * 100) - brightnessStep2 * i
  }
  let isLight = index <= 6
  let hsv = new TinyColor(color).toHsv()
  let i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1
  return new TinyColor({
    h: getHue(hsv, i, isLight),
    s: getSaturation(hsv, i, isLight),
    v: getValue(hsv, i, isLight)
  }).toHexString()
}

export default makeColor
