/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Paragraph from '../paragraph'

describe('paragraph tests', () => {
  const baseComponent = (props?: object) => (
    <Paragraph id='testParagraph' {...props} />
  )

  it('matches the snapshot', () => {
    const component = baseComponent()
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'toughParagraph'}))
    const assertion = wrapper.find('#toughParagraph').length
    expect(assertion).toBe(1)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'boxedThing'}))
    const assertion = wrapper.props().id
    expect(assertion).toBe('boxedThing')
  })

  it('can have a custom size', () => {
    const wrapper = shallow(baseComponent({size: '30px'}))
    const assertion = wrapper.props().size
    expect(assertion).toBe('30px')
  })

  it('can have a custom color', () => {
    const wrapper = shallow(baseComponent({color: 'yellow'}))
    const assertion = wrapper.props().color
    expect(assertion).toBe('yellow')
  })

  it('can be bold', () => {
    const wrapper = shallow(baseComponent({weight: 'bold'}))
    const assertion = wrapper.props().weight
    expect(assertion).toBe('bold')
  })

  it('can pass text', () => {
    const wrapper = shallow(baseComponent({text: 'what else'}))
    const assertion = wrapper.html().includes('what else')
    expect(assertion).toBe(true)
  })
})
