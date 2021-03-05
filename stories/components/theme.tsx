/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '../../src/theme'
import paletteColors from '../../src/theme/colors'
import themeBraveDefault from '../../src/theme/brave-default'

const Palette = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(10, 1fr);
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const PaletteItemContainer = styled.div`
  min-height: 150px;
  background: white;
  padding: 4px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`

const PaletteColor = styled.div`
  display: flex;
  height: 80px;
  background-color: ${p => p.color};
`

const PaletteItemName = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 8px 0 4px;
  overflow: auto;
`

const PaletteItemHex = styled.div`
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 4px 0 8px;
`

const PaletteItem = ({ color, name, individual }: any) => (
  <PaletteItemContainer individual={individual}>
    <PaletteColor color={color} />
    <PaletteItemName>{name}</PaletteItemName>
    <PaletteItemHex>{color}</PaletteItemHex>
  </PaletteItemContainer>
)

const allPalletteItems: any = []
for (const name in paletteColors) {
  // @ts-ignore
  allPalletteItems.push({ name, color: paletteColors[name] })
}

const allBraveDefaultItems: any = []
for (const name in themeBraveDefault.color) {
  // @ts-ignore
  allBraveDefaultItems.push({ name, color: themeBraveDefault.color[name] })
}

storiesOf('Theme', module)
  .add('Colors', () => {
    return (
      <Palette>
        {allPalletteItems.map(({ color, name }: any) => <PaletteItem key={name} color={color} name={name} />)}
      </Palette>
    )
  })

  .add('Theme Variables', () => {
    return (
      <Palette individual={true}>
        {allBraveDefaultItems.map(({ color, name }: any) =>
          <PaletteItem individual={true} key={name} color={color} name={name} />)}
      </Palette>
    )
  })
