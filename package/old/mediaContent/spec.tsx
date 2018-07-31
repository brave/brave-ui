/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import MediaContent from './index'

describe('mediaContent tests', () => {
  const baseComponent = (props?: object) => (
    <MediaContent id='testMediaContent' {...props} />
  )

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'toughMediaContent'}))
      const assertion = wrapper.find('#toughMediaContent').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have an id', () => {
      const wrapper = shallow(baseComponent({id: 'mediaThing'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('mediaThing')
    })
  })

  describe('theming', () => {
    it('allows theming the `width` property', () => {
      // TODO
    })

    it('allows theming the `margin` property', () => {
      // TODO
    })
  })
})
