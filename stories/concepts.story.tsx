/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { BetterPageVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import NewPrivateTab from './concepts/aboutPages/newPrivateTab/index'
import WelcomePage from './concepts/aboutPages/welcomePage/index'
import BraveShields from './concepts/features/braveShields'
import Settings from './concepts/pages/RewardsSettings'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterPageVisualizer)

storiesOf('Concepts/Pages', module)
  .add('New Private Tab', () => <NewPrivateTab />)
  .add('Welcome Page', () => <WelcomePage />)
  .add('Rewards Settings', () => <Settings />)
storiesOf('Concepts/Features', module)
  .add('Brave Shields Panel', () => <BraveShields />)
