import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CButton, { Props } from '../../src/components/button'
import styled from '../../src/theme'
import { CheckCircleIcon } from '../../src/components/icons'

const Button = styled(CButton as React.ComponentType<Props>)`
  margin: 10px;
`

Button.displayName = CButton.displayName

const ComponentTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
const icon = {
  image: <CheckCircleIcon />
}

storiesOf('Components', module)
.add('Button', () => {
  return (
  <div>
    <Button text='A Button' />
    <ComponentTypes>
      <Button level='primary' text='Primary' />
      <Button level='secondary' text='Secondary' />
      <Button level='tertiary' text='Tertiary' />
    </ComponentTypes>
    <ComponentTypes>
      <Button level='primary' type='default' text='Default' />
      <Button level='primary' type='accent' text='Accent' />
      <Button level='primary' type='warn' text='warn' />
      <Button level='primary' type='subtle' text='Subtle' />
      <Button level='primary' type='accent' text='Disabled' disabled={true} />
    </ComponentTypes>
    <ComponentTypes>
      <Button level='secondary' type='default' text='Default' />
      <Button level='secondary' type='accent' text='Accent' />
      <Button level='secondary' type='warn' text='warn' />
      <Button level='secondary' type='subtle' text='Subtle' />
      <Button level='secondary' type='accent' text='Disabled' disabled={true} />
    </ComponentTypes>
    <ComponentTypes>
      <Button level='tertiary' type='default' text='Default' />
      <Button level='tertiary' type='accent' text='Accent' />
      <Button level='tertiary' type='warn' text='warn' />
      <Button level='tertiary' type='subtle' text='Subtle' />
      <Button level='tertiary' type='accent' text='Disabled' disabled={true} />
    </ComponentTypes>
    <ComponentTypes>
      <Button level='primary' type='accent' text='Brave' />
      <Button level='primary' type='accent' brand='rewards' text='Rewards' />
    </ComponentTypes>
    <ComponentTypes>
      <Button size='small' level='primary' type='default' text='Small' />
      <Button size='medium' level='primary' type='accent' text='Medium' />
      <Button size='large' level='primary' type='warn' text='Large' />
    </ComponentTypes>
    <Button size='call-to-action' level='primary' type='subtle' text='Call to Action' />
    <ComponentTypes>
      <Button size='small' level='secondary' type='default' text='Small' />
      <Button size='medium' level='secondary' type='accent' text='Medium' />
      <Button size='large' level='secondary' type='warn' text='Large' />
    </ComponentTypes>
    <Button size='call-to-action' level='secondary' type='subtle' text='Call to Action' />
    <ComponentTypes>
      <Button size='small' level='tertiary' type='default' text='Small' />
      <Button size='medium' level='tertiary' type='accent' text='Medium' />
      <Button size='large' level='tertiary' type='warn' text='Large' />
    </ComponentTypes>
    <Button size='call-to-action' level='tertiary' type='subtle' text='Call to Action' />
    <ComponentTypes>
      <Button size='small' level='primary' type='default' text='Small' />
      <Button size='medium' level='primary' type='accent' text='Medium' />
      <Button size='large' level='primary' type='warn' text='Large' />
    </ComponentTypes>
    <ComponentTypes>
      <Button icon={{ ...icon, position: 'before' }} size='small' level='primary' type='default' text='Small' />
      <Button icon={{ ...icon, position: 'before' }} size='medium' level='primary' type='accent' text='Medium' />
      <Button icon={{ ...icon, position: 'before' }} size='large' level='primary' type='warn' text='Large' />
    </ComponentTypes>
    <ComponentTypes>
      <Button icon={{ ...icon, position: 'after' }} size='small' level='secondary' type='default' text='Small' />
      <Button icon={{ ...icon, position: 'after' }} size='medium' level='secondary' type='accent' text='Medium' />
      <Button icon={{ ...icon, position: 'after' }} size='large' level='secondary' type='warn' text='Large' />
    </ComponentTypes>
  </div>
  )
})
