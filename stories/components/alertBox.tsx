import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBox } from '../../src/components'

storiesOf('Components', module)
  .add('AlertBox', () => {
    return (
      <AlertBox okString='Ok' cancelString='Cancel'>
        Content here
      </AlertBox>
    )
  })
