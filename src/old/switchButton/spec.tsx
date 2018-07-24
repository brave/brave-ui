/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import SwitchButton from './index'

describe('switchButton tests', () => {
  const baseComponent = (props?: object) => (
    <SwitchButton id='switchButton' checked={false} {...props} />
  )

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'switchButtonId'}))
      const assertion = wrapper.find('#switchButtonId').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can be checked', () => {
      const wrapper = shallow(baseComponent({checked: true}))
      const assertion = wrapper.find('#switchButton').props().checked
      expect(assertion).toEqual(true)
    })

    it('can be unchecked', () => {
      const wrapper = shallow(baseComponent({checked: false}))
      const assertion = wrapper.find('#switchButton').props().checked
      expect(assertion).toEqual(false)
    })

    it('can be disabled', () => {
      const wrapper = shallow(baseComponent({disabled: true}))
      const assertion = wrapper.find('#switchButton').props().disabled
      expect(assertion).toBe(true)
    })

    it('can be set as read-only', () => {
      const wrapper = shallow(baseComponent({readOnly: true}))
      const assertion = wrapper.find('#switchButton').props().readOnly
      expect(assertion).toBe(true)
    })

    it('can have autoFocus', () => {
      const wrapper = shallow(baseComponent({autoFocus: true}))
      const assertion = wrapper.find('#switchButton').props().autoFocus
      expect(assertion).toBe(true)
    })

    it('can have left text as label', () => {
      const wrapper = shallow(baseComponent({leftText: 'LEFT TEXT FTW'}))
      const assertion = wrapper.html().includes('LEFT TEXT FTW')
      expect(assertion).toBe(true)
    })

    it('can have right text as label', () => {
      const wrapper = shallow(baseComponent({rightText: 'RIGHT TEXT FTW'}))
      const assertion = wrapper.html().includes('RIGHT TEXT FTW')
      expect(assertion).toBe(true)
    })

    it('can respond to onChange', () => {
      const value = {target: { checked: true }}
      const onChange = jest.fn()
      const wrapper = shallow(baseComponent({onChange}))
      wrapper.find('#switchButton').simulate('change', value)
      expect(onChange).toBeCalledWith(value)
    })
  })
})
