/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import * as React from 'react'
import { withState } from '@dump247/storybook-state';

// Components
import Checkbox from '../components/rewards/checkbox';
import { BetterVisualizer } from './storyUtil';

addDecorator(withKnobs)

addDecorator(BetterVisualizer)


storiesOf('Rewards', module)
  .add('Checkbox', withState({ checked: false }, (store) => {
    const sizeOptions = { 'small': 'small', 'medium': 'medium', 'large': 'large' }
    const size = select('Weight', sizeOptions, 'medium')

    return <Checkbox
      size={size}
      disabled={boolean('Disabled?', false)}
      checked={boolean('Checked?', store.state.checked)}
      onClick={() => (
        store.set({ checked: !store.state.checked })
      )}
    />
  }))
