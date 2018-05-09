/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Clock from '../clock'

describe('boxedContent tests', () => {
  const baseComponent = (props?: object) => <Clock {...props} />

  it('matches the snapshot', () => {
    const component: any = shallow(baseComponent())
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(baseComponent({id: 'someId'}))
    const assertion = wrapper.find('#someId').length
    expect(assertion).toBe(1)
  })

  it('can have an id', () => {
    const wrapper = shallow(baseComponent({id: 'whatClock'}))
    const assertion = wrapper.props().id
    expect(assertion).toBe('whatClock')
  })
})
