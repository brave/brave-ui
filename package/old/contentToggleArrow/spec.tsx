/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ContentToggleArrow from './index'

describe('contentToggleArrow tests', () => {
  const baseComponent = (props?: object) => (
    <ContentToggleArrow id='testContentToggleArrow' summary='testSummary' {...props} />
  )

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({id: 'testContentToggleArrowId'}))
      const assertion = wrapper.find('#testContentToggleArrowId').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('can have an id', () => {
      const wrapper = shallow(baseComponent({id: 'coolId'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('coolId')
    })

    it('can have a summary', () => {
      const wrapper = shallow(baseComponent({summary: 'testSummary'}))
      const assertion = wrapper.html().includes('testSummary')
      expect(assertion).toBe(true)
    })

    it('can be opened', () => {
      const wrapper = shallow(baseComponent({open: true}))
      const assertion = wrapper.props().open
      expect(assertion).toBe(true)
    })

    it('can be closed', () => {
      const wrapper = shallow(baseComponent({open: false}))
      const assertion = wrapper.props().open
      expect(assertion).toBe(false)
    })

    it('can be set as default to open', () => {
      const wrapper = shallow(baseComponent({defaultOpen: true}))
      const assertion = wrapper.props().open
      expect(assertion).toBe(true)
    })

    it('can have a separator included', () => {
      const wrapper = shallow(baseComponent({withSeparator: true}))
      const assertion = wrapper.props().withSeparator
      expect(assertion).toBe(true)
    })

    it('can set its own state to open', () => {
      const wrapper = shallow(baseComponent())
      wrapper.setProps({open: true})
      const assertion = wrapper.state('open')
      expect(assertion).toBe(true)
    })

    it('can respond to click', () => {
      const value = {target: { open: true }}
      const onClick = jest.fn()
      const wrapper = shallow(baseComponent({onClick}))
      wrapper.find('#testContentToggleArrowControl').simulate('click', value)
      expect(onClick).toBeCalledWith(value)
    })
  })
})
