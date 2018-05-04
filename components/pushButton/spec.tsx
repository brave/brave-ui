/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import PushButton from '../pushButton'

describe('pushButton tests', () => {
  it('matches the snapshot', () => {
    const component = <PushButton />
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(<PushButton id='pushButton' />)
    const assertion = wrapper.find('#pushButton').length
    expect(assertion).toBe(1)
  })

  it('defines a custom size', () => {
    const wrapper = shallow(<PushButton size='13px' />)
    const assertion = wrapper.props().size
    expect(assertion).toEqual('13px')
  })

  it('defines a custom font size', () => {
    const wrapper = shallow(<PushButton fontSize='60px' />)
    const assertion = wrapper.props().fontSize
    expect(assertion).toEqual('60px')
  })

  it('can pass text', () => {
    const wrapper = shallow(<PushButton>NESPRESSO</PushButton>)
    const assertion = wrapper.html().includes('NESPRESSO')
    expect(assertion).toBe(true)
  })

  it('can be disabled', () => {
    const wrapper = shallow(<PushButton disabled />)
    const assertion = wrapper.props().disabled
    expect(assertion).toBe(true)
  })

  it('defaults to the default button', () => {
    const wrapper = shallow(<PushButton />)
    const assertion = wrapper.props().color
    expect(assertion).toBe('default')
  })

  it('can be set as primary', () => {
    const wrapper = shallow(<PushButton color='primary' />)
    const assertion = wrapper.props().color
    expect(assertion).toBe('primary')
  })

  it('can be set as secondary', () => {
    const wrapper = shallow(<PushButton color='secondary' />)
    const assertion = wrapper.props().color
    expect(assertion).toBe('secondary')
  })

  it('can respond to click', () => {
    const value = 'FANCY BUTTON CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(<PushButton onClick={onClick} />)
    wrapper.simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
