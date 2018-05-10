/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * A selector is anything that lead the user to take a limited number of decisions.
 *
 * @see https://github.com/brave/brave-ui/blob/master/docs/spec.md#selectors
 *
 * In this file:
 * ---
 * SelectOption
 */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import SelectOption from '../components/selectOption'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Selectors', module)
  .add('SelectOption', () => {
    return (
      <SelectOption
        titleName={text('Title', 'Example Title')}
        multiple={boolean('Multiple?', false)}
        autoFocus={boolean('Auto focus?', false)}
        disabled={boolean('Disabled?', false)}
      >
        <option value='cool'>Brave UI: cool</option>
        <option value='notcool'>Brave UI: not cool</option>
      </SelectOption>
    )
  })
