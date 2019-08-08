/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import { Box, BoxAlert, TableDonation, Tokens, List } from '../../../../src/features/rewards'
import { DetailRow as DonationDetailRow } from '../../../../src/features/rewards/tableDonation'
import { Column, Grid, Checkbox, ControlWrapper } from '../../../../src/components'

// Utils
import locale from './fakeLocale'

// Assets
const favicon = require('../../../assets/img/brave-favicon.png')
const eich = require('../../../assets/img/eich.jpg')
const guardian = require('../../../assets/img/guardian.jpg')

const doNothing = () => {
  console.log('nothing')
}

type Check = { yt: boolean, tw: boolean, inst: boolean }

interface State {
  check: Check,
  settings: boolean
}

class DonationsBox extends React.Component<{}, State> {
  constructor (props: {}) {
    super(props)
    this.state = {
      check: {
        yt: true,
        tw: false,
        inst: false
      },
      settings: false
    }
  }

  get donationRows (): DonationDetailRow[] {
    return [
      {
        profile: {
          name: 'Jonathon Doe',
          verified: true,
          provider: 'youtube',
          src: favicon
        },
        url: 'https://brave.com',
        type: 'recurring',
        contribute: {
          tokens: '2.0',
          converted: '0.20'
        },
        onRemove: doNothing
      },
      {
        profile: {
          verified: false,
          name: 'theguardian.com',
          src: guardian
        },
        url: 'https://brave.com',
        type: 'donation',
        contribute: {
          tokens: '12.0',
          converted: '6.20'
        },
        text: 'May 7'
      },
      {
        profile: {
          verified: false,
          name: 'BrendanEich',
          provider: 'twitter',
          src: eich
        },
        url: 'https://brave.com',
        type: 'tip',
        contribute: {
          tokens: '7.0',
          converted: '3.20'
        },
        text: 'May 2'
      }
    ]
  }

  onChange = (key: string, selected: boolean, child: React.ReactNode, all: { [key: string]: boolean }) => {
    this.setState({
      check: all as Check
    })
  }

  donationAlertChild = () => {
    return (
      <BoxAlert type={'tips'} onReview={doNothing} />
    )
  }

  donationSettingsChild = () => {
    return (
      <>
        <Grid columns={1}>
          <Column size={1} customStyle={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <ControlWrapper text={'Enable ability to give tips on ‘Like’ posts'}>
              <Checkbox
                value={this.state.check}
                multiple={true}
                onChange={this.onChange}
              >
                <div data-key='yt'>YouTube</div>
                <div data-key='tw'>Twitter</div>
                <div data-key='rd'>Reddit</div>
                <div data-key='gh'>GitHub</div>
                <div data-key='us'>Unsplash</div>
                <div data-key='inst'>Instagram</div>
              </Checkbox>
            </ControlWrapper>
          </Column>
        </Grid>
      </>
    )
  }

  onSettingsToggle = () => {
    this.setState({ settings: !this.state.settings })
  }

  render () {
    return (
      <Box
        title={locale.donationTitle}
        type={'donation'}
        description={locale.donationDesc}
        attachedAlert={this.donationAlertChild()}
        settingsChild={this.donationSettingsChild()}
        settingsOpened={this.state.settings}
        onSettingsClick={this.onSettingsToggle}
      >
        <List title={locale.donationTotal}>
          <Tokens value={'21.0'} converted={'7.00'} />
        </List>
        <TableDonation
          rows={this.donationRows}
          allItems={true}
          headerColor={true}
        >
          Please visit some sites
        </TableDonation>
      </Box>
    )
  }
}

export default DonationsBox
