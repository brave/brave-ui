/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Panel from './index'

describe('panel tests', () => {
  const baseComponent = (props?: object) => (
    <Panel id='testPanel' {...props} />
  )
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'toughPanel'}))
      const assertion = wrapper.find('#toughPanel').length
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
})
