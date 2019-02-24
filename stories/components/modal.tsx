import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'

// Components
import { Modal } from '../../src/components'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Modal', withState({ visible: true }, (store) => {
    const onClose = () => {
      store.set({ visible: !store.state.visible })
    }
    return (
      <>
        {
          boolean('Visible', store.state.visible)
          ? <Modal
            id={'modal'}
            outsideClose={boolean('Close with click outside', false)}
            onClose={onClose}
          >
            Content
          </Modal>
          : null
        }
      </>
    )
  }))
