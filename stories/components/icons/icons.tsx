/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { storiesOf } from '@storybook/react'
import * as React from 'react'
// Components
import * as AllIcons from '../../../src/components/icons'
import * as Styled from './style'

const book = storiesOf('Components/Icons', module)

const AllIconComponents: any[] = []
const AllIconExports: any = AllIcons
for (const componentName in AllIcons) {
  const Component = AllIconExports[componentName]
  AllIconComponents.push({ componentName, Component })
}

book.add('All Icons', () => {
  return (
    <Styled.IconGrid>
      {AllIconComponents.map(({ componentName, Component }) => (
          <Styled.IconGridItem key={componentName} title={componentName}>
            <Styled.IconGridItemIcon><Component /></Styled.IconGridItemIcon>
            <Styled.IconGridItemTitle>{componentName}</Styled.IconGridItemTitle>
          </Styled.IconGridItem>
        ))}
    </Styled.IconGrid>
  )
})
