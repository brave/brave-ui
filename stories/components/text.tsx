import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { Heading } from '../../src/components'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Heading', () => {
    const label = 'Level'
    const defaultValue = 1
    const options = {
      range: true,
      min: 1,
      max: 6,
      step: 1
    }
    return (
      <div>
        <Heading level={number(label, defaultValue, options)}>
          {text('Text', 'Use the knobs to adjust me')}
        </Heading>
        <br />
        <br />
        <Heading level={1}>Heading level 1</Heading>
        <Heading level={2}>Heading level 2</Heading>
        <Heading level={3}>Heading level 3</Heading>
        <Heading level={4}>Heading level 4</Heading>
        <Heading level={5}>Heading level 5</Heading>
        <Heading level={6}>Heading level 6</Heading>
      </div>
    )
  })
