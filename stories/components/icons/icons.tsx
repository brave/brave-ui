/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { storiesOf } from '@storybook/react'
import * as React from 'react'
// Components
import * as V1Icons from '../../../src/components/icons'
import * as V2Icons from '../../../src/components/icons_v2'
import * as Styled from './style'
import * as copy from 'copy-to-clipboard'

const svgSprite = require('./brave-icons-svg')

const book = storiesOf('Components/Icons', module)

const V1IconComponents: any[] = []
const V1IconExports: any = V1Icons
for (const componentName in V1Icons) {
  const Component = V1IconExports[componentName]
  V1IconComponents.push({ componentName, Component })
}

const V2IconComponents: any[] = []
const V2IconExports: any = V2Icons
for (const componentName in V2Icons) {
  const Component = V2IconExports[componentName]
  V2IconComponents.push({ componentName, Component })
}

book.add('v1', () => {
  return (
    <Styled.IconGrid>
      {V1IconComponents.map(({ componentName, Component }) => (
          <Styled.IconGridItem key={componentName} title={componentName}>
            <Styled.IconGridItemIcon><Component /></Styled.IconGridItemIcon>
            <Styled.IconGridItemTitle>{componentName}</Styled.IconGridItemTitle>
          </Styled.IconGridItem>
        ))}
    </Styled.IconGrid>
  )
})

const handleIconClick = (componentName: string) => () => {
  const spriteId = componentName.replace(/(\S)([A-Z])/g, '$1-$2').toLowerCase()
  copy(`<svg class="">
  <use href="#${spriteId}" />
</svg>`)
}

book.add('v2', () => {
  return (
    <Styled.IconGrid>
      {V2IconComponents.map(({ componentName, Component }) => (
          <Styled.IconGridItem key={componentName} title={'Click to copy'} onClick={handleIconClick(componentName)} style={{ cursor: 'pointer' }}>
            <Styled.IconGridItemIcon><Component /></Styled.IconGridItemIcon>
            <Styled.IconGridItemTitle>{componentName.replace(/([A-Z])/g, ' $1').trim()}</Styled.IconGridItemTitle>
          </Styled.IconGridItem>
        ))}
    </Styled.IconGrid>
  )
})

book.add('SVG Sprite File', () => {
  return (
    <pre>{svgSprite}</pre>
  )
})
