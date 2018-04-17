/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * In this file:
 * ---------------------------------
 * Grid component
 * Column component
 * ---------------------------------
 */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import { Grid, Column } from '../components/gridSystem'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Grid System', module)
  .add('Grid Demonstration', () => {
    return (
      <div>
        <h2>A 12-column based grid for rapid prototyping</h2>
        <Grid background='gray'>
          <Column background='darkgray' size={12}>
            12/12
          </Column>
          <Column background='darkgray' size={11}>
            11/12
          </Column>
          <Column background='darkgray' size={1}>
            1/12
          </Column>
          <Column background='darkgray' size={10}>
            10/12
          </Column>
          <Column background='darkgray' size={2}>
            2/12
          </Column>
          <Column background='darkgray' size={9}>
            9/12
          </Column>
          <Column background='darkgray' size={3}>
            3/12
          </Column>
          <Column background='darkgray' size={8}>
            8/12
          </Column>
          <Column background='darkgray' size={4}>
            4/12
          </Column>
          <Column background='darkgray' size={7}>
            7/12
          </Column>
          <Column background='darkgray' size={5}>
            5/12
          </Column>
          <Column background='darkgray' size={6}>
            6/12
          </Column>
          <Column background='darkgray' size={6}>
            6/12
          </Column>
        </Grid>
      </div>
    )
  })
  .add('Grid Playground', () => {
    const options = {}

    Array.from({ length: 12 }, (v, i) => i + 1).forEach(size =>
      Object.assign(options, { [size.toString()]: size })
    )

    const label1 = 'Column #1 size'
    const defaultValue1 = 3
    const value1 = select(label1, options, defaultValue1)

    const label2 = 'Column #2 size'
    const defaultValue2 = 9
    const value2 = select(label2, options, defaultValue2)

    return (
      <div>
        <h2>Playground! (see "knobs" for usage)</h2>
        <Grid
          background={text('Grid Background', 'gray')}
          width={text('Max Grid Width', '100%')}
          padding={text('Own Grid Gutter (padding)', '15px')}
          gap={text('Grid Gutter (for columns)', '15px')}>
          <Column
            background={text('Column #1 Background', 'darkgray')}
            size={value1}
            align={text('Column #1 Align (flexbox-based)', 'flex-end')}
            verticalAlign={text(
              'Column #1 Vertical Align (flexbox-based)',
              'flex-end'
            )}>
            {`${value1}/12`}
          </Column>
          <Column
            background={text('Column #2 Background', 'darkgray')}
            size={value2}
            align={text('Column #1 Align (flexbox-based)', 'flex-start')}
            verticalAlign={text(
              'Column #1 Vertical Align (flexbox-based)',
              'flex-start'
            )}>
            {`${value2}/12`}
          </Column>
        </Grid>
      </div>
    )
  })
