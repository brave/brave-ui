/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
// Storybook requires
import { storiesOf } from '@storybook/react'

// Components
import CButton, { Props } from '../../src/components/buttonsIndicators/button'
import styled from '../../src/theme'
import { CheckCircleIcon } from '../../src/components/icons'

const Button = styled(CButton as React.ComponentType<Props>)`
  margin: 10px;
`
Button.displayName = CButton.displayName

// wrappers
const ComponentTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
const Spacer = styled.div`
  margin: 80px 0;
`

const icon = {
  image: <CheckCircleIcon />
}

storiesOf('Components', module)
  .add('Button', () => {
    return (
      <div>
        <Button text='All defaults' />
        <Spacer />
        <ComponentTypes>
          <Button level='default' text='Default' />
          <Button level='primary' text='Primary' />
          <Button level='secondary' text='Secondary' />
          <Button level='tertiary' text='Tertiary' />
        </ComponentTypes>
        <Spacer />
        <ComponentTypes>
          <Button level='default' text='Default' />
          <Button level='default' text='Rewards' brand='rewards' />
          <Button level='default' text='Disabled' disabled={true} />
          <Button level='default' text='Disabled' brand='rewards' disabled={true} />
        </ComponentTypes>
        <ComponentTypes>
          <Button level='primary' text='Default' />
          <Button level='primary' text='Rewards' brand='rewards' />
          <Button level='primary' text='Disabled' disabled={true} />
          <Button level='primary' text='Disabled' brand='rewards' disabled={true} />
        </ComponentTypes>
        <ComponentTypes>
          <Button level='secondary' text='Default' />
          <Button level='secondary' text='Rewards' brand='rewards' />
          <Button level='secondary' text='Disabled' disabled={true} />
          <Button level='secondary' text='Disabled' brand='rewards' disabled={true} />
        </ComponentTypes>
        <ComponentTypes>
          <Button level='tertiary' text='Default' />
          <Button level='tertiary' text='Rewards' brand='rewards' />
          <Button level='tertiary' text='Disabled' disabled={true} />
          <Button level='tertiary' text='Disabled' brand='rewards' disabled={true} />
        </ComponentTypes>
        <Spacer />
        <ComponentTypes>
          <Button size='small' level='default' text='Small' />
          <Button size='medium' level='default' text='Medium' />
          <Button size='large' level='default' text='Large' />
        </ComponentTypes>
        <Button size='call-to-action' level='default' text='Call to Action' />
        <ComponentTypes>
          <Button size='small' level='primary' text='Small' />
          <Button size='medium' level='primary' text='Medium' />
          <Button size='large' level='primary' text='Large' />
        </ComponentTypes>
        <Button size='call-to-action' level='primary' text='Call to Action' />
        <Spacer />
        <ComponentTypes>
          <Button icon={{ ...icon, position: 'before' }} size='small' level='primary' text='Small' />
          <Button icon={{ ...icon, position: 'before' }} size='medium' level='primary' text='Medium' />
          <Button icon={{ ...icon, position: 'before' }} size='large' level='primary' text='Large' />
        </ComponentTypes>
        <ComponentTypes>
          <Button icon={{ ...icon, position: 'after' }} size='small' level='default' text='Small' />
          <Button icon={{ ...icon, position: 'after' }} size='medium' level='default' text='Medium' />
          <Button icon={{ ...icon, position: 'after' }} size='large' level='default' text='Large' />
        </ComponentTypes>
      </div>
    )
  })
