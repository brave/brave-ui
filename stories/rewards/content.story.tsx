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
import Box from '../../components/rewards/box'
import DisabledContent from '../../components/rewards/disabledContent'
import MainToggle from '../../components/rewards/mainToggle'
import Alert from '../../components/rewards/alert'
import Panel from '../../components/rewards/panel'
import Donate from '../../components/rewards/donate'
import Modal from '../../components/rewards/modal'
import Tabs from '../../components/rewards/tabs'
import ModalBackupRestore, { TabsType } from '../../components/rewards/modalBackupRestore';
import ModalContribute from '../../components/rewards/modalContribute';
import { DetailRow } from '../../components/rewards/contributeTable';
import PanelEmpty from '../../components/rewards/panelEmpty';
import PanelSummary from '../../components/rewards/panelSummary';

const donate = require('../assets/img/rewards_donate.svg')
const wallet = require('../assets/img/rewards_wallet.svg')
const funds = require('../assets/img/rewards_funds.svg')
const bart = require('../assets/img/bartBaker.jpeg')
const ddgo = require('../assets/img/ddgo.jpg')
const wiki = require('../assets/img/wiki.jpg')
const buzz = require('../assets/img/buzz.jpg')
const guardian = require('../assets/img/guardian.jpg')

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

const donationAmount = [
  {tokens: 1, converted: 0.3, selected: false},
  {tokens: 5, converted: 1.5, selected: false},
  {tokens: 10, converted: 3, selected: false}
]

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
      tokens={number('Tokens', 25)}
      converted={text('Converted', '163230.50 USD')}
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
        }
      ]}
      showCopy={boolean('Show Uphold', false)}
      showSecActions={boolean('Show secondary actions', true)}
      connectedWallet={boolean('Connected wallet', false)}
      grants={object('Grants', [
        {
          tokens: 8,
          expireDate: '7/15/2018'
        },
        {
          tokens: 10,
          expireDate: '9/10/2018'
        },
        {
          tokens: 10,
          expireDate: '10/10/2018'
        }
      ])}
    >
     Some content
    </Panel>
  })
  .add('Main toggle', withState({ checked: false }, (store) => {
    return <div style={{width: '800px'}}>
      <MainToggle
      enabled={boolean('Enable', store.state.checked)}
      onToggle={() => (
        store.set({ checked: !store.state.checked })
      )}
    />
    </div>
  }))
  .add('Donate', withState({donationAmount}, (store) => {
    return <div style={{background: '#696fdc'}}>
      <Donate
        theme={{
          paddingFunds: '14px 12px 16px 24px',
          paddingSend: '16px 19px 16px 40px',
          paddingBox: '16px 19px 16px 20px'
        }}
        balance={number('Balance ', 5)}
        donationAmounts={object('Donations', store.state.donationAmount)}
        onDonate={() => {}}
        title={'Donation amount'}
        actionText={text('Action text', 'Send my Donation')}
        onAmountSelection={(tokens: number) => {
          const list = store.state.donationAmount.map((item) => {
            item.selected = item.tokens === tokens
            return item
          })
          store.set({donationAmount: list})
        }}
      >
    </Donate>
    </div>
  }))
  .add('Modal', withState({ visible: true }, (store) => {
    return <>
      {
        boolean('Visible', store.state.visible)
          ? <Modal
          id={'modal'}
          outsideClose={boolean('Close with click outside', false)}
          onClose={() => (
            store.set({ visible: !store.state.visible })
          )}
        >
          Content
        </Modal>
        : null
      }
    </>
  }))
  .add('Tabs', withState({ tabId: '' }, (store) => {
    return <div style={{maxWidth: '900px', background: '#fff', padding: '30px'}}>
      <Tabs
        activeTabId={store.state.tabId}
        onChange={(tabId: string) => (
          store.set({ tabId })
        )}
      >
        <div data-key='cont1' data-title={'Content 1'}>
          1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor incidunt laudantium magnam maiores molestias
          numquam quae quas tempore. Accusamus animi aperiam aspernatur autem commodi cumque cupiditate dignissimos
          dolore eius exercitationem fuga modi molestiae natus nemo nesciunt nihil nisi nobis obcaecati quasi quibusdam,
          sunt tempora temporibus ut veniam vitae! Exercitationem, possimus?
        </div>
        <div data-key='cont2' data-title={'Content 2'}>
          2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus dolores eaque eius
          eligendi error, et eveniet ex facere facilis fugit harum id in nesciunt non odit officia pariatur
          placeat porro, quam quisquam quos recusandae saepe totam. Ipsa nam nulla obcaecati perspiciatis
          saepe ullam. Aliquid amet architecto consequuntur dolor dolorem doloribus, eaque explicabo illum
          nam numquam quia quis voluptatem.
        </div>
        <div data-key='cont3' data-title={'Content 3'}>
          3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolore eaque eveniet
          fuga illo molestiae natus, officiis qui quia sit soluta sunt veniam. Dolorum eveniet illum
          quibusdam ratione temporibus tenetur voluptatum. Ab alias assumenda earum expedita odio tempore vitae?
        </div>
      </Tabs>
    </div>
  }))
  .add('Modal - Backup/Restore', withState({ tabId: 'backup' }, (store) => {
    return <div style={{maxWidth: '900px', background: '#fff', padding: '30px'}}>
      <ModalBackupRestore
        activeTabId={store.state.tabId as TabsType}
        recoveryKey={'crouch  hint  glow  recall  round  angry  weasel  luggage save  hood  census  near  still   power  vague  balcony camp  law  now  certain  wagon  affair  butter  choice '}
        error={text('Error', '')}
        onTabChange={(tabId: string) => (
          store.set({ tabId })
        )}
        onClose={() => {}}
        onCopy={() => {}}
        onPrint={() => {}}
        onSaveFile={() => {}}
        onRestore={() => {}}
        onImport={() => {}}
      />
    </div>
  }))
  .add('Modal - Contribute', () => {
    const rows: DetailRow[] = [
      {
        profile: {
          name: 'Bart Baker',
          verified: true,
          provider: 'youtube',
          src: bart
        },
        attention: 40,
        onRemove: () => {}
      },
      {
        profile: {
          name: 'duckduckgo.com',
          verified: true,
          src: ddgo
        },
        attention: 20,
        onRemove: () => {
        }
      },
      {
        profile: {
          name: 'buzzfeed.com',
          verified: false,
          src: buzz
        },
        attention: 10,
        onRemove: () => {}
      },
      {
        profile: {
          name: 'theguardian.com',
          verified: true,
          src: guardian
        },
        attention: 5,
        onRemove: () => {}
      },
      {
        profile: {
          name: 'wikipedia.org',
          verified: false,
          src: wiki
        },
        attention: 4,
        onRemove: () => {}
      }
    ]

    return <ModalContribute
      rows={rows}
      onClose={() => {}}
    />
  })
  .add('Panel content - Empty', () => {
    return <div style={{width: '373px', background: '#f9fbfc', padding: '0 25px'}}><PanelEmpty/></div>
  })
  .add('Panel content - Summary', () => {
    return <div style={{width: '373px', background: '#f9fbfc', padding: '0 25px'}}>
      <PanelSummary
        grant={object('Grant', {color: '#C12D7C', tokens: 10, converted: 0.25})}
        ads={object('Ads', {color: '#C12D7C', tokens: 10, converted: 0.25})}
        contribute={object('Contribute', {color: '#9752CB', tokens: 10, converted: 0.25})}
        donation={object('Donation', {color: '#4C54D2', tokens: 2, converted: 0.25})}
        tips={object('Tips', {color: '#4C54D2', tokens: 19, converted: 5.25})}
        grants={[
          {
            id: '1',
            tokens: 15,
            converted: 0.75
          },
          {
            id: '2',
            tokens: 10,
            converted: 0.50
          }
        ]}
        onActivity={()=>{}}
      />
    </div>
  })

