/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const theme = {
  browserButton: {
    default: {
      bg: '#fff',
      color: '#5a5a5a',
      hoverColor: '#000'
    },
    primary: {
      bg: 'linear-gradient(#ff7a1d, #ff5000)',
      gradient1: '#ff7a1d',
      gradient2: '#ff5000',
      color: '#fff',
      hoverColor: '#fff',
      borderHoverColor: '#fff'
    },
    secondary: {
      bg: 'linear-gradient(#fff, #ececec)',
      color: '#666',
      hoverColor: 'rgb(153, 153, 153)',
      borderHoverColor: '#444'
    }
  },
  switchButton: {
    checkedBg: '#ff6000',
    uncheckedBg: '#ccc',
    knob: '#fff'
  }
}

export default theme
