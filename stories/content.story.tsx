/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Content components contain what the user sees on the screen and are
 * related to textual positioning. They are static and unstyled elements
 * used to help define the information architecture.
 *
 * @see https://github.com/brave/brave-ui/blob/master/docs/spec.md#content
 *
 * In this file:
 * ---
 * GridSystem (Grid and Column)
 * MediaContent
 * BoxedContent
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

storiesOf('Content', module)
  .add('Grid Demonstration', () => {
    return (
      <div>
        <h2>A 12-column based grid for rapid prototyping</h2>
        <Grid theme={{backgroundColor:'gray'}}>
          <Column theme={{ backgroundColor: 'darkgray' }} size={12}>
            12/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={11}>
            11/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={1}>
            1/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={10}>
            10/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={2}>
            2/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={9}>
            9/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={3}>
            3/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={8}>
            8/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={4}>
            4/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={7}>
            7/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={5}>
            5/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={6}>
            6/12
          </Column>
          <Column theme={{ backgroundColor: 'darkgray' }} size={6}>
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
        <Grid theme={{
          backgroundColor: text('Grid Background', 'gray'),
          maxWidth: text('Max Grid Width', '100%'),
          padding: text('Own Grid Gutter (padding)', '15px'),
          gridGap: text('Grid Gutter (for columns)', '15px')
        }}>
          <Column
            size={value1}
            theme={{
              backgroundColor: text('Column #1 Background', 'darkgray'),
              justifyContent: text('Column #1 Align (flexbox-based)', 'flex-end'),
              alignItems: text(
                'Column #1 Vertical Align (flexbox-based)',
                'flex-end'
              )
            }}>
            {`${value1}/12`}
          </Column>
          <Column
            size={value2}
            theme={{
              backgroundColor: text('Column #2 Background', 'darkgray'),
              justifyContent: text('Column #1 Align (flexbox-based)', 'flex-start'),
              alignItems: text(
                'Column #1 Vertical Align (flexbox-based)',
                'flex-start'
              )
            }}>
            {`${value2}/12`}
          </Column>
        </Grid>
      </div>
    )
  })

// TODO: mediaContent
// TODO: boxedContent
