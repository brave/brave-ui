/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledTitle,
  StyledSummary,
  StyledTokensWrapper,
  StyledGrantTitle,
  StyledGrantIcon,
  StyledGrant,
  StyledGrantText,
  StyledGrantClaim,
  StyledActivity,
  StyledActivityIcon,
  StyledGrantEmpty
} from './style'
import Tokens from '../tokens'
import ListToken from '../listToken'

const coinsIcon = require('./assets/coins')
const activityIcon = require('./assets/activity')

type Token = {color: string, tokens: number, converted: number}
type Grant = {id: string, tokens: number, converted: number}

export interface Props {
  grant: Token
  ads: Token
  contribute: Token
  donation: Token
  tips: Token
  onActivity: () => void
  id?: string
  grants?: Grant[]
  onClaim?: (id: string) => void
}

/*
  TODO
  - add local
 */
export default class PanelSummary extends React.PureComponent<Props, {}> {
  render () {
    const { id, grant, ads, contribute, donation, tips, grants, onClaim, onActivity } = this.props

    return (
      <StyledWrapper id={id}>
        <StyledSummary>Rewards Summary</StyledSummary>
        <StyledTitle>May 2018</StyledTitle>
        <StyledTokensWrapper>
          <ListToken
            value={grant.tokens}
            converted={grant.converted}
            theme={{color: grant.color}}
            title={'Token Grant'}
          />
          <ListToken
            value={ads.tokens}
            converted={ads.converted}
            theme={{color: ads.color}}
            title={'Earnings from Brave Ads'}
          />
          <ListToken
            value={contribute.tokens}
            converted={contribute.converted}
            theme={{color: contribute.color}}
            title={'Brave Contribute'}
            isNegative
          />
          <ListToken
            value={donation.tokens}
            converted={donation.converted}
            theme={{color: donation.color}}
            title={'Recurring Donations'}
            isNegative
          />
          <ListToken
            value={tips.tokens}
            converted={tips.converted}
            theme={{color: tips.color, borderBottom: 'none'}}
            title={'One-time Donations/Tips'}
            isNegative
          />
        </StyledTokensWrapper>
        <StyledGrantTitle>
          <StyledGrantIcon>{coinsIcon}</StyledGrantIcon> Token Grant
        </StyledGrantTitle>
        {
          grants && grants.map((grant: Grant, i: number) => {
            return <StyledGrant key={`${id}-grant-${i}`}>
              <StyledGrantText>
                <Tokens
                  value={grant.tokens}
                  converted={grant.converted}
                  theme={{
                    color: {
                      text: 'rgba(255, 255, 255, 0.65)',
                      token: '#fff',
                      tokenNum: '#fff'
                    },
                    size: {
                      token: '22px',
                      text:'14px'
                    }
                  }}
                />
              </StyledGrantText>
              <StyledGrantClaim onClick={onClaim && onClaim.bind(grant.id)}>Claim</StyledGrantClaim>
            </StyledGrant>
          })
        }
        {
          !grants || grants.length === 0
          ? <StyledGrantEmpty>Currently no token grant is available.</StyledGrantEmpty>
          : null
        }
        <StyledActivity onClick={onActivity}>
          <StyledActivityIcon>{activityIcon}</StyledActivityIcon> Wallet Activity/ Monthly Statement
        </StyledActivity>
      </StyledWrapper>
    )
  }
}
