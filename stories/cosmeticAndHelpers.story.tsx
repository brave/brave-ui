/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * In this file:
 * ---------------------------------
 * Separator component
 * ---------------------------------
 */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import Separator from '../components/separator'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Cosmetics and Helpers', module)
  .add('Separator', () => {
    return (
      <Separator noMargin={boolean('no margin?', false)} />
    )
  })
