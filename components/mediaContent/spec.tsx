/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import MediaContent from '../mediaContent'

describe('mediaContent tests', () => {
  const baseComponent = (props?: object) => (
    <MediaContent id='testMediaContent' {...props} />
  )

  it('matches the snapshot', () => {
    const component = baseComponent()
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'toughMediaContent'}))
    const assertion = wrapper.find('#toughMediaContent').length
    expect(assertion).toBe(1)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'mediaThing'}))
    const assertion = wrapper.props().id
    expect(assertion).toBe('mediaThing')
  })

  it('can have a custom media source', () => {
    const wrapper = shallow(baseComponent({media: 'https://somesource.com'}))
    const assertion = wrapper.props().src
    expect(assertion).toBe('https://somesource.com')
  })

  it('can have a custom media size', () => {
    const wrapper = shallow(baseComponent({mediaSize: '30px'}))
    const assertion = wrapper.props().mediaSize
    expect(assertion).toBe('30px')
  })

  it('can have a custom gap', () => {
    const wrapper = shallow(baseComponent({gap: '30px'}))
    const assertion = wrapper.props().gap
    expect(assertion).toBe('30px')
  })
})
