/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { TestThemeProvider } from '../../../theme'
import Heading from './index'

describe('all heading tests', () => {
  const baseHeadingComponent = (props?: object) => (
    <TestThemeProvider><Heading {...props} /></TestThemeProvider>
  )
  describe('heading tests', () => {
    describe('basic tests', () => {
      it('matches the snapshot', () => {
        const component = baseHeadingComponent()
        const tree = create(component).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('renders the component', () => {
        const wrapper = shallow(baseHeadingComponent({testId: 'toughTitleHeading'}))
        const assertion = wrapper.html().includes('toughTitleHeading')
        expect(assertion).toBe(true)
      })
    })

    describe.skip('component behavior', () => {
      it('should be an h1 when level === 1', () => {
        const wrapper = shallow(baseHeadingComponent({level: 1}))
        const assertion = wrapper.html().includes('h1')
        expect(assertion).toBe(true)
      })

      it('should be an h2 when level === 2', () => {
        const wrapper = shallow(baseHeadingComponent({level: 2}))
        const assertion = wrapper.html().includes('h2')
        expect(assertion).toBe(true)
      })

      it('should be an h3 when level === 3', () => {
        const wrapper = shallow(baseHeadingComponent({level: 3}))
        const assertion = wrapper.html().includes('h3')
        expect(assertion).toBe(true)
      })

      it('should be an h3 when level === 4', () => {
        const wrapper = shallow(baseHeadingComponent({level: 4}))
        const assertion = wrapper.html().includes('h4')
        expect(assertion).toBe(true)
      })

      it('should be an h3 when level === 5', () => {
        const wrapper = shallow(baseHeadingComponent({level: 5}))
        const assertion = wrapper.html().includes('h5')
        expect(assertion).toBe(true)
      })

      it('should be an h3 when level === 6', () => {
        const wrapper = shallow(baseHeadingComponent({level: 6}))
        const assertion = wrapper.html().includes('h6')
        expect(assertion).toBe(true)
      })
    })
  })
})
