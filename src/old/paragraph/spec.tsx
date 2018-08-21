/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Paragraph from './index'

describe('paragraph tests', () => {
  const baseComponent = (props?: object) => (
    <Paragraph id='testParagraph' {...props} />
  )
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'toughParagraph'}))
      const assertion = wrapper.find('#toughParagraph').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have an id', () => {
      const wrapper = shallow(baseComponent({id: 'boxedThing'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('boxedThing')
    })

    it('can pass text', () => {
      const wrapper = shallow(baseComponent({text: 'what else'}))
      const assertion = wrapper.html().includes('what else')
      expect(assertion).toBe(true)
    })
  })

  describe('theming', () => {
    it('allows theming the `color` property', () => {
      const component = baseComponent({customStyle: { color: 'orange' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('color', 'orange')
    })

    it('allows theming the `font-size` property', () => {
      const component = baseComponent({customStyle: { fontSize: '12px' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-size', '12px')
    })

    it('allows theming the `font-weight` property', () => {
      const component = baseComponent({customStyle: { fontWeight: 'bold' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-weight', 'bold')
    })

    it('allows theming the `font-style` property', () => {
      const component = baseComponent({customStyle: { fontStyle: 'italic' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-style', 'italic')
    })

    it('allows theming the `margin` property', () => {
      const component = baseComponent({customStyle: { margin: '0 0 10px 0' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('margin', '0 0 10px 0')
    })
  })
})
