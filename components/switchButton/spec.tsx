/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import SwitchButton from '../switchButton'

describe.skip('switchButton tests', () => {
  const baseComponent = (props?: object) => (
    <SwitchButton id='switchButton' checked={false} {...props} />
  )

  it('matches the snapshot', () => {
    const component = baseComponent()
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'switchButton'}))
    const assertion = wrapper.find('#switchButton').length
    expect(assertion).toBe(1)
  })

  it('can be checked', () => {
    const wrapper = shallow(baseComponent({checked: true}))
    const assertion = wrapper.find('input').props().checked
    expect(assertion).toEqual(true)
  })

  it('can be unchecked', () => {
    const wrapper = shallow(baseComponent({checked: false}))
    const assertion = wrapper.find('input').props().checked
    expect(assertion).toEqual(false)
  })

  it('can be disabled', () => {
    const wrapper = shallow(baseComponent({disabled: true}))
    const assertion = wrapper.find('input').props().disabled
    expect(assertion).toBe(true)
  })

  it('can be set as read-only', () => {
    const wrapper = shallow(baseComponent({readOnly: true}))
    const assertion = wrapper.find('input').props().readOnly
    expect(assertion).toBe(true)
  })

  it('can have autoFocus', () => {
    const wrapper = shallow(baseComponent({autoFocus: true}))
    const assertion = wrapper.find('input').props().autoFocus
    expect(assertion).toBe(true)
  })

  it('can have left text as label', () => {
    const wrapper = shallow(baseComponent({leftText: 'LEFT TEXT FTW'}))
    const assertion = wrapper.find('#switchButtonLeftText').text()
    expect(assertion).toBe('LEFT TEXT FTW')
  })

  it('can have right text as label', () => {
    const wrapper = shallow(baseComponent({rightText: 'RIGHT TEXT FTW'}))
    const assertion = wrapper.find('#switchButtonRightText').text()
    expect(assertion).toBe('RIGHT TEXT FTW')
  })

  it('can respond to onChange', () => {
    const value = {target: { checked: true }}
    const onChange = jest.fn()
    const wrapper = shallow(baseComponent({onChange}))
    wrapper.find('input').simulate('change', value)
    expect(onChange).toBeCalledWith(value)
  })
})
