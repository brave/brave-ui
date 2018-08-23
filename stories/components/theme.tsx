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
import styled from '../../src/theme'
import paletteColors from '../../src/theme/palette'
import themeBraveDefault from '../../src/theme/brave-default'
import '../assets/fonts/muli.css'

// wrappers
const PaletteItemContainer = styled.div`
  width: ${(p: any) => p.individual ? '25%' : '10%'};
  min-height: 150px;
  margin: 5px;
  border-radius: 2px;
  background: white;
  padding: 2px;
  display: flex;
  flex-direction: column;
` as any

const PaletteColor = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  background-color: ${p => p.color};
`

const PaletteItemName = styled.div`
  font: 12px muli;
  font-weight: 500;
  color: #222;
  text-align: center;
`

const PaletteItem = ({ color, name, individual }: any) => (
  <PaletteItemContainer individual={individual}>
    <PaletteColor color={color} />
    <PaletteItemName>{name}</PaletteItemName>
  </PaletteItemContainer>
) as any

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

const Palette = styled.div`
  display: flex;
  flex-direction: ${(p: any) => p.individual ? 'column' : 'row'};
  flex-wrap: wrap;
  align-items: flex-start;
` as any

const sectionOptionsNoProps = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
}

setAddon(chaptersAddon)
storiesOf('Theme', module)
  // @ts-ignore
.addWithChapters('Palette', {
  subtitle: 'Define colors by color name and shade, not by purpose',
  chapters: [
    {
      title: 'All colors',
      info: '_Avoid using directly. Instead use theme variables which link to these colors_',
      sections: [{
        sectionFn: () => (
          <Palette>
          {allPalletteItems.map(({ color, name }: any) => <PaletteItem key={name} color={color} name={name} />)}
          </Palette>
        ),
        sectionOptionsNoProps
      }]
    }
  ]
})
.addWithChapters('Brave Default', {
  subtitle: 'Define colors, fonts, and sizes by purpose. Keys should not describe the value, but what they are to be used for.',
  chapters: [
    {
      title: 'Color variables',
      sections: [{
        sectionFn: () => (
          <Palette individual={true}>
          {allBraveDefaultItems.map(({ color, name }: any) => <PaletteItem individual={true} key={name} color={color} name={name} />)}
          </Palette>
        ),
        sectionOptionsNoProps
      }]
    }
  ]
})
