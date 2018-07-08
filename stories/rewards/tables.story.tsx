/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean, object, number } from '@storybook/addon-knobs'

import * as React from 'react'
// Utils
import { BetterVisualizer } from '../storyUtil'

// Components
import Table, { Cell, Row } from '../../components/rewards/table';
import ContributeTable, { DetailRow as ContributeDetailRow } from '../../components/rewards/contributeTable';
import DonationTable, { DetailRow as DonationDetailRow } from '../../components/rewards/donationTable';

const bart = require('../assets/img/bartBaker.jpeg')
const ddgo = require('../assets/img/ddgo.jpg')
const wiki = require('../assets/img/wiki.jpg')
const buzz = require('../assets/img/buzz.jpg')
const guardian = require('../assets/img/guardian.jpg')
const eich = require('../assets/img/eich.jpg')

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

storiesOf('Rewards/Tables', module)
  .add('Base',() => {
    const rowTheme = {
      'text-align': 'right',
      'padding-left': '9px'
    }

    const rows: Row[] = [
      {
        content: [
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
        ]
      },
      {
        content: [
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
      }
    ]

    const header: Cell[] = [
      {
        content: 'Site visited'
      },
      {
        content: 'Attentions',
        theme: {
          'text-align': 'right'
        }
      },
      {
        content: 'Tokens',
        theme: {
          'text-align': 'right'
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

    const rows: ContributeDetailRow[] = [
      {
        profile: {
          name: 'Bart Baker',
          verified: true,
          provider: 'youtube',
          src: bart
        },
        contribute: {
          attention: '40%',
          tokens: 4,
          converted: 5
        },
        onRemove: () => {}
      },
      {
        profile: {
          name: 'duckduckgo.com',
          verified: true,
          src: ddgo
        },
        contribute: {
          attention: '20%',
          tokens: 2,
          converted: 1
        },
        onRemove: () => {
        }
      },
      {
        profile: {
          name: 'buzzfeed.com',
          verified: false,
          src: buzz
        },
        contribute: {
          attention: '10%',
          tokens: 1,
          converted: 0.5
        },
        onRemove: () => {}
      },
      {
        profile: {
          name: 'theguardian.com',
          verified: true,
          src: guardian
        },
        contribute: {
          attention: '5%',
          tokens: 0.5,
          converted: 0.25
        },
        onRemove: () => {}
      },
      {
        profile: {
          name: 'wikipedia.org',
          verified: false,
          src: wiki
        },
        contribute: {
          attention: '4%',
          tokens: 0.4,
          converted: 0.25
        },
        onRemove: () => {}
      }
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
    const rows: DonationDetailRow[] = [
      {
        profile: {
          name: 'Bart Baker',
          verified: true,
          provider: 'youtube',
          src: bart
        },
        type: 'recurring',
        contribute: {
          tokens: 2,
          converted: 0.2
        },
        onRemove: () => {}
      },
      {
        profile: {
          verified: false,
          name: 'theguardian.com',
          src: guardian
        },
        type: 'donation',
        contribute: {
          tokens: 12,
          converted: 6.2
        },
        text: 'May 7',
      },
      {
        profile: {
          verified: false,
          name: 'BrendanEich',
          provider: 'twitter',
          src: eich
        },
        type: 'tip',
        contribute: {
          tokens: 7,
          converted: 3.2
        },
        text: 'May 2',
      }
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
