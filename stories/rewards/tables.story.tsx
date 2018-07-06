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
import Table, { Cell } from '../../components/rewards/table';
import ContributeTable, { DetailCell as ContributionDetailCell } from '../../components/rewards/contributeTable';
import DonationTable, { DetailCell as DonationDetailCell } from '../../components/rewards/donationTable';

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
