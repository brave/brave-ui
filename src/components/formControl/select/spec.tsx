/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Select from './index'
import { TestThemeProvider } from '../../../theme'

describe('Select tests', () => {
  const baseComponent = (props?: object) => (
    <TestThemeProvider>
      <Select id='select' onChange={() => false}>
        <div data-value='0'>01</div>
        <div data-value='1'>11</div>
        <div data-value='2'>12</div>
      </Select>
    </TestThemeProvider>
  )
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#select').length
      expect(assertion).toBe(1)
    })
  })
})
