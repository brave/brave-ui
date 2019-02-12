/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'
import { StyledComponentClass } from 'styled-components'
import ArrowDown from './arrowDown'

import { ComponentType } from 'react'
import { ShieldAlertIcon } from '../../../components/icons'

export const ShieldIcon = styled(ShieldAlertIcon as ComponentType)`
  width: 36px;
  color: #C5C5D3;
`

// rotated variants
function RotatedIconComponent (
  iconComponent: StyledComponentClass<any, any>,
  degrees: number
) {
  return styled(iconComponent)`
    transform: rotate(${degrees}deg);
  `
}

export const ArrowDownIcon = ArrowDown
export const ArrowUpIcon = RotatedIconComponent(ArrowDown, 180)
