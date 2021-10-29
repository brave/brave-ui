/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select, text, object } from '@storybook/addon-knobs'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'
import centered from '@storybook/addon-centered'

// Components
import { Toggle, Select, Checkbox, TextArea, TextAreaClipboard, Input, ControlWrapper, Radio } from '../../src/components'
import { CheckCircleIcon } from '../../src/components/icons'

storiesOf('Components/Form controls', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Wrapper', () => {
    return (
      <ControlWrapper
        text={text('Label', 'Control label')}
        disabled={boolean('Disabled?', false)}
      >
        Content
      </ControlWrapper>
    )
  })
  .add('Toggle', withState({ checked: false }, (store) => {
    const sizeOptions = { 'small': 'small', 'large': 'large' }

    const onToggle = () => {
      store.set({ checked: !store.state.checked })
    }

    return (
      <Toggle
        size={select<any>('Size', sizeOptions, 'large')}
        checked={store.state.checked}
        type={select<any>('Type', { dark: 'dark', light: 'light' }, 'dark')}
        disabled={boolean('Disabled?', false)}
        onToggle={onToggle}
      />
    )
  }))
  .add('Select', () => {
    return (
      <>
        <div style={{ width: '310px', background: '#fff', padding: '30px' }}>
          <ControlWrapper
            text={text('Title', 'Limit Sites to')}
            type={'light'}
            disabled={boolean('Disabled', false)}
          >
            <Select
              type={'light'}
              title={'Limit Sites to'}
              disabled={boolean('Disabled', false)}
              floating={boolean('Floating', false)}
            >
              <div data-value='0'>No Limit</div>
              <div data-value='10'>Pay Only Top 10</div>
              <div data-value='50'>Pay Top 50</div>
              <div data-value='100000'>Really long limit that I know of 100000</div>
            </Select>
          </ControlWrapper>
        </div>
        <div style={{ width: '310px', background: '#4B4C5C', padding: '30px' }}>
          <ControlWrapper
            text={text('Title', 'Limit Sites to')}
            type={'dark'}
            disabled={boolean('Disabled', false)}
          >
            <Select
              type={'dark'}
              title={'Limit Sites to'}
              disabled={boolean('Disabled', false)}
              floating={boolean('Floating', false)}
            >
              <div data-value='0'>No Limit</div>
              <div data-value='10'>Pay Only Top 10</div>
              <div data-value='50'>Pay Top 50</div>
              <div data-value='100000'>Really long limit that I know of 100000</div>
            </Select>
          </ControlWrapper>
        </div>
      </>
    )
  })
  .add('Checkbox', withState({ 'yt': true, 'tw': false, 'rd': false, 'gh': false, 'inst': false }, (store) => {
    const onChange = (key: string, selected: boolean, child: React.ReactNode, all: { [key: string]: boolean }) => {
      store.set(all)
    }
    return (
      <>
        <div style={{ width: '310px', background: '#fff', padding: '30px' }}>
          <ControlWrapper
            text={text('Title', 'Enable ability to give tips on ‘Like’ posts')}
            type={'light'}
            disabled={boolean('Disabled', false)}
          >
            <Checkbox
              value={store.state}
              size={select<any>('Size', { small: 'small', big: 'big' }, 'small')}
              multiple={boolean('Is multiple?', false)}
              disabled={boolean('Disabled', false)}
              onChange={onChange}
              type={'light'}
            >
              <div data-key='yt'>YouTube</div>
              <div data-key='tw'>Twitter</div>
              <div data-key='rd'>Reddit</div>
              <div data-key='gh'>GitHub</div>
              <div data-key='inst'>Instagram Instagram Instagram Instagram Instagram</div>
            </Checkbox>
          </ControlWrapper>
        </div>
        <div style={{ width: '310px', background: '#4B4C5C', padding: '30px' }}>
          <ControlWrapper
            text={text('Title', 'Enable ability to give tips on ‘Like’ posts')}
            type={'dark'}
            disabled={boolean('Disabled', false)}
          >
            <Checkbox
              value={store.state}
              size={select<any>('Size', { small: 'small', big: 'big' }, 'small')}
              multiple={boolean('Is multiple?', false)}
              disabled={boolean('Disabled', false)}
              onChange={onChange}
              type={'dark'}
            >
              <div data-key='yt'>YouTube</div>
              <div data-key='tw'>Twitter</div>
              <div data-key='rd'>Reddit</div>
              <div data-key='gh'>GitHub</div>
              <div data-key='inst'>Instagram Instagram Instagram Instagram Instagram</div>
            </Checkbox>
          </ControlWrapper>
        </div>
      </>
    )
  }))
  .add('Radio', withState({ '5': true, '10': false, '15': false, '20': false }, (store) => {
    const onChange = (key: string, selected: boolean, child: React.ReactNode, all: { [key: string]: boolean }) => {
      store.set(all)
    }
    return (
      <>
        <div style={{ width: '295px', background: '#fff', padding: '30px 60px' }}>
          <ControlWrapper
            text={text('Title', 'Monthly Budget')}
            type={'light'}
            disabled={boolean('Disabled', false)}
          >
            <Radio
              value={object('Radio values', store.state)}
              size={select<any>('Size', { small: 'small', big: 'big' }, 'small')}
              disabled={boolean('Disabled', false)}
              onChange={onChange}
            >
              <div data-value='5'>5</div>
              <div data-value='10'>10</div>
              <div data-value='15'>15</div>
              <div data-value='20'>20</div>
            </Radio>
          </ControlWrapper>
        </div>
      </>
    )
  }))
  .add('TextArea', withState({ value: '' }, (store) => {
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      store.set({ value: event.target.value })
    }

    return (
      <div style={{ width: '250px' }}>
        <ControlWrapper
          text={text('Title', 'Recovery keys')}
          disabled={boolean('Disabled', false)}
        >
          <TextArea
            value={text('Value', store.state.value)}
            disabled={boolean('Disabled', false)}
            onChange={onChange}
          />
        </ControlWrapper>
      </div>
    )
  }))
  .add('TextAreaClipboard', withState({ value: '' }, (store) => {
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      store.set({ value: event.target.value })
    }

    return (
      <div style={{ width: '500px' }}>
        <ControlWrapper
          text={text('Title', 'Recovery keys')}
          disabled={boolean('Disabled', false)}
        >
          <TextAreaClipboard
            copiedString='Copied!'
            wordCountString='Word Count:'
            value={text('Value', store.state.value)}
            disabled={boolean('Disabled', false)}
            onChange={onChange}
          />
        </ControlWrapper>
      </div>
    )
  }))
  .add('Input', withState({ value: '' }, (store) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      store.set({ value: event.target.value })
    }
    const typeOptions = { text: 'text', email: 'email', search: 'search', password: 'password' }
    const type = select<any>('Type', typeOptions, 'text')
    return (
      <Input
        type={type}
        icon={<CheckCircleIcon />}
        value={text('Value', store.state.value)}
        disabled={boolean('Disabled', false)}
        onChange={onChange}
      />
    )
  }))
