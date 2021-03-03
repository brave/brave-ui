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
 * Sets the user input customStyle if defined
 * @param {any} customStyle - the component's customStyle object
 * @param {any} prop - the customStyle prop to check against
 */
export const setTheme = (customStyle: any, prop: any) => customStyle && customStyle[prop]

type Locals = {[key: string]: string}
type Replacements = {[key: string]: string | number}
let local: Locals = {}
/**
 * Initialize localization
 * @param {Locals} locals - array of translations
 */
export const initLocale = (locals: Locals) => {
  local = locals
}

/**
 * Gets the localized string
 * @param {string} key - translation identifier
 * @param {Replacements} replacements - replacements for specific translation, replacement should be defined as {{key}}
 * @returns {string} - the localized string
 */
export const getLocale = (key: string, replacements?: Replacements) => {
  if (!key || !local[key]) {
    return `MISSING: ${key}`
  }

  let returnVal = local[key]
  if (!replacements) {
    return returnVal
  }

  for (let item in replacements) {
    const reString = String.raw`({{\s*${item}\s*}})|(\[\[\s*${item}\s*\]\])`
    returnVal = returnVal.replace(new RegExp(reString, 'g'), replacements[item].toString())
  }
  return returnVal
}
