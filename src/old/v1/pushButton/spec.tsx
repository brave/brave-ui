/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { PushButton } from './index'

describe('pushButton tests', () => {
  const baseComponent = (props?: object) => (<PushButton {...props} />)

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'pushButton'}))
      const assertion = wrapper.find('#pushButton').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have a custom label', () => {
      const wrapper = shallow(<PushButton>NESPRESSO</PushButton>)
      const assertion = wrapper.html().includes('NESPRESSO')
      expect(assertion).toBe(true)
    })

    it('can be disabled', () => {
      const wrapper = shallow(baseComponent({disabled: true}))
      const assertion = wrapper.props().disabled
      expect(assertion).toBe(true)
    })

    it('defaults to the default button', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.props().color
      expect(assertion).toBe('default')
    })

    it('can be set as primary', () => {
      const wrapper = shallow(baseComponent({color: 'primary'}))
      const assertion = wrapper.props().color
      expect(assertion).toBe('primary')
    })

    it('can be set as secondary', () => {
      const wrapper = shallow(baseComponent({color: 'secondary'}))
      const assertion = wrapper.props().color
      expect(assertion).toBe('secondary')
    })

    it('can respond to click', () => {
      const value = 'FANCY BUTTON CLICKED'
      const onClick = jest.fn()
      const wrapper = shallow(baseComponent({onClick}))
      wrapper.simulate('click', value)
      expect(onClick).toBeCalledWith(value)
    })
  })
})
