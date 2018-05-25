/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Page from '../../../../components/page'
import { Grid, Column } from '../../../../components/gridSystem'
import { DataBlock, DataItem } from '../../../../components/dataBlock'
import Clock from '../../../../components/clock'
import MediaContent from '../../../../components/mediaContent'
import BoxedContent from '../../../../components/boxedContent'
import { Heading } from '../../../../components/headings'
import Paragraph from '../../../../components/paragraph'
import SwitchButton from '../../../../components/switchButton'

// Assets
import locale from './fakeLocale'
import data from './fakeData'
import '../../../assets/fonts/muli.css'
import '../../../assets/fonts/poppins.css'

// Images
const privateTabIcon = require('../../../assets/img/private_tab_pagearea_icon.svg')

class NewPrivateTab extends React.PureComponent {
  render () {
    return (
      <Page theme={{
        fontFamily: '"Poppins", sans-serif',
        color: '#fff',
        padding: '80px 60px 40px',
        background: 'linear-gradient(#4b3c6e, #000)'
      }}>
        <Grid columns={3}>
          <Column size={2}>
            <DataBlock>
              <DataItem
                theme={{ color: '#f39030' }}
                description={locale.trackersBlocked}
                counter={data.trackersBlockedCount} />
              <DataItem
                theme={{ color: '#fe521d' }}
                description={locale.adsBlocked}
                counter={data.adsBlockedCount} />
              <DataItem
                theme={{ color: '#0796fa' }}
                description={locale.httpsUpgrades}
                counter={data.httpsUpgradesCount} />
              <DataItem
                theme={{ color: '#999999' }}
                description={locale.estimatedTime}
                text={locale.minutes}
                counter={data.estimatedTimeCount} />
            </DataBlock>
          </Column>
          <Column size={1} theme={{justifyContent: 'flex-end'}}>
            <Clock theme={{color: 'rgba(255,255,255,0.8)'}} />
          </Column>
        </Grid>
        <BoxedContent
          theme={{maxWidth: '650px', margin: '60px auto 0'}}
        >
          <MediaContent
            media={privateTabIcon}
            theme={{width: '80px', margin: '0 0 0 25px'}}
          >
            <Heading level={1} theme={{fontWeight: '400', color: '#fff'}} text={locale.title} />
            <article style={{fontFamily: '"Muli", sans-serif'}}>
              <Paragraph theme={{fontSize: '18px'}} text={locale.paragraph1} />
              <Paragraph theme={{fontStyle: 'italic', fontSize: '15px'}} text={locale.paragraph2} />
              <BoxedContent theme={{margin: '40px 0 25px'}}>
                <SwitchButton
                  id='togglePrivateSearchEngine'
                  size='large'
                  checked={false}
                  rightText={locale.switchLabel} />
              </BoxedContent>
              <Paragraph theme={{fontSize: '18px'}} text={locale.paragraph3} />
            </article>
          </MediaContent>
        </BoxedContent>
      </Page>
    )
  }
}

export default NewPrivateTab
