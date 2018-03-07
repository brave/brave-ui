/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { resumeStyleInjection } from './lib/utils'
import ActionButton from '../brave-ui/src/actionButton'
import theme from '../brave-ui/src/theme'

describe('actionButton tests', () => {
  afterEach(() => {
    // Note: this is required for every test file
    // see utils.resumeStyleInjection for more info
    resumeStyleInjection()
  })

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
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({ '--height': '100px' }))
  })

  it('defines a custom font size', () => {
    const wrapper = shallow(<ActionButton fontSize='60px' />)
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({ '--fontSize': '60px' }))
  })

  it('defines a custom color', () => {
    const wrapper = shallow(<ActionButton color='black' />)
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({ '--color': 'black' }))
  })

  it('defines a custom padding', () => {
    const wrapper = shallow(<ActionButton padding='15px' />)
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({ '--padding': '15px' }))
  })

  it('can pass text', () => {
    const wrapper = shallow(<ActionButton text='NESPRESSO' />)
    const assertion = wrapper.find('button').text()
    expect(assertion).toBe('NESPRESSO')
  })

  it('can respond to click', () => {
    const value = 'NESPRESSIFIED ACTION BUTTON CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(<ActionButton onClick={onClick} />)
    wrapper.find('button').simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
