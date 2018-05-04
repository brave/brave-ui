/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import UnstyledButton from '../unstyledButton'

describe('unstyledButton tests', () => {
  it('matches the snapshot', () => {
    const component = <UnstyledButton />
    const tree = create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(<UnstyledButton id='unstyledButton' />)
    const assertion = wrapper.find('#unstyledButton').length
    expect(assertion).toBe(1)
  })

  it('defines a custom height', () => {
    const wrapper = shallow(<UnstyledButton height='100px' />)
    const assertion = wrapper.props().height
    expect(assertion).toEqual('100px')
  })

  it('defines a custom font size', () => {
    const wrapper = shallow(<UnstyledButton fontSize='60px' />)
    const assertion = wrapper.props().fontSize
    expect(assertion).toEqual('60px')
  })

  it('defines a custom color', () => {
    const wrapper = shallow(<UnstyledButton color='black' />)
    const assertion = wrapper.props().color
    expect(assertion).toEqual('black')
  })

  it('defines a custom padding', () => {
    const wrapper = shallow(<UnstyledButton padding='15px' />)
    const assertion = wrapper.props().padding
    expect(assertion).toEqual('15px')
  })

  it('can pass text', () => {
    const wrapper = shallow(<UnstyledButton text='NESPRESSO' />)
    const assertion = wrapper.html().includes('NESPRESSO')
    expect(assertion).toBe(true)
  })

  it('can respond to click', () => {
    const value = 'NESPRESSIFIED ACTION BUTTON CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(<UnstyledButton onClick={onClick} />)
    wrapper.simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
