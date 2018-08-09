/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'

import * as React from 'react'

// Components
import { Heading } from '../../src/components'

storiesOf('Components/Text', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Heading', () => {
    const label = 'Level'
    const defaultValue = 1
    const options = {
      range: true,
      min: 1,
      max: 3,
      step: 1
    }
    return (
      <Heading
        level={number(label, defaultValue, options)}
        theme={{
          color: text('Color', ''),
          margin: text('Margin', '')
        }}
        text={text('Text', 'Heading on fire')}
      />
    )
  })
