/* global jest, expect, describe, it, afterEach */
import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import {resumeStyleInjection} from './lib/utils'
import BrowserButton from '../brave-ui/src/browserButton'

describe('browserButton tests', () => {
  afterEach(() => {
    // Note: this is required for every test file
    // see utils.resumeStyleInjection for more info
    resumeStyleInjection()
  })

  it('matches the snapshot', () => {
    const component = <BrowserButton label='browserButton as default' />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = shallow(<BrowserButton />)
    const assertion = wrapper.find('[data-test-id="browserButton"]').length
    expect(assertion).toBe(1)
  })

  it('defines a custom size', () => {
    const wrapper = shallow(<BrowserButton size='13px' />)
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({'--size': '13px'}))
  })

  it('defines a custom font size', () => {
    const wrapper = shallow(<BrowserButton fontSize='60px' />)
    const assertion = wrapper.find('button').props().style
    expect(assertion).toEqual(expect.objectContaining({'--fontSize': '60px'}))
  })

  it('can pass locale', () => {
    const wrapper = shallow(<BrowserButton l10nId='NESPRESSO' />)
    const assertion = wrapper.find('button').props()['data-l10n-id']
    expect(assertion).toBe('NESPRESSO')
  })

  it('can be disabled', () => {
    const wrapper = shallow(<BrowserButton disabled />)
    const assertion = wrapper.find('button').props().disabled
    expect(assertion).toBe(true)
  })

  it('defaults to the default button', () => {
    const wrapper = shallow(<BrowserButton />)
    const assertion = wrapper.find('button').props()['data-test-as']
    expect(assertion).toBe('default')
  })

  it('can be set as primary', () => {
    const wrapper = shallow(<BrowserButton as='primary' />)
    const assertion = wrapper.find('button').props()['data-test-as']
    expect(assertion).toBe('primary')
  })

  it('can be set as secondary', () => {
    const wrapper = shallow(<BrowserButton as='secondary' />)
    const assertion = wrapper.find('button').props()['data-test-as']
    expect(assertion).toBe('secondary')
  })

  it('can have a custom label', () => {
    const wrapper = shallow(<BrowserButton label='CLOONEY' />)
    const assertion = wrapper.find('button').text()
    expect(assertion).toBe('CLOONEY')
  })

  it('can respond to click', () => {
    const value = 'FANCY BUTTON CLICKED'
    const onClick = jest.fn()
    const wrapper = shallow(<BrowserButton onClick={onClick} />)
    wrapper.find('button').simulate('click', value)
    expect(onClick).toBeCalledWith(value)
  })
})
