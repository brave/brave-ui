/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import * as React from 'react'

import * as styledTextComponents from './style'
import { UnknownPropValueError } from '../../../errors'

const sizes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'] as const

export interface Props {
  size?: Size
  type?: Type
  as?: Tag
  className?: string
  children?: React.ReactNode
  [key: string]: any
}

export type Size = typeof sizes[number]

export type Type = 'display' | 'body'

export type Tag = 'div' | 'span'

const DEFAULT_SIZE = '04'

const DEFAULT_TYPE = 'body'

const DEFAULT_TAG = 'div'

export default class Text extends React.PureComponent<Props, {}> {
  static displayName = 'Text'

  static defaultProps = {
    size: DEFAULT_SIZE,
    type: DEFAULT_TYPE,
    as: DEFAULT_TAG
  }

  render () {
    const { as, size, children, ...props } = this.props
    const name = `StyledText${size}` as keyof typeof styledTextComponents
    const StyledTextComponent = styledTextComponents[name]

    if (StyledTextComponent === undefined) {
      throw new UnknownPropValueError('size', size)
    }

    return <StyledTextComponent as={as} {...props}>{children}</StyledTextComponent>
  }
}
