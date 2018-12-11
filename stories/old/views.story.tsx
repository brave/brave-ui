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

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'
import { action } from '@storybook/addon-actions'

// Components
import * as React from 'react'
// TBD import Clock from '../components/clock'
import Page from '../../src/old/page'
import { DataBlock, DataItem } from '../../src/old/dataBlock'
import Clock from '../../src/old/clock'

storiesOf('Old/Views', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
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
    const sizeValue = select('Size', { 'small': 'Small', 'medium': 'Medium' }, 'medium')
    const userSelectValue = select('Disallow user select?', { 'auto': 'allow', 'none': 'Disallow' }, 'auto')

    return (
      <DataBlock asList={boolean('show as list?', false)}>
        <DataItem
          size={sizeValue}
          customStyle={{
            counterColor: text('Counter Color', 'orange'),
            descriptionColor: text('Description Color', 'black'),
            userSelect: userSelectValue
          }}
          counter={text('Counter', '123123')}
          text={text('Text', 'Some Text')}
          description={text('Description', 'Some Description')}
          onClick={action('clicked the DataBlock!')}
        />
        <DataItem
          size={sizeValue}
          customStyle={{
            counterColor: text('Counter Color', 'orange'),
            descriptionColor: text('Description Color', 'black'),
            userSelect: userSelectValue
          }}
          counter={text('Counter', '123123')}
          text={text('Text', 'Some Text')}
          description={text('Description', 'Some Description')}
          onClick={action('clicked the DataBlock!')}
        />
      </DataBlock>
    )
  })
  .add('Clock', () => {
    return (
      <Clock />
    )
  })
