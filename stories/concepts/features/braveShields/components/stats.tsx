/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { Grid, Column } from '../../../../../components/gridSystem'
import { DataBlock, DataItem } from '../../../../../components/dataBlock'
import data from '../fakeData'
import locale from '../fakeLocale'
import theme from '../theme'

class BraveShieldsStats extends React.PureComponent {
  render () {
    return (
      <Grid
        id='braveShieldsStats'
        theme={theme.braveShieldsStats}>
        <Column>
          <DataBlock asList>
            <DataItem
              id='adsTrackersBlockedStats'
              theme={theme.adsTrackersBlockedStats}
              size='small'
              counter={data.totalAdsTrackersBlocked}
              description={locale.shieldsStatsAdsTrackersBlocked}
              onClick={() => console.log('fired!! 1')} />
            <DataItem
              id='httpsUpgradesStats'
              theme={theme.httpsUpgradesStats}
              size='small'
              counter={data.httpsRedirected}
              description={locale.shieldsStatsHttpsUpgrades}
              onClick={() => console.log('fired!! 2')} />
            <DataItem
              id='scriptsBlockedStats'
              theme={theme.scriptsBlockedStats}
              size='small'
              counter={data.javascriptBlocked}
              description={locale.shieldsStatsScriptsBlocked}
              onClick={() => console.log('fired!! 3')} />
            <DataItem
              id='fingerPrintingProtectionStats'
              theme={theme.fingerPrintingProtectionStats}
              size='small'
              counter={data.fingerprintingBlocked}
              description={locale.shieldsFingerPrintingBlocked}
              onClick={() => console.log('fired!! 4')} />
          </DataBlock>
        </Column>
      </Grid>
    )
  }
}

export default BraveShieldsStats
