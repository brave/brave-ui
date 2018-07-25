/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

export interface SimpleIconTheme {
  color?: string
  hoverColor?: string
}

export interface SimpleIconProps {
  type?: string
  theme?: SimpleIconTheme
}

export default class SimpleIcon extends React.PureComponent<SimpleIconProps, {}> {

  get defaultTheme (): SimpleIconTheme {
    return {
      color: '#000',
      hoverColor: '#000'
    }
  }

  fetchSrc (type?: string, fill?: string) {
    if (typeof type === 'undefined') {
      return (
        <svg/>
      )
    }
    return require(`./assets/${type}`)(fill)
  }

  render () {
    const { type, theme } = this.props
    const iconTheme = theme || this.defaultTheme
    const svgMarkup = this.fetchSrc(type, iconTheme.color)

    return (
      <span>
        {svgMarkup}
      </span>
    )
  }
}
