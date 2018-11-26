/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'
import Heading from '../../../components/text/heading'

export const Title = styled(Heading)`
  font-weight: 500;
  font-size: 26px;
  margin: 0 0 20px 0;
`

export const SubTitle = styled(Heading)`
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0 10px 0;
`

export const Paragraph = styled<{}, 'p'>('p')`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.75;
  margin: 0;
  font-family: 'Muli', sans-serif;
  padding: 0 0 10px 0
`

export const SwitchLabel = styled<{}, 'label'>('label')`
  font-family: ${p => p.theme.fontFamily.body};
  color: ${p => p.theme.color.defaultControlActive};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  margin: 0 10px;
`
