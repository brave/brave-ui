/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * In this file:
 * ---------------------------------
 * Select component
 * ---------------------------------
 */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import BrowserSelect from '../components/browserSelect'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Forms', module)
  .add('BrowserSelect', () => {
    return (
      <BrowserSelect
        titleName={text('Title', 'Example Title')}
        multiple={boolean('Multiple?', false)}
        autoFocus={boolean('Auto focus?', false)}
        disabled={boolean('Disabled?', false)}
      >
        <option value='cool'>Brave UI: cool</option>
        <option value='notcool'>Brave UI: not cool</option>
      </BrowserSelect>
    )
  })
