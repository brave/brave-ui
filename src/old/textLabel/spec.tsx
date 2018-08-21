/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import TextLabel from './index'

describe('textLabel tests', () => {
  const baseComponent = (props?: object) => (
    <TextLabel text='testText' {...props} />
  )

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'textLabel'}))
      const assertion = wrapper.find('#textLabel').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have an id', () => {
      const wrapper = shallow(baseComponent({id: 'textLabel'}))
      const assertion = wrapper.props().id
      expect(assertion).toEqual('textLabel')
    })

    it('can pass text', () => {
      const wrapper = shallow(baseComponent({text: 'w00t w00t'}))
      const assertion = wrapper.html().includes('w00t w00t')
      expect(assertion).toBe(true)
    })

    it('can respond to click', () => {
      const value = 'FANCY BROWSER TEXT CLICKED'
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
      const component = baseComponent({customStyle: { fontSize: '15px' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-size', '15px')
    })

    it('allows theming the `font-weight` property', () => {
      const component = baseComponent({customStyle: { fontWeight: 'bold' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('font-weight', 'bold')
    })

    it('allows theming the `padding` property', () => {
      const component = baseComponent({customStyle: { padding: '30px' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('padding', '30px')
    })

    it('allows theming the `line-height` property', () => {
      const component = baseComponent({customStyle: { lineHeight: '2' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('line-height', '2')
    })

    it('allows theming the `cursor` property', () => {
      const component = baseComponent({customStyle: { cursor: 'pointer' } })
      const tree = create(component).toJSON()
      expect(tree).toHaveStyleRule('cursor', 'pointer')
    })
  })
})

