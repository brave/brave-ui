/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ActionButton from '../actionButton'

describe('actionButton tests', () => {
  it('matches the snapshot', () => {
    const component = <ActionButton />
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(<ActionButton id='actionButton' />)
    const assertion = wrapper.find('#actionButton').length
    expect(assertion).toBe(1)
  })

  it('defines a custom height', () => {
    const wrapper = shallow(<ActionButton height='100px' />)
    const assertion = wrapper.props().height
    expect(assertion).toEqual('100px')
  })

  it('defines a custom font size', () => {
    const wrapper = shallow(<ActionButton fontSize='60px' />)
    const assertion = wrapper.props().fontSize
    expect(assertion).toEqual('60px')
  })

  it('defines a custom color', () => {
    const wrapper = shallow(<ActionButton color='black' />)
    const assertion = wrapper.props().color
    expect(assertion).toEqual('black')
  })

  it('defines a custom padding', () => {
    const wrapper = shallow(<ActionButton padding='15px' />)
    const assertion = wrapper.props().padding
    expect(assertion).toEqual('15px')
  })

  it('can pass text', () => {
    const wrapper = shallow(<ActionButton text='NESPRESSO' />)
    const assertion = wrapper.html().includes('NESPRESSO')
    expect(assertion).toBe(true)
  })

  it('can respond to click', () => {
    const value = 'NESPRESSIFIED ACTION BUTTON CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(<ActionButton onClick={onClick} />)
    wrapper.simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
