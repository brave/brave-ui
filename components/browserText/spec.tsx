/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import BrowserText from '../browserText'

describe('browserText tests', () => {
  const baseComponent = (props?: object) => (
    <BrowserText text='testText' {...props} />
  )

  it('matches the snapshot', () => {
    const component = baseComponent()
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'browserText'}))
    const assertion = wrapper.find('#browserText').length
    expect(assertion).toBe(1)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'browserText'}))
    const assertion = wrapper.props().id
    expect(assertion).toEqual('browserText')
  })

  it('can pass text', () => {
    const wrapper = shallow(baseComponent({text: 'w00t w00t'}))
    const assertion = wrapper.html().includes('w00t w00t')
    expect(assertion).toBe(true)
  })

  it('can disalow text selection', () => {
    const wrapper = shallow(baseComponent({noSelect: true}))
    const assertion = wrapper.props().noSelect
    expect(assertion).toEqual(true)
  })

  it('can have a custom font size', () => {
    const wrapper = shallow(baseComponent({fontSize: '20px'}))
    const assertion = wrapper.props().fontSize
    expect(assertion).toEqual('20px')
  })

  it('can have a custom color', () => {
    const wrapper = shallow(baseComponent({color: 'cyan'}))
    const assertion = wrapper.props().color
    expect(assertion).toEqual('cyan')
  })

  it('can have a custom padding', () => {
    const wrapper = shallow(baseComponent({padding: '5px'}))
    const assertion = wrapper.props().padding
    expect(assertion).toEqual('5px')
  })

  it('can have a custom font weight', () => {
    const wrapper = shallow(baseComponent({bold: true}))
    const assertion = wrapper.props().bold
    expect(assertion).toEqual(true)
  })

  it('can respond to click', () => {
    const value = 'FANCY BROWSER TEXT CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(baseComponent({onClick}))
    wrapper.simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
