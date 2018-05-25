/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Clock from '../clock'

describe('clock tests', () => {
  const baseComponent = (props?: object) => <Clock {...props} />
  describe('basic tests', () => {
    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'someId'}))
      const assertion = wrapper.find('#someId').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have an id', () => {
      const wrapper = shallow(baseComponent({id: 'whatClock'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('whatClock')
    })
  })

  describe('theming', () => {
    it('allows theming the `color` property', () => {
      const component = baseComponent({theme: { color: 'white' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('color', 'white')
    })
  })
})
