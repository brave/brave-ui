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
 * @param large (string) - string that defines the large size
 * @param medium (string) - string that defines the medium size
 * @param small (string) - string that defines the small size
 */
export const setSize = (p: any, large: string, medium: string, small: string) => {
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
