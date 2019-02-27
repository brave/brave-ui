import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from '../../src/components/style/theme'

// Components
import * as AllIcons from '../../src/components/icons'

// Styles
const IconGrid = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`

const IconGridItem = styled.div`
  max-width: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 8px
`

const IconGridItemTitle = styled.div`
  flex: none;
  font: 600 10px Muli;
  color: #424242;
  padding: 4px;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const IconGridItemIcon = styled.div`
  flex: 1;
  color: #424242;
  padding: 18px;
`

// Story
const AllIconComponents: any[] = []
const AllIconExports: any = AllIcons
for (const componentName in AllIcons) {
  const Component = AllIconExports[componentName]
  AllIconComponents.push({ componentName, Component })
}

storiesOf('Components', module)
.add('Icons', () => {
  return (
    <IconGrid>
      {AllIconComponents.map(({ componentName, Component }) => (
          <IconGridItem title={componentName}>
            <IconGridItemIcon><Component /></IconGridItemIcon>
            <IconGridItemTitle>{componentName}</IconGridItemTitle>
          </IconGridItem>
        ))}
    </IconGrid>
  )
})
