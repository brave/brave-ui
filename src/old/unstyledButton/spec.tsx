/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import UnstyledButton from './index'

describe('unstyledButton tests', () => {
  const baseComponent = (props?: object) => <UnstyledButton {...props} />

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'unstyledButton'}))
      const assertion = wrapper.find('#unstyledButton').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can pass text', () => {
      const wrapper = shallow(baseComponent({text: 'NESPRESSO'}))
      const assertion = wrapper.html().includes('NESPRESSO')
      expect(assertion).toBe(true)
    })

    it('can respond to click', () => {
      const value = 'NESPRESSIFIED ACTION BUTTON CLICKED'
      const onClick = jest.fn()
      const wrapper = shallow(baseComponent({onClick}))
      wrapper.simulate('click', value)
      expect(onClick).toBeCalledWith(value)
    })
  })

  describe('theming', () => {
    it('allows theming the `color` property', () => {
      const component = baseComponent({customStyle: { color: 'orange' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('color', 'orange')
    })

    it('allows theming the `font-size` property', () => {
      const component = baseComponent({customStyle: { fontSize: '14px' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-size', '14px')
    })

    it('allows theming the `user-select` property', () => {
      const component = baseComponent({customStyle: { userSelect: 'none' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('user-select', 'none')
    })
  })
})
