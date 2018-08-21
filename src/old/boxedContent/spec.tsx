/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import BoxedContent from './index'

describe('boxedContent tests', () => {
  const baseComponent = (props?: object) => (
    <BoxedContent id='testBoxedContent' {...props} />
  )
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'toughBoxedContent'}))
      const assertion = wrapper.find('#toughBoxedContent').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have an id', () => {
      const wrapper = shallow(baseComponent({id: 'boxedThing'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('boxedThing')
    })
  })

  describe('theming', () => {
    it('allows theming the `maxWidth` property', () => {
      const component = baseComponent({customStyle: { maxWidth: '80%' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('max-width', '80%')
    })

    it('allows theming the `margin` property', () => {
      const component = baseComponent({customStyle: { margin: '10px 20px' } } )
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('margin', '10px 20px')
    })

    it('allows theming the `font-family` property', () => {
      const component = baseComponent({customStyle: { fontFamily: 'Verdana' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-family', 'Verdana')
    })

    it('allows theming the `color` property', () => {
      const component = baseComponent({customStyle: { color: 'yellow' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('color', 'yellow')
    })
  })
})
