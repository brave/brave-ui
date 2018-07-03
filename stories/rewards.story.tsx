/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean, select, text, object, number } from '@storybook/addon-knobs'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'

// Utils
import { BetterVisualizer } from './storyUtil'

// Components
import Toggle from '../components/rewards/toggle'
import Box from '../components/rewards/box'
import List from '../components/rewards/list';
import Select from '../components/rewards/select';
import Tokens from '../components/rewards/tokens';
import Checkbox from '../components/rewards/checkbox';
import DisabledContent from '../components/rewards/disabledContent';
import MainToggle from '../components/rewards/mainToggle';
import Alert from '../components/rewards/alert';
import Panel from '../components/rewards/panel';
import Tooltip from '../components/rewards/tooltip';
import Table, { Cell } from '../components/rewards/table';
import Profile from '../components/rewards/profile';
import ContributeTable, { DetailCell as ContributionDetailCell } from '../components/rewards/contributeTable';
import DonationTable, { DetailCell as DonationDetailCell } from '../components/rewards/donationTable';
import Amount from '../components/rewards/amount';

const donate = require('./assets/img/rewards_donate.svg')
const wallet = require('./assets/img/rewards_wallet.svg')
const activity = require('./assets/img/rewards_activity.svg')
const funds = require('./assets/img/rewards_funds.svg')
const gear = require('./assets/img/rewards_gear.svg')
const bart = require('./assets/img/bartBaker.jpeg')
const ddgo = require('./assets/img/ddgo.jpg')
const wiki = require('./assets/img/wiki.jpg')
const buzz = require('./assets/img/buzz.jpg')
const guardian = require('./assets/img/guardian.jpg')
const eich = require('./assets/img/eich.jpg')

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

storiesOf('Rewards/Content', module)
  .add('Box', withState({ checked: false, toggle: true }, (store) => {
    return <div style={{width: '595px'}}>
      <Box
        title={text('Title', 'Brave ads')}
        theme={{titleColor: '#9752cb'}}
        toggle={boolean('Show toggle', store.state.toggle)}
        checked={boolean('Toggle checked', store.state.checked)}
        description={
          text('Description', `Earn tokens by seeing ads on Brave. Ads are matched
          from machine learning and the data temporarily present in your browser without tracking your
          information or sending it outside.`)
        }
        onToggle={() => (
          store.set({ checked: !store.state.checked })
        )}
        settingsChild={<div>Settings content</div>}
      >
        <div>Some content</div>
      </Box>
    </div>
  }))
  .add('Disabled content',() => {
    return <DisabledContent
      image={donate}
      theme={{color: '#AC9CCF', boldColor: '#696fdc'}}
    >
      • Donate on the spot as you find gems. <br/>
      • <b>Enable Tips </b> on Twitter, YouTube, and more, to give tips to posts you ‘Like’.
    </DisabledContent>
  })
  .add('Alert',() => {
    return <Alert
      type={select('Type', {error: 'error', success: 'success'}, 'success')}
      onClose={() => {}}
    >
      <b>Funds received!</b> 25 tokens are added to your wallet successfully.
    </Alert>
  })
  .add('Panel',() => {
    return <Panel
      title={text('Panel title', 'Your Wallet')}
      showTm={boolean('Show tm', true)}
      balanceTitle={text('Balance title', 'balance')}
      tokens={number('Tokens', 25)}
      actions={[
        {
          name: 'Add funds',
          action: () => {},
          icon: wallet
        },
        {
          name: 'Withdraw Funds',
          action: () => {},
          icon: funds
        },
        {
          name: 'Wallet Activity',
          action: () => {},
          icon: activity
        },
        {
          name: 'Backup & Restore',
          action: () => {},
          icon: gear
        }
      ]}
      showCopy={boolean('Show uphold', false)}
    >
     Some content
    </Panel>
  })
  .add('Main toggle', withState({ checked: false }, (store) => {
    return <MainToggle
      enabled={boolean('Enable', store.state.checked)}
      onToggle={() => (
        store.set({ checked: !store.state.checked })
      )}
    />
  }))

storiesOf('Rewards/Utils', module)
  .add('Toggle', withState({ checked: false }, (store) => {
    const sizeOptions = { 'small': 'small', 'medium': 'medium', 'large': 'large' }
    const size = select('Weight', sizeOptions, 'medium')

    return <Toggle
      size={size}
      disabled={boolean('Disabled?', false)}
      checked={boolean('Checked?', store.state.checked)}
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
      title={text('Title', 'Limit Sites to')}
      onChange={() => false}
    >
      <div data-value='0'>No Limit</div>
      <div data-value='10'>Pay Only Top 10</div>
      <div data-value='50'>Pay Top 50</div>
    </Select>
  })
  .add('Tokens',() => {
    return <Tokens
      value={text('Tokens value', '10')}
      converted={text('Converted value', '4')}
      currency={text('Currency', 'USD')}
    />
  })
  .add('Checkbox', withState({'yt': true, 'tw': false, 'inst': false}, (store) => {
    return <div style={{width: '310px'}}>
      <Checkbox
      value={object('Checkbox values', store.state)}
      multiple={boolean('Is multiple?', false)}
      title={text('Title', 'Enable ability to give tips on ‘Like’ posts')}
      onChange={(child, selected, all) => (
        store.set(all)
      )}
    >
      <div data-key='yt'>YouTube</div>
      <div data-key='tw'>Twitter</div>
      <div data-key='inst'>Instagram</div>
    </Checkbox>
    </div>
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
    return <div style={{background: '#696fdc', width: '315px', padding: '50px'}}>
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

storiesOf('Rewards/Tables', module)
  .add('Base',() => {
    const rowTheme = {
      'text-align': 'right',
      'padding-left': '9px'
    }

    const rows: Cell[][] = [
      [
        {
          content: 'Baker'
        },
        {
          content: '40%',
          theme: rowTheme
        },
        {
          content: '4',
          theme: rowTheme
        }
      ],
      [
        {
          content: 'duckduckgo.com'
        },
        {
          content: '20%',
          theme: rowTheme
        },
        {
          content: '2',
          theme: rowTheme
        }
      ]
    ]

    const header: Cell[] = [
      {
        content: 'Site visited',
        theme: {
          color: '#9f22a1'
        }
      },
      {
        content: 'Attentions',
        theme: {
          'text-align': 'right',
          color: '#9f22a1'
        }
      },
      {
        content: 'Tokens',
        theme: {
          'text-align': 'right',
          color: '#9f22a1'
        }
      }
    ]

    return <div style={{width: '595px'}}>
      <Table
        header={object('Header', header)}
        rows={object('Rows', rows)}
      >
        404: Publishers not found :)
      </Table>
    </div>
  })
  .add('Contribution',() => {
    const header: string[] = [
      'Site visited',
      'Attentions',
      'Tokens'
    ]

    const rows: ContributionDetailCell[][] = [
      [
        {
          profile: {
            name: 'Bart Baker',
            verified: true,
            provider: 'youtube',
            src: bart
          }
        },
        {
          text: '40%'
        },
        {
          text: '4',
          onClick: () => {}
        }
      ],
      [
        {
          profile: {
            name: 'duckduckgo.com',
            verified: true,
            src: ddgo
          }
        },
        {
          text: '20%'
        },
        {
          text: '2',
          onClick: () => {}
        }
      ],
      [
        {
          profile: {
            name: 'buzzfeed.com',
            verified: false,
            src: buzz
          }
        },
        {
          text: '10%'
        },
        {
          text: '1',
          onClick: () => {}
        }
      ],
      [
        {
          profile: {
            name: 'theguardian.com',
            verified: true,
            src: guardian
          }
        },
        {
          text: '5%'
        },
        {
          text: '0.5',
          onClick: () => {}
        }
      ],
      [
        {
          profile: {
            name: 'wikipedia.org',
            verified: false,
            src: wiki
          }
        },
        {
          text: '4%'
        },
        {
          text: '0.4',
          onClick: () => {}
        }
      ]
    ]
    return <div style={{width: '595px'}}>
      <ContributeTable
        header={object('Header', header)}
        rows={object('Rows', rows)}
        allSites={boolean('Are this all sites?', false)}
        numSites={number('Number of all sites?', 55)}
      >
        Please visit some sites
      </ContributeTable>
    </div>
  })
  .add('Donation',() => {
    const rows: DonationDetailCell[][] = [
      [
        {
          profile: {
            name: 'Bart Baker',
            verified: true,
            provider: 'youtube',
            src: bart
          },
          type: 'recurring'
        },
        {
          onClick: () => {},
          type: 'recurring'
        },
        {
          text: 2,
          type: 'recurring'
        }
      ],
      [
        {
          profile: {
            verified: false,
            name: 'theguardian.com',
            src: guardian
          },
          type: 'donation'
        },
        {
          text: 'May 2',
          type: 'donation'
        },
        {
          text: 12,
          type: 'donation'
        }
      ],
      [
        {
          profile: {
            verified: false,
            name: 'BrendanEich',
            provider: 'twitter',
            src: eich
          },
          type: 'tip'
        },
        {
          text: 'May 2',
          type: 'tip'
        },
        {
          text: 7,
          type: 'tip'
        }
      ]
    ]
    return <div style={{width: '595px'}}>
      <DonationTable
        rows={object('Rows', rows)}
        allItems={boolean('Are this all items?', false)}
        numItems={number('Number of all items?', 55)}
      >
        Please visit some sites
      </DonationTable>
    </div>
  })
