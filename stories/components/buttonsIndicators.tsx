/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import * as React from 'react'

// Utils
import { BetterVisualizer } from '../storyUtil'

// Components
import {ButtonPrimary, ButtonSecondary, ButtonGhost, ButtonCta} from '../../src/components'

const arrowImage = require('../assets/img/icn-arrow.svg')

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

storiesOf('Components/Buttons & Indicators/Buttons', module)
  .add('Primary',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: <img src={arrowImage} />,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonPrimary
      color={select('Color', {brand: 'brand', action: 'action'}, 'brand')}
      size={select('Size', {large: 'large', medium: 'medium', small: 'small'}, 'medium')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
  .add('Secondary',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: <img src={arrowImage} />,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonSecondary
      color={select('Color', {brand: 'brand', action: 'action', subtle: 'subtle'}, 'brand')}
      size={select('Size', {large: 'large', medium: 'medium', small: 'small'}, 'medium')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
  .add('Ghost',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: <img src={arrowImage} />,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonGhost
      color={select('Color', {brand: 'brand', action: 'action'}, 'brand')}
      size={select('Size', {large: 'large', medium: 'medium', small: 'small'}, 'medium')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
  .add('CTA',() => {
    let icon = undefined
    if (boolean('Show icon', false)) {
      icon = {
        image: <img src={arrowImage} />,
        position: select('Icon position', {left: 'left', right: 'right'}, 'right')
      }
    }

    return <ButtonCta
      color={select('Color', {brand: 'brand', action: 'action'}, 'brand')}
      text={'Button'}
      disabled={boolean('Disabled', false)}
      icon={icon}
      onClick={() => {}}
    />
  })
