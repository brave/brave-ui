/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import 'jest-styled-components'

import { TestThemeProvider } from '../../../theme'
import { NullThemeProviderError, UnknownPropValueError } from '../../../errors'
import Text, { Props, Size, Type } from './index'

describe('Text tests', () => {
  const baseComponent = (props: Props = {}) => <Text {...props}>A browser with your interest at heart</Text>
  const baseComponentWithThemeProvider = (props: Props = {}) => <TestThemeProvider>
    {baseComponent(props)}
  </TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const defaultTree = create(baseComponentWithThemeProvider()).toJSON()
      const spanTagTree = create(baseComponentWithThemeProvider({ as: 'span' })).toJSON()
      const withOtherClassNameTree = create(baseComponentWithThemeProvider({ className: 'test' })).toJSON()

      expect(defaultTree).toMatchSnapshot()
      expect(spanTagTree).toMatchSnapshot()
      expect(withOtherClassNameTree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponentWithThemeProvider())
      const assertion = wrapper.find(Text.displayName)

      expect(assertion).toHaveLength(1)
    })
  })

  describe('component styling', () => {
    const sizes: [Size, number][] = [
      ['00', 10],
      ['01', 11],
      ['02', 12],
      ['03', 14],
      ['04', 16],
      ['05', 18],
      ['06', 22],
      ['07', 28],
      ['08', 38],
      ['09', 48],
      ['10', 60],
      ['11', 76]
    ]
    const types: [Type, string][] = [['body', 'Muli'], ['display', 'Poppins']]

    sizes.forEach(([size, value]) => {
      it(`should contain a rule "font-size: ${value}px" when size === "${size}"`, () => {
        const tree = create(baseComponentWithThemeProvider({ size })).toJSON()

        expect(tree).toHaveStyleRule('font-size', `${value}px`)
      })
    })

    types.forEach(([type, fontName]) => {
      it(`should contain a rule "font-family: ${fontName},sans-serif" when type === "${type}"`, () => {
        const tree = create(baseComponentWithThemeProvider({ type })).toJSON()

        expect(tree).toHaveStyleRule('font-family', `${fontName},sans-serif`)
      })
    })
  })

  describe('component error', () => {
    it('should throw an exception if passed an invalid size', () => {
      const size = '15' as Size
      const createComponent = () => create(baseComponentWithThemeProvider({ size }))

      expect(createComponent).toThrow(UnknownPropValueError)
    })

    it('should throw an exception if ThemeProvider is not define', () => {
      const createComponent = () => create(baseComponent())

      expect(createComponent).toThrow(NullThemeProviderError)
    })
  })
})
