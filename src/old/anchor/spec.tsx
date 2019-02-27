/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Anchor from './index'

describe('anchor tests', () => {
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = <Anchor href='#' text='testText' />
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(<Anchor id='anchor' href='#' text='testText' />)
      const assertion = wrapper.find('#anchor').length
      expect(assertion).toBe(1)
    })
  })

  describe('component behavior', () => {
    it('defines a href', () => {
      const wrapper = shallow(<Anchor href='https://nespresso.com' text='testText' />)
      const assertion = wrapper.props().href
      expect(assertion).toEqual('https://nespresso.com')
    })

    it('defines a target', () => {
      const wrapper = shallow(<Anchor href='#' text='testText' target='_blank' />)
      const assertion = wrapper.props().target
      expect(assertion).toEqual('_blank')
    })

    it('rel defaults to noreferrer noopener', () => {
      const wrapper = shallow(<Anchor href='#' text='testText' />)
      const assertion = wrapper.props().rel
      expect(assertion).toEqual('noreferrer noopener')
    })

    it('can pass text', () => {
      const wrapper = shallow(<Anchor href='#' text='GOTCHA' />)
      const assertion = wrapper.html().includes('GOTCHA')
      expect(assertion).toBe(true)
    })
  })

  describe('theming', () => {
    it('allows theming the `textDecoration` property', () => {
      const component = <Anchor href='#' customStyle={{ textDecoration: 'underline' }} />
      const tree = create(component).toJSON()
    })

    it('allows theming the `color` property', () => {
      const component = <Anchor href='#' customStyle={{ color: 'brown' }} />
      const tree = create(component).toJSON()
    })

    it('allows theming the `fontSize` property', () => {
      const component = <Anchor href='#' customStyle={{ fontSize: '300px' }} />
      const tree = create(component).toJSON()
    })

    it('allows theming the `user-select` property', () => {
      const component = <Anchor href='#' customStyle={{ userSelect: 'none' }} />
      const tree = create(component).toJSON()
    })
  })
})
