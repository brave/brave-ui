/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

import * as React from 'react'
// Utils
import { BetterVisualizer } from '../storyUtil'

// Components
import Table, { Cell, Row } from '../../src/components/dataTables/table'

addDecorator(withKnobs)
addDecorator(BetterVisualizer)

storiesOf('Components/Data Tables', module)
  .add('Table',() => {
    const rowTheme = {
      'text-align': 'right',
      'padding-left': '9px'
    }

    const rows: Row[] = [
      {
        content: [
          {
            content: 'Baker'
          },
          {
            content: '40%',
            theme: rowTheme
          },
          {
            content: '4',
            theme: rowTheme
          }
        ]
      },
      {
        content: [
          {
            content: 'duckduckgo.com'
          },
          {
            content: '20%',
            theme: rowTheme
          },
          {
            content: '2',
            theme: rowTheme
          }
        ]
      }
    ]

    const header: Cell[] = [
      {
        content: 'Site visited'
      },
      {
        content: 'Attentions',
        theme: {
          'text-align': 'right'
        }
      },
      {
        content: 'Tokens',
        theme: {
          'text-align': 'right'
        }
      }
    ]

    return (
      <div style={{ width: '595px' }}>
        <Table
          header={object('Header', header)}
          rows={object('Rows', rows)}
        >
          404: Publishers not found :)
        </Table>
      </div>
    )
  })
