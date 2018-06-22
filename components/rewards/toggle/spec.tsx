/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Checkbox from './index'

describe('Checkbox tests', () => {
  const baseComponent = (props?: object) => <Checkbox id='checkbox' {...props} />

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#checkbox').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can be checked', () => {
      const wrapper = shallow(baseComponent({checked: true}))
      const assertion = wrapper.find('#checkbox').props().checked
      expect(assertion).toEqual(true)
    })

    it('can be unchecked', () => {
      const wrapper = shallow(baseComponent({checked: false}))
      const assertion = wrapper.find('#checkbox').props().checked
      expect(assertion).toEqual(false)
    })

    it('can be disabled', () => {
      const wrapper = shallow(baseComponent({disabled: true}))
      const assertion = wrapper.find('#checkbox').props().disabled
      expect(assertion).toBe(true)
    })

    it('can respond to onClick', () => {
      const value = {target: { checked: true }}
      const onClick = jest.fn()
      const wrapper = shallow(baseComponent({onClick}))
      wrapper.find('#checkbox').simulate('click', value)
      expect(onClick).toBeCalledWith(value)
    })
  })
})
