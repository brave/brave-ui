/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean, select, text, object } from '@storybook/addon-knobs'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'

// Utils
import { BetterVisualizer } from '../storyUtil'

// Components
import { Toggle, Select, Checkbox, TextArea } from '../../src/components'

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

storiesOf('Components/Form controls', module)
  .add('Toggle', withState({ checked: false }, (store) => {
    const sizeOptions = { 'small': 'small', 'medium': 'medium', 'large': 'large' }
    const size = select('Weight', sizeOptions, 'medium')

    return <Toggle
      size={size}
      disabled={boolean('Disabled?', false)}
      checked={boolean('Checked?', store.state.checked)}
      theme={{
        offColor: text('Off color', '#CDD1D5'),
        onColor: text('On color', '#6D73D2')
      }}
      onToggle={() => (
        store.set({ checked: !store.state.checked })
      )}
    />
  }))
  .add('Select',() => {
    return <Select
      onChange={() => false}
      title={text('Title', 'Limit Sites to')}
    >
      <div data-value='0'>No Limit</div>
      <div data-value='10'>Pay Only Top 10</div>
      <div data-value='50'>Pay Top 50</div>
      <div data-value='100000'>Really long limit that I know of 100000</div>
    </Select>
  })
  .add('Checkbox', withState({'yt': true, 'tw': false, 'inst': false}, (store) => {
    return <Checkbox
        title={text('Title', 'Enable ability to give tips on ‘Like’ posts')}
        value={object('Checkbox values', store.state)}
        multiple={boolean('Is multiple?', false)}
        onChange={(kye, selected, child, all) => (
          store.set(all)
        )}
        theme={{maxWidth: '315px'}}
      >
        <div data-key='yt'>YouTube</div>
        <div data-key='tw'>Twitter</div>
        <div data-key='inst'>Instagram Instagram Instagram Instagram Instagram</div>
    </Checkbox>
  }))
  .add('TextArea', withState({defaultValue: ''}, (store) => {
    return <TextArea
      defaultValue={text('Value', store.state.defaultValue)}
      title={text('Title', 'Recovery keys')}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        store.set({ defaultValue: event.target.value})
      }}
    />
  }))
