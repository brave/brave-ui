/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
// @ts-ignore
import centered from '@storybook/addon-centered/dist'

import * as React from 'react'

// Components
import Table, { Cell, Row } from '../../src/components/dataTables/table'

storiesOf('Components/Data Tables', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
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
        content: 'Attention',
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
