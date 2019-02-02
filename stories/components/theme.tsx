/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
// Storybook requires
import { storiesOf, setAddon } from '@storybook/react'
// import { withKnobs, boolean, select } from '@storybook/addon-knobs'
// @ts-ignore
import chaptersAddon from 'react-storybook-addon-chapters'

// Components
import styled from '../../src/components/style/theme'
import paletteColors from '../../src/components/style/color/colorPalette'
import theme from '../../src/components/style/theme/default'
import '../assets/fonts/muli.css'

// wrappers
const Palette = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(10, 1fr);
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }
` as any

const PaletteItemContainer = styled.div`
  min-height: 150px;
  background: white;
  padding: 4px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
` as any

const PaletteColor = styled.div`
  display: flex;
  height: 80px;
  background-color: ${p => p.color};
`

const PaletteItemName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.fontFamily.heading};
  text-align: center;
  margin: 8px 0 4px;
  overflow: auto;
`

const PaletteItemHex = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: grey800;
  text-align: center;
  text-transform: uppercase;
  margin: 4px 0 8px;
`

const PaletteItem = ({ color, name, individual }: any) =>
  (
    <PaletteItemContainer individual={individual}>
      <PaletteColor color={color} />
      <PaletteItemName>{name}</PaletteItemName>
      <PaletteItemHex>{color}</PaletteItemHex>
    </PaletteItemContainer>
  ) as any

const allPalletteItems: any = []
for (const name in paletteColors) {
  // @ts-ignore
  allPalletteItems.push({ name, color: paletteColors[name] })
}

const allBraveDefaultItems: any = []
for (const name in theme) {
  // @ts-ignore
  allBraveDefaultItems.push({ name, color: theme[name] })
}

// for (const name in theme.base) {
//   // @ts-ignore
//   allBraveDefaultItems.push({ name, color: theme.base[name] })
// }

const sectionOptionsNoProps = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
}

setAddon(chaptersAddon)
storiesOf('Components/Style', module)
  // @ts-ignore
  .addWithChapters('Colors', {
    chapters: [
      {
        title: 'Color Palette',
        info:
          'Avoid using directly. Instead use theme variables which link to these colors',
        sections: [
          {
            sectionFn: () => (
              <Palette>
                {allPalletteItems.map(({ color, name }: any) => (
                  <PaletteItem key={name} color={color} name={name} />
                ))}
              </Palette>
            ),
            sectionOptionsNoProps
          }
        ]
      }
    ]
  })
