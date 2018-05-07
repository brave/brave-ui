/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import BoxedContent from '../boxedContent'

describe('boxedContent tests', () => {
  const baseComponent = (props?: object) => (
    <BoxedContent id='testBoxedContent' {...props} />
  )

  it('matches the snapshot', () => {
    const component = baseComponent()
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'toughBoxedContent'}))
    const assertion = wrapper.find('#toughBoxedContent').length
    expect(assertion).toBe(1)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'boxedThing'}))
    const assertion = wrapper.props().id
    expect(assertion).toBe('boxedThing')
  })

  it('can have a custom width', () => {
    const wrapper = shallow(baseComponent({width: '80%'}))
    const assertion = wrapper.props().width
    expect(assertion).toBe('80%')
  })

  it('can have a custom margin', () => {
    const wrapper = shallow(baseComponent({margin: '10px 20px'}))
    const assertion = wrapper.props().margin
    expect(assertion).toBe('10px 20px')
  })
})
