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
 * @param p (any) - the component's props
 * @param large (string | null) - string that defines the large size
 * @param medium (string) - string that defines the medium size
 * @param small (string | null) - string that defines the small size
 */
export const setSize = (
  p: any,
  large: string | null,
  medium: string,
  small: string | null
) => {
  switch (p.size) {
    case 'large':
      return large
    case 'medium':
      return medium
    case 'small':
      return small
    default:
      return medium
  }
}

/**
 * Sets the style property of a component based on the weight prop
 * @param p (any) - the component's props
 * @param bold (string) - string that defines the bold weight
 * @param normal (string) - string that defines the normal weight
 * @param thin (string) - string that defines the thin weight
 */
export const setWeight = (p: any, bold: string, normal: string, thin: string) => {
  switch (p.weight) {
    case 'bold':
      return bold
    case 'normal':
      return normal
    case 'thin':
      return thin
    default:
      return normal
  }
}
