/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import {
  Overlay,
  WarningModal,
  WarningIcon,
  WarningText
} from '../../../../../../src/features/shields'

// Shared components
import Button from '../../../../../../src/components/buttonsIndicators/button'
import { Card } from '../../../../../../src/components'

// Helpers
import { getLocale } from '../../../fakeLocale'

interface Props {
  onConfirm: () => void
}

export default class WebCompatWarning extends React.PureComponent<Props, {}> {
  render () {
    const { onConfirm } = this.props
    return (
      <Overlay>
        <Card>
          <WarningModal>
            <WarningIcon />
            <WarningText>
              {getLocale('webCompatWarning')}
            </WarningText>
            <Button
              level='primary'
              onClick={onConfirm}
              text={getLocale('gotIt')}
            />
          </WarningModal>
        </Card>
      </Overlay>
    )
  }
}
