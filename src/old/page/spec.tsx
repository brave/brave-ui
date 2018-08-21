/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Page from './index'

describe('page tests', () => {
  const baseComponent = (props?: object) => (
    <Page id='testPage' {...props} />
  )

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'toughPage'}))
      const assertion = wrapper.find('#toughPage').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have an id', () => {
      const wrapper = shallow(baseComponent({id: 'boxedThing'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('boxedThing')
    })

    it('can have a custom title', () => {
      const wrapper = shallow(baseComponent({title: 'here comes the sun'}))
      const assertion = wrapper.props().title
      expect(assertion).toBe('here comes the sun')
    })

    it('can have a custom label', () => {
      const wrapper = shallow(baseComponent({label: 'beta'}))
      const assertion = wrapper.props().label
      expect(assertion).toBe('beta')
    })
  })

  describe('theming', () => {
    it('allows theming the `font-family` property', () => {
      const component = baseComponent({customStyle: { fontFamily: 'Helvetica' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-family', 'Helvetica')
    })

    it('allows theming the `color` property', () => {
      const component = baseComponent({customStyle: { color: 'pink' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('color', 'pink')
    })

    it('allows theming the `padding` property', () => {
      const component = baseComponent({customStyle: { padding: '30px' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('padding', '30px')
    })

    it('allows theming the `background` property', () => {
      const component = baseComponent({customStyle: { background: 'purple' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('background', 'purple')
    })
  })
})
