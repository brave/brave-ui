/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import BrowserSelect from '../browserSelect'

describe.skip('browserSelect tests', () => {
  const baseComponent = (props?: object) => (
      <BrowserSelect value='test' {...props}>
        <option>some option</option>
      </BrowserSelect>
  )

  it('matches the snapshot', () => {
    const tree = create(baseComponent()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'browserSelect'}))
    const assertion = wrapper.find('#browserSelect').length
    expect(assertion).toBe(1)
  })

  it('can have a custom title', () => {
    const wrapper = shallow(baseComponent({titleName: 'custom title here'}))
    const assertion = wrapper.html().includes('custom title here')
    expect(assertion).toBe(true)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'coolId'}))
    const assertion = wrapper.props().id
    expect(assertion).toEqual('coolId')
  })

  it('can be set as multiple', () => {
    const wrapper = shallow(baseComponent({multiple: true}))
    const assertion = wrapper.props().multiple
    expect(assertion).toBe(true)
  })

  it('can be set autoFocus', () => {
    const wrapper = shallow(baseComponent({autoFocus: true}))
    const assertion = wrapper.props().autoFocus
    expect(assertion).toEqual(true)
  })

  it('can be disabled', () => {
    const wrapper = shallow(baseComponent({disabled: true}))
    const assertion = wrapper.props().disabled
    expect(assertion).toBe(true)
  })

  it('can respond to change', () => {
    const value = 'FANCY SELECT CHANGED'
    const onChange = jest.fn()
    const wrapper = shallow(baseComponent({onChange}))
    wrapper.simulate('change', value)
    expect(onChange).toBeCalledWith(value)
  })
})
