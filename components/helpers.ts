/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Returns a capitalized string
 * @param str (string) - the string to capitalize
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Sets the style property of a component based on the size prop
 * @param {'medium' | 'small' | 'large'} size - the component's size props
 * @param {String} medium - string that defines the medium size
 * @param {String} small - string that defines the small size
 * @param {String} large - string that defines the large size
 */
export const setValueBasedOnSize = (
  size?: 'medium' | 'small' | 'large',
  medium?: string,
  small?: string,
  large?: string
) => {
  switch (size) {
    case 'medium':
      return medium
    case 'small':
      return small
    case 'large':
      return large
    default:
      return medium
  }
}

/**
 * Sets the user input theme if defined
 * @param {any} theme - the component's theme object
 * @param {any} prop - the theme prop to check against
 */
export const setTheme = (theme: any, prop: any) => theme && theme[prop]
