/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * In this file:
 * ---------------------------------
 * ContentToggle component
 * ---------------------------------
 */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { BetterVisualizer } from './storyUtil'
import { withState } from '@dump247/storybook-state'

// Components
import * as React from 'react'
import ContentToggle from '../components/contentToggle'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Other Components', module)
  .add('Content Toggle', withState({ open: true }, (store) => {
    return (
      <ContentToggle
        {...store.state}
        withSeparator={boolean('with separator?', true)}
        open={boolean('Open?', store.state.open)}
        summary={text('Summary text', 'Some text here')}
        onClick={(open) => (
          store.set({ open: !store.state.open })
        )}>
        <h1>Some text inside!</h1>
      </ContentToggle>
    )
  }))
