/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'

// Utils
import { BetterVisualizer } from '../storyUtil'

// Components
import { Modal } from '../../src/components'

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

storiesOf('Components/Popups and Modals', module)
  .add('Dialog', withState({ visible: true }, (store) => {
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
