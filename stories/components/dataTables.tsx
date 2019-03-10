/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

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
            customStyle: rowTheme
          },
          {
            content: '4',
            customStyle: rowTheme
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
            customStyle: rowTheme
          },
          {
            content: '2',
            customStyle: rowTheme
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
        customStyle: {
          'text-align': 'right'
        }
      },
      {
        content: 'Tokens',
        customStyle: {
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
