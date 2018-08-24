/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Checkbox from './index'
import { TestThemeProvider } from '../../../theme'

describe('Checkbox tests', () => {
  const baseComponent = (props?: object) => <TestThemeProvider><Checkbox id='toggle' {...props} /></TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#toggle').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can be checked', () => {
      const wrapper = shallow(baseComponent({checked: true}))
      const assertion = wrapper.find('#toggle').props().checked
      expect(assertion).toEqual(true)
    })

    it('can be unchecked', () => {
      const wrapper = shallow(baseComponent({checked: false}))
      const assertion = wrapper.find('#toggle').props().checked
      expect(assertion).toEqual(false)
    })

    it('can be disabled', () => {
      const wrapper = shallow(baseComponent({disabled: true}))
      const assertion = wrapper.find('#toggle').props().disabled
      expect(assertion).toBe(true)
    })

    it('can respond to onClick', () => {
      const onToggle = jest.fn()
      const wrapper = mount(baseComponent({onToggle}))
      const value = {target: { checked: true }}
      wrapper.find('[data-test-id="toggle"]').first().simulate('click', value)
      expect(onToggle).toHaveBeenCalledTimes(1)
      const callValue = onToggle.mock.calls[0][0]
      console.log(callValue.target)
      expect(callValue).toMatchObject(value)
    })
  })
})
