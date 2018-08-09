/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Heading from './index'

describe('all heading tests', () => {
  const baseHeadingComponent = (props?: object) => (
    <Heading id='testHeading' {...props} />
  )
  describe('heading tests', () => {
    describe('basic tests', () => {
      it('matches the snapshot', () => {
        const component = baseHeadingComponent()
        const tree = create(component).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('renders the component', () => {
        const wrapper = shallow(baseHeadingComponent({id: 'toughTitleHeading'}))
        const assertion = wrapper.find('#toughTitleHeading').length
        expect(assertion).toBe(1)
      })
    })

    describe('component behavior', () => {
      it('can have an id', () => {
        const wrapper = shallow(baseHeadingComponent({id: 'titleHeadingThing'}))
        const assertion = wrapper.props().id
        expect(assertion).toBe('titleHeadingThing')
      })

      it('can be an h1 when level === 1', () => {
        const wrapper = shallow(baseHeadingComponent({level: 1}))
        const assertion = wrapper.html().includes('h1')
        expect(assertion).toBe(true)
      })

      it('can be an h2 when level === 2', () => {
        const wrapper = shallow(baseHeadingComponent({level: 2}))
        const assertion = wrapper.html().includes('h2')
        expect(assertion).toBe(true)
      })

      it('can be an h3 when level === 3', () => {
        const wrapper = shallow(baseHeadingComponent({level: 3}))
        const assertion = wrapper.html().includes('h3')
        expect(assertion).toBe(true)
      })

      it('can pass text', () => {
        const wrapper = shallow(baseHeadingComponent({text: 'nsync rlz'}))
        const assertion = wrapper.html().includes('nsync rlz')
        expect(assertion).toBe(true)
      })
    })

    describe('theming', () => {
      it('allows theming the `color` property', () => {
        const component = baseHeadingComponent({theme: { color: 'orange' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('color', 'orange')
      })

      it('allows theming the `margin` property', () => {
        const component = baseHeadingComponent({theme: { margin: '30px' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('margin', '30px')
      })
    })
  })
})
