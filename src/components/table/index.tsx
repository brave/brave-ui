/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledTH, StyledNoContent, StyledTable, StyledTD, StyledTR } from './style'

export interface Cell {
  customStyle?: {[key: string]: string}
  content: React.ReactNode
}

export interface Row {
  customStyle?: {[key: string]: string}
  content: Cell[]
}

export interface Props {
  id?: string
  header?: Cell[]
  children?: React.ReactNode
  rows?: Row[]
  rowTheme?: {[key: string]: string}
}

export default class Table extends React.PureComponent<Props, {}> {
  render () {
    const { id, header, rows, children } = this.props

    return (
      <div id={id}>
        {
          header && header.length > 0
          ? <StyledTable>
            {
              header
              ? <thead>
                <tr>
                {
                  header.map((cell: Cell, i: number) => {
                    return <StyledTH key={`${id}-th-${i}`} customStyle={cell.customStyle}>{cell.content}</StyledTH>
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
                  rows.map((row: Row, i: number) =>
                     <StyledTR key={i} customStyle={row.customStyle}>
                      {
                        row.content.map((cell: Cell, j: number) => {
                          return <StyledTD key={`${id}-td-${i}-${j}`} customStyle={cell.customStyle}>{cell.content}</StyledTD>
                        })
                      }
                    </StyledTR>
                  )
                }
              </tbody>
              : null
            }
          </StyledTable>
          : null
        }
        {
          !rows || rows.length === 0
          ? <StyledNoContent>
            {children}
          </StyledNoContent>
          : null
        }
      </div>
    )
  }
}
