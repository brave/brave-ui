/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'

// Utils
import { BetterVisualizer } from './storyUtil'

// Components
import Checkbox from '../components/rewards/checkbox'
import Box from '../components/rewards/box'
import List from '../components/rewards/list';
import Select from '../components/rewards/select';

// Images
const settingsIcon = require('./assets/img/rewards_settings.svg')

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
  .add('Box', withState({ checked: false, toggle: true }, (store) => {
    return <div style={{width: '595px'}}>
      <Box
        title={text('Title', 'Brave ads')}
        toggle={boolean('Show toggle', store.state.toggle)}
        checked={boolean('Toggle checked', store.state.checked)}
        description={
          text('Description', `Earn tokens by seeing ads on Brave. Ads are matched
          from machine learning and the data temporarily present in your browser without tracking your
          information or sending it outside.`)
        }
        settingsIcon={settingsIcon}
        toggleClick={() => (
          store.set({ checked: !store.state.checked })
        )}
        settingsChild={<div>Settings content</div>}
      >
        <div>Some content</div>
      </Box>
    </div>
  }))
  .add('List',() => {
    return <div style={{width: '595px'}}>
      <List
        title={text('Title', 'Earnings this month')}
      >
        Some content
      </List>
    </div>
  })
  .add('Select',() => {
    return <Select
      title={text('Title', 'Limit Sites to')}
      onChange={() => false}
    >
      <div data-value='0'>No Limit</div>
      <div data-value='10'>Pay Only Top 10</div>
      <div data-value='50'>Pay Top 50</div>
    </Select>
  })
