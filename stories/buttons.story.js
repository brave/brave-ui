/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import {storiesOf, addDecorator} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {BetterVisualizer} from './storyUtil'

// Components
import React from 'react'
import BrowserButton from '../brave-ui/src/browserButton'

// This should be the first decorator
addDecorator((story, context) =>
  withInfo('<h1>🎩 Basic Usage</h1>')(story)(context)
)

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Buttons', module).add('BrowserButton', () => {
  const label = 'Button Types'
  const options = {
    default: 'Default',
    primary: 'Primary',
    secondary: 'Secondary'
  }
  const defaultValue = 'default'
  const value = select(label, options, defaultValue)

  return (
    <BrowserButton
      as={value}
      disabled={boolean('Disabled', false)}
      label={text('Label', 'Hello Button')}
      onClick={action('clicked the standard button')}
      size={text('Size', '')}
      fontSize={text('Font Size', '')}
    />
  )
})
