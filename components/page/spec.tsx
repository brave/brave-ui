/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Page from '../page'

describe('page tests', () => {
  const baseComponent = (props?: object) => (
    <Page id='testPage' {...props} />
  )

  it('matches the snapshot', () => {
    const component = baseComponent()
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'toughPage'}))
    const assertion = wrapper.find('#toughPage').length
    expect(assertion).toBe(1)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'boxedThing'}))
    const assertion = wrapper.props().id
    expect(assertion).toBe('boxedThing')
  })

  it('can have a custom title', () => {
    const wrapper = shallow(baseComponent({title: 'here comes the sun'}))
    const assertion = wrapper.props().title
    expect(assertion).toBe('here comes the sun')
  })

  it('can have a custom label', () => {
    const wrapper = shallow(baseComponent({label: 'beta'}))
    const assertion = wrapper.props().label
    expect(assertion).toBe('beta')
  })

  it('can have a custom color', () => {
    const wrapper = shallow(baseComponent({color: 'gray'}))
    const assertion = wrapper.props().color
    expect(assertion).toBe('gray')
  })

  it('can have a custom padding', () => {
    const wrapper = shallow(baseComponent({padding: '10px 20px'}))
    const assertion = wrapper.props().padding
    expect(assertion).toBe('10px 20px')
  })

  it('can have a custom background', () => {
    const wrapper = shallow(baseComponent({background: 'red'}))
    const assertion = wrapper.props().background
    expect(assertion).toBe('red')
  })
})
