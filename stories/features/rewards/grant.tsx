/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'
// Components
import GrantClaim from '../../../src/features/rewards/grantClaim'
import GrantError from '../../../src/features/rewards/grantError'
import GrantWrapper from '../../../src/features/rewards/grantWrapper'
import GrantCaptcha from '../../../src/features/rewards/grantCaptcha'
import GrantComplete from '../../../src/features/rewards/grantComplete'

const captchaDrop = require('../../assets/img/captchaDrop.png')

const dummyClick = () => {
  console.log(dummyClick)
}

storiesOf('Feature Components/Rewards/Grant', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
    .add('Grant claim',() => {
      return (
        <GrantClaim
          type={select('Type', { ugp: 'ugp', ads: 'ads' }, 'ugp')}
          onClaim={dummyClick}
        />
      )
    })
    .add('Grant wrapper',() => {
      return (
        <div style={{ width: '373px', height: '715px', position: 'relative' }}>
          <GrantWrapper
            onClose={dummyClick}
            title={text('Title', 'Good news!')}
            text={text('Text', 'Free 30 BAT have been awarded to you so you can support more publishers.')}
          >
           Content here
          </GrantWrapper>
        </div>
      )
    })
    .add('Grant captcha',() => {
      return (
        <div style={{ width: '373px', height: '715px', position: 'relative' }}>
          <GrantCaptcha
            onSolution={dummyClick}
            dropBgImage={captchaDrop}
            hint={'blue'}
          />
        </div>
      )
    })
    .add('Grant complete',() => {
      return (
        <div style={{ width: '373px', height: '715px', position: 'relative' }}>
          <GrantComplete
            onClose={dummyClick}
            amount={'30.0'}
            date={'8/15/2018'}
          />
        </div>
      )
    })
    .add('Grant Error',() => {
      return (
        <div style={{ width: '373px', height: '250px', position: 'relative', background: '#fff' }}>
          <GrantError
            onButtonClick={dummyClick}
            buttonText={'ok'}
            text={'The period for claiming this grant has ended'}
          />
        </div>
      )
    })
