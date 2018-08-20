/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'

import * as React from 'react'
import { withState } from '@dump247/storybook-state'

// Components
import { Tabs, Column, Grid, Card } from '../../src/components'

storiesOf('Components/Layout', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Tabs', withState({ tabId: 'cont1' }, (store) => {
    const onChange = (tabId: string) => {
      store.set({ tabId })
    }

    return (
      <div style={{ maxWidth: '900px', background: '#fff', padding: '30px' }}>
        <Tabs
          activeTabId={store.state.tabId}
          onChange={onChange}
        >
          <div data-key='cont1' data-title={'Content 1'}>
            1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor incidunt laudantium magnam maiores molestias
            numquam quae quas tempore. Accusamus animi aperiam aspernatur autem commodi cumque cupiditate dignissimos
            dolore eius exercitationem fuga modi molestiae natus nemo nesciunt nihil nisi nobis obcaecati quasi quibusdam,
            sunt tempora temporibus ut veniam vitae! Exercitationem, possimus?
          </div>
          <div data-key='cont2' data-title={'Content 2'}>
            2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus dolores eaque eius
            eligendi error, et eveniet ex facere facilis fugit harum id in nesciunt non odit officia pariatur
            placeat porro, quam quisquam quos recusandae saepe totam. Ipsa nam nulla obcaecati perspiciatis
            saepe ullam. Aliquid amet architecto consequuntur dolor dolorem doloribus, eaque explicabo illum
            nam numquam quia quis voluptatem.
          </div>
          <div data-key='cont3' data-title={'Content 3'}>
            3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolore eaque eveniet
            fuga illo molestiae natus, officiis qui quia sit soluta sunt veniam. Dolorum eveniet illum
            quibusdam ratione temporibus tenetur voluptatum. Ab alias assumenda earum expedita odio tempore vitae?
          </div>
        </Tabs>
      </div>
    )
  }))
  .add('Grid List', () => {
    const options = {}

    Array.from({ length: 12 }, (v, i) => i + 1).forEach(size =>
      Object.assign(options, { [size.toString()]: size })
    )

    const label1 = 'Column #1 size'
    const defaultValue1 = 3
    const value1 = select(label1, options, defaultValue1)

    const label2 = 'Column #2 size'
    const defaultValue2 = 9
    const value2 = select(label2, options, defaultValue2)

    return (
      <div>
        <h2>Playground! (see "knobs" for usage)</h2>
        <Grid
          customStyle={{
            backgroundColor: text('Grid Background', 'gray'),
            maxWidth: text('Max Grid Width', '100%'),
            padding: text('Own Grid Gutter (padding)', '15px'),
            gridGap: text('Grid Gutter (for columns)', '15px')
          }}
        >
          <Column
            size={value1}
            customStyle={{
              backgroundColor: text('Column #1 Background', 'darkgray'),
              justifyContent: text('Column #1 Align (flexbox-based)', 'flex-end'),
              alignItems: text(
                'Column #1 Vertical Align (flexbox-based)',
                'flex-end'
              )
            }}
          >
            {`${value1}/12`}
          </Column>
          <Column
            size={value2}
            customStyle={{
              backgroundColor: text('Column #2 Background', 'darkgray'),
              justifyContent: text('Column #1 Align (flexbox-based)', 'flex-start'),
              alignItems: text(
                'Column #1 Vertical Align (flexbox-based)',
                'flex-start'
              )
            }}
          >
            {`${value2}/12`}
          </Column>
        </Grid>
      </div>
    )
  })
  .add('Card', () => {
    return (
      <Card>
        <p>Hello I'm a card!</p>
      </Card>
    )
  })
