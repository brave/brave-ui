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
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import PushButton from '../components/pushButton'
import UnstyledButton from '../components/unstyledButton'
import SwitchButton from '../components/switchButton'
import ContentToggleArrow from '../components/contentToggleArrow'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Buttons', module)
  .add('UnstyledButton', () => {
    return (
      <UnstyledButton
        onClick={action('clicked the action button!')}
        text={text('Text', 'Example UnstyledButton')}
        theme={{
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
      <PushButton
        color={value}
        disabled={boolean('Disabled', false)}
        onClick={action('clicked the standard button!')}
        theme={{
          minWidth: text('Width', '78px'),
          minHeight: text('Height', '32px'),
          fontSize: text('Font Size', '13px')
        }}
        >
        {text('Label', 'Hello Button')}
      </PushButton>
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
    return (
      <SwitchButton
        {...store.state}
        id='sampleSwitch'
        leftText={text('Left Label', 'Some label here')}
        rightText={text('Right Label', 'Some label here too')}
        theme={{labelColor: text('Label Color', '#303030')}}
        size={value}
        checked={boolean('Checked?', store.state.checked)}
        disabled={boolean('Disabled?', false)}
        autoFocus={boolean('AutoFocus?', false)}
        onChange={(checked) => (
          store.set({ checked: !store.state.checked })
        )}
      />
    )
  }))
  .add('ContentToggleArrow', withState({ open: true }, (store) => {
    return (
      <ContentToggleArrow
        {...store.state}
        withSeparator={boolean('with separator?', true)}
        open={boolean('Open?', store.state.open)}
        summary={text('Summary text', 'Some text here')}
        onClick={(open) => (
          store.set({ open: !store.state.open })
        )}>
        <h1>Some text inside!</h1>
      </ContentToggleArrow>
    )
  }))
