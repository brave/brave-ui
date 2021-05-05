/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'
import { Heading, Text } from '../../src/components'

storiesOf('Components/Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Heading playground', () => {
    const label = 'Level'
    const defaultValue = 1
    const options = {
      range: true,
      min: 1,
      max: 6,
      step: 1
    }
    return (
      <Heading level={number(label, defaultValue, options)}>
        {text('Text', 'Heading on fire')}
      </Heading>
    )
  })
  .add('Heading Demonstration', () => {
    return (
      <>
        <Heading level={1}>Heading level 1</Heading>
        <Heading level={2}>Heading level 2</Heading>
        <Heading level={3}>Heading level 3</Heading>
        <Heading level={4}>Heading level 4</Heading>
        <Heading level={5}>Heading level 5</Heading>
        <Heading level={6}>Heading level 6</Heading>
      </>
    )
  })
  .add('Text', () => {
    return (
      <>
        <Text size='00'>A browser with your interest at heart</Text>
        <Text size='01'>A browser with your interest at heart</Text>
        <Text size='02'>A browser with your interest at heart</Text>
        <Text size='03'>A browser with your interest at heart</Text>
        <Text size='04'>A browser with your interest at heart</Text>
        <Text size='05'>A browser with your interest at heart</Text>
        <Text size='06'>A browser with your interest at heart</Text>
        <Text size='07'>A browser with your interest at heart</Text>
        <Text size='08'>A browser with your interest at heart</Text>
        <Text size='09'>A browser with your interest at heart</Text>
        <Text size='10'>A browser with your interest at heart</Text>
        <Text size='11'>A browser with your interest at heart</Text>
      </>
    )
  })
