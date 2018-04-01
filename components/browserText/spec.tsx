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
    const assertion = wrapper.find('p').props().id
    expect(assertion).toEqual('browserText')
  })

  it('can pass text', () => {
    const wrapper = shallow(baseComponent({text: 'w00t w00t'}))
    const assertion = wrapper.find('p').text()
    expect(assertion).toBe('w00t w00t')
  })

  it('can disalow text selection', () => {
    const wrapper = shallow(baseComponent({noSelect: true}))
    const assertion = wrapper.find('p').props().style
    expect(assertion).toEqual(
      expect.objectContaining({ '--noSelect': 'none' })
    )
  })

  it('can have a custom font size', () => {
    const wrapper = shallow(baseComponent({fontSize: '20px'}))
    const assertion = wrapper.find('p').props().style
    expect(assertion).toEqual(
      expect.objectContaining({ '--fontSize': '20px' })
    )
  })

  it('can have a custom color', () => {
    const wrapper = shallow(baseComponent({color: 'cyan'}))
    const assertion = wrapper.find('p').props().style
    expect(assertion).toEqual(
      expect.objectContaining({ '--color': 'cyan' })
    )
  })

  it('can have a custom padding', () => {
    const wrapper = shallow(baseComponent({padding: '5px'}))
    const assertion = wrapper.find('p').props().style
    expect(assertion).toEqual(
      expect.objectContaining({ '--padding': '5px' })
    )
  })

  it('can have a custom font weight', () => {
    const wrapper = shallow(baseComponent({bold: true}))
    const assertion = wrapper.find('p').props().style
    expect(assertion).toEqual(
      expect.objectContaining({ '--bold': 'bold' })
    )
  })

  it('can respond to click', () => {
    const value = 'FANCY BROWSER TEXT CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(baseComponent({onClick}))
    wrapper.find('p').simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
