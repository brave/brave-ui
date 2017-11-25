/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import {StyleSheet, css} from 'aphrodite/no-important'

// Create a 12-based column grid system
const gridTemplate = 12

/**
 * Creates a css-grid based column wrapper (grid)
 * @param {testId} testId - the element's name for testing purposes
 * @param {String} padding - own grid padding
 * @param {String} gap - distance between each column children
 * @param {String} width - the max grid width
 * @param {node} children - any node you want to pass as the grid children
 */
const Grid = ({ testId, padding, gap, width, background, children }) => {
  const customStyle = {}

  if (padding != null) {
    customStyle['--gridPadding'] = padding
  }

  if (gap != null) {
    customStyle['--gridGap'] = gap
  }

  if (width != null) {
    customStyle['--gridWidth'] = width
  }

  if (background != null) {
    customStyle['--gridBackground'] = background
  }

  return (
    <div
      data-test-id={testId || 'grid'}
      className={css(styles.grid)}
      style={customStyle}>
      {children}
    </div>
  )
}

const gridWrapper = {
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridTemplate}, 1fr)`,
    gridGap: 'var(--gridGap, 15px)',
    padding: 'var(--gridPadding, 0)',
    maxWidth: 'var(--gridWidth)',
    backgroundColor: 'var(--gridBackground)'
  }
}

/**
 *
 * @param {testId} testId - the element's name for testing purposes
 * @param {String|Number} size - the column size ranging between 1 and 12
 * @param {String} align - any flexbox accepted value for justify-content
 * @param {String} verticalAlign - any flexbox accepted value for alignItems
 * @param {String} background - any CSS compilant color for the background
 * @param {node} children - any node you want to pass as the grid children
 */
const Column = ({ testId, size = 12, align, verticalAlign, background, children }) => {
  const customStyle = {}

  if (align != null) {
    customStyle['--columnAlign'] = align
  }

  if (verticalAlign != null) {
    customStyle['--columnVerticalAlign'] = verticalAlign
  }

  if (background != null) {
    customStyle['--columnBackground'] = background
  }

  return (
    <div
      data-test-id={testId || 'column'}
      className={css(styles[`column${size}`])}
      style={customStyle}>
      {children}
    </div>
  )
}

// Iterate over gridTemplate and add a `columnN` classname
// i.e. {column1, ..., columnN}. Being N the max gridTemplate number
let columnSystem = {}
Array.from({length: gridTemplate}, (v, i) => i + 1).forEach((size) => {
  Object.assign(columnSystem, {
    [`column${size}`]: {
      gridColumn: `span ${size}`,
      display: 'flex',
      justifyContent: 'var(--columnAlign)',
      alignItems: 'var(--columnVerticalAlign)',
      backgroundColor: 'var(--columnBackground)'
    }
  })
})

// merge both grid and column styles obj to be used in Aphrodite
const gridSystem = Object.assign(gridWrapper, columnSystem)
const styles = StyleSheet.create(gridSystem)

export { gridTemplate, Grid, Column }
