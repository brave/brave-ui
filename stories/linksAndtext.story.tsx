/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * In this file:
 * ---------------------------------
 * Anchor component
 * BrowserText component
 * ---------------------------------
 */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import Anchor from '../components/anchor'
import BrowserText from '../components/browserText'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Links and Text', module)
  .add('Anchor', () => {
    return (
      <Anchor
        href='#'
        noStyle={boolean('Unstyled?', false)}
        text={text('Link Text', 'Some text')}
      />
    )
  })
  .add('BrowserText', () => {
    return (
      <BrowserText
        onClick={action('clicked the browserText!')}
        text={text('Text', 'Example BrowserText')}
        noSelect={boolean('Avoid Selection?', false)}
        fontSize={text('Font Size', '')}
        color={text('Color', '')}
        padding={text('Padding', '')}
        bold={boolean('Bold?', false)}
      />
    )
  })
