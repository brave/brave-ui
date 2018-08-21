/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Table from './index'
import { TestThemeProvider } from '../../../theme'

describe('Table tests', () => {
  const baseComponent = (props?: object) => <TestThemeProvider><Table id='list' {...props} /></TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#list').length
      expect(assertion).toBe(1)
    })
  })
})
