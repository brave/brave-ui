/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import {storiesOf, addDecorator} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {BetterVisualizer} from './storyUtil'

// Components
import React from 'react'
import BrowserButton from '../brave-ui/src/browserButton'

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('BrowserButton', module)
  .add('Standard button', () => (
    <BrowserButton
      as='standard'
      label='A standard button®'
      onClick={action('clicked the standard button')}
    />
  ))
  .add('Standard button disabled', () => (
    <BrowserButton as='standard' disabled label='A standard disabled button®' />
  ))
  .add('Primary button', () => (
    <BrowserButton
      as='primary'
      label='A primary button®'
      onClick={action('clicked the primary button')}
    />
  ))
  .add('Primary button disabled', () => (
    <BrowserButton as='primary' disabled label='A primary disabled button®' />
  ))
  .add('Secondary button', () => (
    <BrowserButton
      as='secondary'
      label='A secondary button®'
      onClick={action('clicked the secondary button')}
    />
  ))
  .add('Secondary button disabled', () => (
    <BrowserButton
      as='secondary'
      disabled
      label='A secondary disabled button®'
    />
  ))
  .add('Custom size', () => (
    <BrowserButton
      as='primary'
      size='60px'
      label='A custom size button®'
      onClick={action('clicked the custom font size button')}
    />
  ))
  .add('Custom font size', () => (
    <BrowserButton
      as='primary'
      fontSize='40px'
      label='A custom font size button®'
      onClick={action('clicked the custom font size button')}
    />
  ))
