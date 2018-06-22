/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import { Grid, Column } from '../../../../components/gridSystem'
import Box from '../../../../components/rewards/box'

// Assets
import locale from './fakeLocale'
import '../../../assets/fonts/muli.css'
import '../../../assets/fonts/poppins.css'
import List from '../../../../components/rewards/list';
import Tokens from '../../../../components/rewards/tokens';
import Select from '../../../../components/rewards/select';
import Checkbox from '../../../../components/rewards/checkbox';

interface State {
  adsToggle: boolean
  contributeToggle: boolean
}

class Settings extends React.PureComponent<{}, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      adsToggle: true,
      contributeToggle: true
    }
  }

  adsSettingsChild = () => {
    return <>
      <Grid columns={1} theme={{maxWidth: '270px', margin: '0 auto'}}>
          <Column size={1} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <Select title={locale.adsMode}>
              <div data-value='1'>Notifications</div>
              <div data-value='2'>Page</div>
              <div data-value='3'>Sounds</div>
            </Select>
            <Select title={locale.adsFreq}>
              <div data-value='10'>10 ads daily (10 tokens/month)</div>
              <div data-value='5'>5 ads daily (5 tokens/month)</div>
              <div data-value='1'>1 ads daily (1 token/month)</div>
            </Select>
          </Column>
        </Grid>
    </>
  }

  contributeSettingsChild = () => {
    return <>
      <Grid columns={1} theme={{maxWidth: '270px', margin: '0 auto'}}>
          <Column size={1} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <Select title={locale.contributionMonthly}>
              <div data-value='10'><Tokens value={10} converted={'4'}/></div>
              <div data-value='20'><Tokens value={20} converted={'6'}/></div>
              <div data-value='40'><Tokens value={40} converted={'12'}/></div>
              <div data-value='100'><Tokens value={100} converted={'40'}/></div>
            </Select>
            <Select title={locale.contributionSitesLimit}>
              <div data-value='0'>{locale.contributionSitesNoLimit}</div>
              <div data-value='10'>{locale.contributionSitesLimit10}</div>
              <div data-value='50'>{locale.contributionSitesLimit50}</div>
            </Select>
          </Column>
        </Grid>
    </>
  }
  
  donationSettingsChild = () => {
    return <>
      <Grid columns={1} theme={{maxWidth: '270px', margin: '0 auto'}}>
          <Column size={1} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <Checkbox
              value={{'yt': true, 'tw': false, 'inst': false}}
              multiple={true}
              title={'Enable ability to give tips on ‘Like’ posts'}
            >
              <div data-key='yt'>YouTube</div>
              <div data-key='tw'>Twitter</div>
              <div data-key='inst'>Instagram</div>
            </Checkbox>
          </Column>
        </Grid>
    </>
  }

  render () {
    return (
      <div style={{maxWidth: '1000px', margin: '50px auto'}}>
        <Grid columns={3} theme={{gridGap: '32px'}}>
          <Column size={2} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <Box
              title={locale.adsTitle}
              theme={{titleColor: '#9752cb'}}
              description={locale.adsDesc}
              toggle={true}
              checked={this.state.adsToggle}
              settingsChild={this.adsSettingsChild()}
              onToggle={() => {this.setState({adsToggle: !this.state.adsToggle})}}
            >
              <List title={locale.adsEarnings}>
                <Tokens value={10} converted={4} />
              </List>
              <List title={locale.adsDisplayed}>
                &nbsp;
              </List>
            </Box>
            <Box
              title={locale.contributionTitle}
              theme={{titleColor: '#9f22a1'}}
              description={locale.contributionDesc}
              toggle={true}
              checked={this.state.contributeToggle}
              settingsChild={this.contributeSettingsChild()}
              onToggle={() => {this.setState({contributeToggle: !this.state.contributeToggle})}}
            >
              <List title={locale.contributionMonthly}>
                <Tokens value={15} converted={6} />
              </List>
              <List title={locale.contributionSites}>
                &nbsp;
              </List>
            </Box>
            <Box
              title={locale.donationTitle}
              theme={{titleColor: '#4c54d2'}}
              description={locale.donationDesc}
              settingsChild={this.donationSettingsChild()}
            >
              <List title={locale.donationTotal}>
                <Tokens value={21} converted={7} />
              </List>
              <List title={locale.donationList}>
                &nbsp;
              </List>
            </Box>
          </Column>
          <Column size={1}>
            Panel
          </Column>
        </Grid>
      </div>
    )
  }
}

export default Settings
