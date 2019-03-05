// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at http://mozilla.org/MPL/2.0/

import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string
  palette: { [key: string]: string }
  brand: {
    brave: string
    braveHover: string
    braveActive: string
    rewards: string
    rewardsHover: string
    rewardsActive: string
  },
  status: {
    error: string
    failure: string
    info: string
    warn: string
    success: string
  },
  btn: {
    danger: string
    dangerHover: string
    dangerActive: string
    default: string
    defaultHover: string
    defaultActive: string
    disabled: string
  },
  breakpoint: {
    small: string
    medium: string
    large: string
  },
  spacing: string[]
  borderRadius: string[]
  shadows: {
    small: string
    default: string
    large: string
    formControl: string
    formControlFocus: string
    modalOverlayBackground: string
  },
  transitionSpeed: string[]
  fontFamily: {
    heading: string
    body: string
    code: string
  },
  fontWeight: {
    light: number
    regular: number
    bold: number
  },
  textSize: string[]
  textColor: {
    lightUltra: string
    light: string
    default: string
  }
  headingSize: string[]
  lineHeight: {
    smallUltra: number
    small: number
    default: number
  }
  borderColor: string
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
