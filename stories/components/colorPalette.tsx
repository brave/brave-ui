import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '../../src/components/style/theme'
import paletteColors from '../../src/components/style/color/colorPalette'
import themeBraveDefault from '../../src/components/style/theme/default'
import '../assets/fonts/muli.css'

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
  color: ${p => p.theme.fontFamily.heading};
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

const PaletteItem = ({ color, name, individual }: any) => (
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
for (const name in themeBraveDefault) {
  // @ts-ignore
  allBraveDefaultItems.push({ name, color: themeBraveDefault[name] })
}

storiesOf('Components', module)
.add('Color Palette', () => {
  return (
    <div>
      <div className='md'>
        <h1>Color Palette</h1>
        <h3>Define colors by color name and shade, not by purpose</h3>
        <h6>Avoid using directly. Instead use theme variables which link to these colors</h6>
        <br/>
      </div>
      <Palette>
        {allPalletteItems.map(({ color, name }: any) => <PaletteItem key={name} color={color} name={name} />)}
      </Palette>
    </div>
  )
})
