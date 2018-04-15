/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import BrowserButton from '../browserButton'

describe('browserButton tests', () => {
  it('matches the snapshot', () => {
    const component = <BrowserButton />
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(<BrowserButton id='browserButton' />)
    const assertion = wrapper.find('#browserButton').length
    expect(assertion).toBe(1)
  })

  it('defines a custom size', () => {
    const wrapper = shallow(<BrowserButton size='13px' />)
    const assertion = wrapper.props().size
    expect(assertion).toEqual('13px')
  })

  it('defines a custom font size', () => {
    const wrapper = shallow(<BrowserButton fontSize='60px' />)
    const assertion = wrapper.props().fontSize
    expect(assertion).toEqual('60px')
  })

  it('can pass text', () => {
    const wrapper = shallow(<BrowserButton>NESPRESSO</BrowserButton>)
    const assertion = wrapper.html().includes('NESPRESSO')
    expect(assertion).toBe(true)
  })

  it('can be disabled', () => {
    const wrapper = shallow(<BrowserButton disabled />)
    const assertion = wrapper.props().disabled
    expect(assertion).toBe(true)
  })

  it('defaults to the default button', () => {
    const wrapper = shallow(<BrowserButton />)
    const assertion = wrapper.props().color
    expect(assertion).toBe('default')
  })

  it('can be set as primary', () => {
    const wrapper = shallow(<BrowserButton color='primary' />)
    const assertion = wrapper.props().color
    expect(assertion).toBe('primary')
  })

  it('can be set as secondary', () => {
    const wrapper = shallow(<BrowserButton color='secondary' />)
    const assertion = wrapper.props().color
    expect(assertion).toBe('secondary')
  })

  it('can respond to click', () => {
    const value = 'FANCY BUTTON CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(<BrowserButton onClick={onClick} />)
    wrapper.simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
