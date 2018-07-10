/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean, select, text, object, number } from '@storybook/addon-knobs'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'

// Utils
import { BetterVisualizer } from '../storyUtil'

// Components
import Toggle from '../../components/rewards/toggle'
import List from '../../components/rewards/list'
import Select from '../../components/rewards/select'
import Tokens from '../../components/rewards/tokens'
import Checkbox from '../../components/rewards/checkbox'
import Tooltip from '../../components/rewards/tooltip'
import Profile from '../../components/rewards/profile'
import Amount from '../../components/rewards/amount'
import ButtonPrimary from '../../components/rewards/buttonPrimary'
import TextArea from '../../components/rewards/textarea';
import ButtonSecondary from '../../components/rewards/buttonSecondary';
import ButtonGhost from '../../components/rewards/buttonGhost';
import ButtonCta from '../../components/rewards/buttonCta';

const bart = require('../assets/img/bartBaker.jpeg')
const arrowImage = require('../assets/img/icn-arrow.svg')

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

storiesOf('Rewards/Utils', module)
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
      onClick={() => (
        store.set({ checked: !store.state.checked })
      )}
    />
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
      onChange={() => false}
      title={text('Title', 'Limit Sites to')}
    >
      <div data-value='0'>No Limit</div>
      <div data-value='10'>Pay Only Top 10</div>
      <div data-value='50'>Pay Top 50</div>
      <div data-value='100000'>Really long limit that I know of 100000</div>
    </Select>
  })
  .add('Tokens',() => {
    return <Tokens
      value={text('Tokens value', '10')}
      converted={text('Converted value', '4')}
      currency={text('Currency', 'USD')}
      isNegative={boolean('Is negative', false)}
    />
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
        <div data-key='inst'>Instagram</div>
    </Checkbox>
  }))
  .add('Profile',() => {
    return <div style={{width: '400px'}}>
      <Profile
      type={select('Type', {big: 'big', small: 'small'}, 'big')}
      title={'Bart Baker'}
      verified={boolean('Verified', false)}
      provider={select('Provider', {youtube: 'YouTube', twitter: 'Twitter', twitch: 'Twitch'}, 'youtube')}
      src={bart}
    />
    </div>
  })
  .add('Tooltip',() => {
    return <Tooltip
      position={select('Type', {left: 'left', right: 'right', top: 'top', bottom: 'bottom'}, 'bottom')}
      content={'This is tooltip!'}
    >
      <div style={{border: '1px solid red'}}>
        I have tooltip
      </div>
    </Tooltip>
  })
  .add('Amount',withState({selected: false}, (store) => {
    return <div style={{background: '#696fdc', width: '335px', padding: '50px'}}>
      <Amount
      amount={number('Amount', 5)}
      converted={number('Converted', 1.5)}
      selected={boolean('Selected', store.state.selected)}
      type={select('Type', {big: 'Big', small: 'Small'}, 'big')}
      onClick={() => (
        store.set({ selected: !store.state.selected })
      )}
    />
    </div>
  }))
  .add('Button - Primary',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: arrowImage,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonPrimary
      color={select('Color', {brand: 'brand', action: 'action'}, 'brand')}
      size={select('Size', {large: 'large', medium: 'medium', small: 'small'}, 'medium')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
  .add('Button - Secondary',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: arrowImage,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonSecondary
      color={select('Color', {brand: 'brand', action: 'action', subtle: 'subtle'}, 'brand')}
      size={select('Size', {large: 'large', medium: 'medium', small: 'small'}, 'medium')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
  .add('Button - Ghost',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: arrowImage,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonGhost
      color={select('Color', {brand: 'brand', action: 'action'}, 'brand')}
      size={select('Size', {large: 'large', medium: 'medium', small: 'small'}, 'medium')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
  .add('Button - CTA',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: arrowImage,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonCta
      color={select('Color', {brand: 'brand', action: 'action'}, 'brand')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
  .add('TextArea', withState({defaultValue: ''}, (store) => {
    return <TextArea
      defaultValue={text('Value', store.state.defaultValue)}
      title={text('Title', 'Recovery keys')}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        store.set({ defaultValue: event.target.value})
      }}
    />
  }))
