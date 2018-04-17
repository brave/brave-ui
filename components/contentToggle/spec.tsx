/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ContentToggle from '../contentToggle'

describe.skip('contentToggle tests', () => {
  const baseComponent = (props?: object) => (
    <ContentToggle {...props} summary='testSummary' />
  )

  it('matches the snapshot', () => {
    const component = baseComponent()
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'testContentToggle'}))
    const assertion = wrapper.find('#testContentToggle').length
    expect(assertion).toBe(1)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'coolId'}))
    const assertion = wrapper.find('details').props().id
    expect(assertion).toEqual('coolId')
  })

  it('can have a summary', () => {
    const wrapper = shallow(baseComponent({summary: 'testSummary'}))
    const assertion = wrapper.find('summary').text()
    expect(assertion).toEqual('testSummary')
  })

  it('can be opened', () => {
    const wrapper = shallow(baseComponent({open: true}))
    const assertion = wrapper.find('details').props().open
    expect(assertion).toEqual(true)
  })

  it('can be closed', () => {
    const wrapper = shallow(baseComponent({open: false}))
    const assertion = wrapper.find('details').props().open
    expect(assertion).toEqual(false)
  })

  it('can be set as default to open', () => {
    const wrapper = shallow(baseComponent({defaultOpen: true}))
    const assertion = wrapper.find('details').props().open
    expect(assertion).toEqual(true)
  })

  it('can have a separator included', () => {
    const wrapper = shallow(baseComponent({withSeparator: true}))
    const assertion = wrapper.find('Separator').length
    expect(assertion).toBe(2)
  })

  it('can set its own state to open', () => {
    const wrapper = shallow(baseComponent())
    wrapper.setProps({open: true})
    const assertion = wrapper.state('open')
    expect(assertion).toBe(true)
  })

  it('can respond to click', () => {
    const value = { target: { open: true }}
    const onClick = jest.fn()
    const wrapper = shallow(baseComponent({onClick}))
    wrapper.find('summary').simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
