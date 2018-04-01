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
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({ '--size': '13px' }))
  })

  it('defines a custom font size', () => {
    const wrapper = shallow(<BrowserButton fontSize='60px' />)
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({ '--fontSize': '60px' }))
  })

  it('can pass text', () => {
    const wrapper = shallow(<BrowserButton>NESPRESSO</BrowserButton>)
    const assertion = wrapper.find('button').text()
    expect(assertion).toBe('NESPRESSO')
  })

  it('can be disabled', () => {
    const wrapper = shallow(<BrowserButton disabled />)
    const assertion = wrapper.find('button').props().disabled
    expect(assertion).toBe(true)
  })

  it('defaults to the default buttonz', () => {
    const wrapper = shallow(<BrowserButton />)
    const assertion = wrapper.find('button').hasClass('browserButton_defaultColor')
    expect(assertion).toBe(true)
  })

  it('can be set as primary', () => {
    const wrapper = shallow(<BrowserButton theme='primary' />)
    const assertion = wrapper.find('button').hasClass('browserButton_primaryColor')
    expect(assertion).toBe(true)
  })

  it('can be set as secondary', () => {
    const wrapper = shallow(<BrowserButton theme='secondary' />)
    const assertion = wrapper.find('button').hasClass('browserButton_secondaryColor')
    expect(assertion).toBe(true)
  })

  it('can respond to click', () => {
    const value = 'FANCY BUTTON CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(<BrowserButton onClick={onClick} />)
    wrapper.find('button').simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
