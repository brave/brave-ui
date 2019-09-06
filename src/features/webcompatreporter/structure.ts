/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../theme'
import Button, { Props as ButtonProps } from '../../components/buttonsIndicators/button'
import { ComponentType } from 'react'

export const SideBySideButtons = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`

export const ModalLayout = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  min-height: 100px;
`

export const PaddedButton = styled(Button as ComponentType<ButtonProps>)`
  margin: 5px;
`

export const TextSection = styled<{}, 'div'>('div')`
  margin: 6px 0 !important;
`

export const IconTitle = styled<{}, 'div'>('div')`
  display: flex;
  flex-direction: row;
`
