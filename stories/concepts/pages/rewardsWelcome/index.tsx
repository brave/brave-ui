/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Generic Components
import Page from '../../../../components/page'
import { Heading } from '../../../../components/headings'
import Paragraph from '../../../../components/paragraph'
import BoxedContent from '../../../../components/boxedContent'

// Rewards Components
import Hero from '../../../../components/rewards/hero'
import Button from '../../../../components/rewards/button'
import { InfoCards, InfoCardProps } from '../../../../components/rewards/infoCard'

// Styles
import theme from './theme'

// Assets
import locale from './fakeLocale'
// import data from './fakeData'

// Images
const rewardsTitleImg = require('../../../assets/img/rewards_wallet.svg')

class RewardsWelcome extends React.PureComponent {

  get infoItems (): InfoCardProps[] {
    return [
      {
        title: locale.turnOnRewardsTitle,
        description: locale.turnOnRewardsDesc,
        icon: rewardsTitleImg
      },
      {
        title: locale.braveAdsTitle,
        description: locale.braveAdsDesc,
        icon: rewardsTitleImg
      },
      {
        title: locale.braveContributeTitle,
        description: locale.braveContributeDesc,
        icon: rewardsTitleImg
      }
    ]
  }

  optIn () {
    window.alert('Opt-in action')
  }

  render () {
    return (
      <Page theme={theme.page}>
        <Hero id={'rewards-hero'}>
         <Heading level={1} text={locale.braveRewardsTitle}/>
         <Heading level={2} text={locale.braveRewardsSubTitle}/>
         <Paragraph text={locale.braveRewardsDesc}/>
         <Button
           size={'medium'}
           type={'cta'}
           color={'subtle'}
           onClick={this.optIn}
           text={locale.braveRewardsOptInText}/>
         <Paragraph text={locale.braveRewardsTeaser}/>
        </Hero>
        <BoxedContent>
          <Heading level={2} text={locale.whyBraveRewards}/>
          <Paragraph text={locale.whyBraveRewardsDesc}/>
          <Paragraph text={locale.whyBraveRewardsBold}/>
        </BoxedContent>
        <BoxedContent>
          <Heading level={2} text={locale.howDoesItWork}/>
          <Paragraph text={locale.whyBraveRewardsDesc}/>
          <Paragraph text={locale.whyBraveRewardsBold}/>
        </BoxedContent>
        <BoxedContent>
          <InfoCards
            infoItems={this.infoItems}/>
        </BoxedContent>
        <BoxedContent>
          <Heading level={2} text={locale.readyToTakePart}/>
          <Paragraph text={locale.readyToTakePartDesc}/>
          <Button
            size={'medium'}
            type={'cta'}
            color={'subtle'}
            onClick={this.optIn}
            text={locale.braveRewardsOptInText}/>
        </BoxedContent>
      </Page>
    )
  }
}

export default RewardsWelcome
