/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import BrowserSelect from '../browserSelect'

describe('browserSelect tests', () => {
  const baseComponent = (props?: object) => (
      <BrowserSelect id='browserSelect' value='test' onChange={() => {}} {...props}>
        <option>some option</option>
      </BrowserSelect>
  )

  it('matches the snapshot', () => {
    const tree = create(baseComponent()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'browserSelectId'}))
    const assertion = wrapper.find('#browserSelectId').length
    expect(assertion).toBe(1)
  })

  it('can have a custom title', () => {
    const wrapper = shallow(baseComponent({titleName: 'custom title here'}))
    const assertion = wrapper.html().includes('custom title here')
    expect(assertion).toBe(true)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'browserSelectId'}))
    const assertion = wrapper.find('#browserSelectId').props().id
    expect(assertion).toEqual('browserSelectId')
  })

  it('can be set as multiple', () => {
    const wrapper = shallow(baseComponent({multiple: true}))
    const assertion = wrapper.find('#browserSelect').props().multiple
    expect(assertion).toBe(true)
  })

  it('can be set autoFocus', () => {
    const wrapper = shallow(baseComponent({autoFocus: true}))
    const assertion = wrapper.find('#browserSelect').props().autoFocus
    expect(assertion).toEqual(true)
  })

  it('can be disabled', () => {
    const wrapper = shallow(baseComponent({disabled: true}))
    const assertion = wrapper.find('#browserSelect').props().disabled
    expect(assertion).toBe(true)
  })

  it('can respond to change', () => {
    const value = 'FANCY SELECT CHANGED'
    const onChange = jest.fn()
    const wrapper = shallow(baseComponent({onChange}))
    wrapper.find('#browserSelect').simulate('change', value)
    expect(onChange).toBeCalledWith(value)
  })
})
