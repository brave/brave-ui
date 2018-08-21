/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Fields are components that change state based on the user's text input.
 * Labels are descriptive texts for other components (not necessarily fields).
 *
 * @see https://github.com/brave/brave-ui/blob/master/docs/spec.md#fields-and-labels
 *
 * In this file:
 * ---
 * TextLabel
 */
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'
import { action } from '@storybook/addon-actions'

// Components
import * as React from 'react'
import TextLabel from '../../src/old/textLabel/index'

storiesOf('Old/Fields and Labels', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('TextLabel', () => {
    const weightOptions = { 'bold': 'Bold', 'normal': 'Normal', 'thin': 'Thin' }
    const weightDefaultValue = 'normal'
    const weightValue = select('Weight', weightOptions, weightDefaultValue)
    return (
      <TextLabel
        onClick={action('clicked the textLabel!')}
        text={text('Text', 'Example TextLabel')}
        customStyle={{
          fontSize: text('Font size', '13px'),
          color: text('Color', '#000000'),
          padding: text('Padding', '0px'),
          fontWeight: weightValue
        }}
      />
    )
  })
