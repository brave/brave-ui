import * as React from 'react'
import { storiesOf } from '@storybook/react'
import CButton, { Props } from '../../src/components/button'
import styled from '../../src/components/style/theme'
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
const Spacer = styled.div`
  padding: 24px 0;
`
const icon = {
  image: <CheckCircleIcon />
}

storiesOf('Components', module)
.add('Button', () => {
  return (
  <div>
    <div className='md'>
      <h1>Button</h1>
      <p>Use when requiring the user to take an action. Different types of buttons setup different user expectations about the button action.</p>
    </div>
    <Spacer />
    <Button text='A Button' />
    <Spacer />,
    <div className='md'>
      <h2>Levels</h2>
      <p>Use different levels to create a hierarchy of importance</p>
    </div>
    <Spacer />
    <ComponentTypes>
      <Button level='primary' text='Primary' />
      <Button level='secondary' text='Secondary' />
      <Button level='tertiary' text='Tertiary' />
    </ComponentTypes>
    <Spacer />
    <div className='md'>
      <h2>Types</h2>
      <p>Let the user know what the effect of the interaction will be</p>
    </div>
    <Spacer />
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
    <Spacer />
    <div className='md'>
      <h2>Accent Brands</h2>
      <p>Optional accents</p>
    </div>
    <Spacer />
    <ComponentTypes>
      <Button level='primary' type='accent' text='Brave' />
      <Button level='primary' type='accent' brand='rewards' text='Rewards' />
    </ComponentTypes>
    <Spacer />
    <div className='md'>
      <h2>Sizes</h2>
      <p>Use size to match the density of information.</p>
    </div>
    <Spacer />
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
    <Spacer />
    <div className='md'>
      <h2>Icons</h2>
      <p>Each button can have a single icon.</p>
    </div>
    <Spacer />
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
