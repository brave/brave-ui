/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledTH, StyledNoContent, StyledTable, StyledTD } from './style'

export interface Cell {
  theme?: {[key: string]: string},
  content: React.ReactNode
}

export interface Props {
  id?: string
  header?: Cell[]
  children?: React.ReactNode
  rows?: Cell[][]
}

export default class Table extends React.PureComponent<Props, {}> {
  render () {
    const { id, header, rows, children } = this.props

    return (
      <StyledWrapper id={id}>
        {
          rows && rows.length > 0 || header && header.length > 0
          ? <StyledTable>
            {
              header
              ? <thead>
                <tr>
                {
                  header.map((cell: Cell, i: number) => {
                    return <StyledTH key={`${id}-th-${i}`} theme={cell.theme}>{cell.content}</StyledTH>
                  })
                }
                </tr>
              </thead>
              : null
            }
            {
              rows
              ? <tbody>
                {
                  rows.map((row: Cell[], i: number) =>
                     <tr key={i}>
                      {
                        row && row.map((cell: Cell, j: number) => {
                          return <StyledTD key={`${id}-td-${i}-${j}`} theme={cell.theme}>{cell.content}</StyledTD>
                        })
                      }
                    </tr>
                  )
                }
              </tbody>
              : null
            }
          </StyledTable>
          : <StyledNoContent>
            {children}
          </StyledNoContent>
        }
      </StyledWrapper>
    )
  }
}
