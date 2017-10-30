/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

// Components
import React from 'react'
import BrowserButton from '../brave-ui/src/browserButton'

storiesOf('BrowserButton', module)
  .add('Standard default button', () => (
    <BrowserButton
      as='default'
      label='A default button®'
      onClick={action('clicked the default button')}
    />
  ))
  .add('Standard default button disabled', () => (
    <BrowserButton as='default' disabled label='A default disabled button®' />
  ))
  .add('Standard primary button', () => (
    <BrowserButton
      as='primary'
      label='A primary button®'
      onClick={action('clicked the primary button')}
    />
  ))
  .add('Standard primary button disabled', () => (
    <BrowserButton as='primary' disabled label='A primary disabled button®' />
  ))
  .add('Standard secondary button', () => (
    <BrowserButton
      as='secondary'
      label='A secondary button®'
      onClick={action('clicked the secondary button')}
    />
  ))
  .add('Standard secondary button disabled', () => (
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
