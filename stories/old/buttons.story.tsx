/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * A button is anything that once clicked performs an instant action.
 *
 * @see https://github.com/brave/brave-ui/blob/master/docs/spec.md#buttons
 *
 * In this file:
 * ---
 * UnstyledButton
 * PushButton
 * SwitchButton
 * ContentToggleArrow
 */

// Storybook requires
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'

// Components
import * as React from 'react'
import { PushButtonLink } from '../../src/old/v1/pushButton'
import UnstyledButton from '../../src/old/unstyledButton'
import SwitchButton from '../../src/old/switchButton/index'
import ContentToggleArrow from '../../src/old/contentToggleArrow/index'

storiesOf('Old/Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('UnstyledButton', () => {
    return (
      <UnstyledButton
        onClick={action('clicked the action button!')}
        text={text('Text', 'Example UnstyledButton')}
        customStyle={{
          fontSize: text('Font Size', '16px'),
          color: text('Color', '#000')
        }}
      />
    )
  })
  .add('PushButton', () => {
    const label = 'Button Types'
    const options = {
      default: 'Default',
      primary: 'Primary',
      secondary: 'Secondary'
    }
    const defaultValue = 'default'
    const value = select(label, options, defaultValue)

    return (
      <PushButtonLink
        color={value}
        disabled={boolean('Disabled', false)}
        customStyle={{
          minWidth: text('Width', '78px'),
          minHeight: text('Height', '32px'),
          fontSize: text('Font Size', '13px')
        }}
      >
        {text('Label', 'Hello Button')}
      </PushButtonLink>
    )
  })
  .add('SwitchButton', withState({ checked: false }, (store) => {
    const label = 'Button Sizes'
    const options = {
      default: 'Default',
      large: 'Large',
      small: 'Small'
    }
    const defaultValue = 'medium'
    const value = select(label, options, defaultValue)
    const onChange = () => {
      store.set({ checked: !store.state.checked })
    }
    return (
      <SwitchButton
        {...store.state}
        id='sampleSwitch'
        leftText={text('Left Label', 'Some label here')}
        rightText={text('Right Label', 'Some label here too')}
        customStyle={{ labelColor: text('Label Color', '#303030') }}
        size={value}
        checked={boolean('Checked?', store.state.checked)}
        disabled={boolean('Disabled?', false)}
        autoFocus={boolean('AutoFocus?', false)}
        onChange={onChange}
      />
    )
  }))
  .add('ContentToggleArrow', withState({ open: true }, (store) => {
    const onClick = () => {
      store.set({ open: !store.state.open })
    }
    return (
      <ContentToggleArrow
        {...store.state}
        withSeparator={boolean('with separator?', true)}
        open={boolean('Open?', store.state.open)}
        summary={text('Summary text', 'Some text here')}
        onClick={onClick}
      >
        <h1>Some text inside!</h1>
      </ContentToggleArrow>
    )
  }))
