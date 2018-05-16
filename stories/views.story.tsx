/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Views contain what the user sees on the screen and is not related to
 * textual information or textual positioning.
 *
 * @see https://github.com/brave/brave-ui/blob/master/docs/spec.md#views
 *
 * In this file:
 * ---
 * Clock
 * Page
 * DataBlock
 */

import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { BetterVisualizer } from './storyUtil'
import { action } from '@storybook/addon-actions'

// Components
import * as React from 'react'
// TBD import Clock from '../components/clock'
import Page from '../components/page'
import { DataBlock, DataItem } from '../components/dataBlock'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Views', module)
  // TBD
  // .add('Clock', () => {
  //   return (
  //     <Clock />
  //   )
  // })
  .add('Page', () => {
    return (
      <Page
        title={text('Page Title', 'New About Page')}
        label={text('Page Title Label', 'Beta')}
      >
        {text('Content', 'Some illustrative text')}
      </Page>
    )
  })
  .add('DataBlock', () => {
    const sizeOptions = { 'small': 'Small', 'medium': 'Medium' }
    const sizeDefaultValue = 'medium'
    const sizeValue = select('Size', sizeOptions, sizeDefaultValue)
    return (
      <DataBlock list={boolean('show as list?', false)}>
        <DataItem
          size={sizeValue}
          color={text('Color', 'orange')}
          counter={text('Counter', '123123')}
          text={text('Text', 'Some Text')}
          description={text('Description', 'Some Description')}
          onClick={action('clicked the DataBlock!')}
          noSelect={boolean('Disallow user select?', false)}
        />
        <DataItem
          size={sizeValue}
          color={text('Color', 'orange')}
          counter={text('Counter', '123123')}
          text={text('Text', 'Some Text')}
          description={text('Description', 'Some Description')}
          onClick={action('clicked the DataBlock!')}
          noSelect={boolean('Disallow user select?', false)}
        />
      </DataBlock>
    )
  })
