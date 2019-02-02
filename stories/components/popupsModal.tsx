/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'

// Components
import { Modal, AlertBox } from '../../src/components'

storiesOf('Components/Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Dialog', withState({ visible: true }, (store) => {
    const onClose = () => {
      store.set({ visible: !store.state.visible })
    }

    return (
      <>
        {
          boolean('Visible', store.state.visible) ?
            <Modal
              id={'modal'}
              outsideClose={boolean('Close with click outside', false)}
              onClose={onClose}
            />
            : null
        }
      </>
    )
  }))
  .add('AlertBox', () => {
    return (
      <AlertBox okString='Ok' cancelString='Cancel'>
        Content here
      </AlertBox>
    )
  })
