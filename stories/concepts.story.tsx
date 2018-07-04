/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { withState } from '@dump247/storybook-state';
import { storiesOf, addDecorator } from '@storybook/react'
import { boolean, number, object, text, withKnobs } from '@storybook/addon-knobs'

// Components
import PrivateTab from './concepts/pages/privateTab/index'
import BraveShields from './concepts/features/braveShields';
import Settings from './concepts/pages/RewardsSettings';
import SiteBanner from '../components/rewards/siteBanner';

addDecorator(withKnobs)

const siteBgImage = require('./assets/img/bg_siteBanner.jpg')
const siteBgLogo = require('./assets/img/ddgo_siteBanner.svg')
const siteScreen = require('./assets/img/ddgo_site.png')

const donationAmount = [
  {tokens: 1, converted: 0.3, selected: false},
  {tokens: 5, converted: 1.5, selected: false},
  {tokens: 10, converted: 3, selected: false}
  ]

storiesOf('Concepts/Pages', module)
  .add('Private Tab', () => <PrivateTab />)
  .add('Rewards Settings', () => <Settings />)
storiesOf('Concepts/Features', module)
  .add('Brave Shields Panel', () => <BraveShields />)
storiesOf('Concepts/Features', module)
  .add('Rewards Site Banner', withState({donationAmount}, (store) => {
    return <div style={{background: `url(${siteScreen}) no-repeat top center / cover`, width: '100%', height: '100vh'}}>
      <SiteBanner
        domain={text('Domain', 'duckduckgo.com')}
        title={text('Title', '')}
        currentDonation={number('Current recurring donation', 0)}
        balance={number('Balance ', 5)}
        bgImage={boolean('Show bg image', false) ? siteBgImage : null}
        logo={boolean('Show logo', false) ? siteBgLogo : null}
        donationAmounts={object('Donations', store.state.donationAmount)}
        onDonate={() => {}}
        onAmountSelection={(tokens: number) => {
          const list = store.state.donationAmount.map((item) => {
            item.selected = item.tokens === tokens
            return item
          })
          store.set({donationAmount: list})
        }}
        social={[
          {
            type: 'twitter',
            name: '@DuckDuckGo',
            handler: 'DuckDuckGo'
          },
          {
            type: 'youtube',
            name: 'duckduckgo',
            handler: 'UCm_TyecHNHucwF_p4XpeFkQ'
          },
          {
            type: 'twitch',
            name: 'duckDuckGo',
            handler: 'duckduckgo'
          }
        ]}
        onClose={() => {}}
      />
    </div>
  }))
