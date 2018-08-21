/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { TitleHeading, SectionHeading, FeatureHeading, Heading } from './index'

describe('all heading tests', () => {
  const baseTitleHeadingComponent = (props?: object) => (
    <TitleHeading id='testTitleHeading' {...props} />
  )

  const baseSectionHeadingComponent = (props?: object) => (
    <SectionHeading id='testSectionHeading' {...props} />
  )

  const baseFeatureHeadingComponent = (props?: object) => (
    <FeatureHeading id='testFeatureHeading' {...props} />
  )

  const baseHeadingComponent = (props?: object) => (
    <Heading id='testHeading' {...props} />
  )

  describe('titleHeading tests', () => {
    describe('basic tests', () => {
      it('matches the snapshot', () => {
        const component = baseTitleHeadingComponent()
        const tree = create(component).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('renders the component', () => {
        const wrapper = shallow(baseTitleHeadingComponent({id: 'toughTitleHeading'}))
        const assertion = wrapper.find('#toughTitleHeading').length
        expect(assertion).toBe(1)
      })
    })

    describe('component behavior', () => {
      it('can have an id', () => {
        const wrapper = shallow(baseTitleHeadingComponent({id: 'titleHeadingThing'}))
        const assertion = wrapper.props().id
        expect(assertion).toBe('titleHeadingThing')
      })

      it('can pass text', () => {
        const wrapper = shallow(baseTitleHeadingComponent({text: 'yes we can'}))
        const assertion = wrapper.html().includes('yes we can')
        expect(assertion).toBe(true)
      })

      it('can pass label', () => {
        const wrapper = shallow(baseTitleHeadingComponent({label: 'labelify'}))
        const assertion = wrapper.html().includes('labelify')
        expect(assertion).toBe(true)
      })
    })
  })

  describe('sectionHeading tests', () => {
    describe('basic tests', () => {
      it('matches the snapshot', () => {
        const component = baseSectionHeadingComponent()
        const tree = create(component).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('renders the component', () => {
        const wrapper = shallow(baseSectionHeadingComponent({id: 'toughTitleHeading'}))
        const assertion = wrapper.find('#toughTitleHeading').length
        expect(assertion).toBe(1)
      })
    })

    describe('component behavior', () => {
      it('can have an id', () => {
        const wrapper = shallow(baseSectionHeadingComponent({id: 'titleHeadingThing'}))
        const assertion = wrapper.props().id
        expect(assertion).toBe('titleHeadingThing')
      })

      it('can pass text', () => {
        const wrapper = shallow(baseSectionHeadingComponent({text: 'backstreet boyeeez'}))
        const assertion = wrapper.html().includes('backstreet boyeeez')
        expect(assertion).toBe(true)
      })
    })
  })

  describe('featureHeading tests', () => {
    describe('basic tests', () => {
      it('matches the snapshot', () => {
        const component = baseFeatureHeadingComponent()
        const tree = create(component).toJSON()
        expect(tree).toMatchSnapshot()
      })

      it('renders the component', () => {
        const wrapper = shallow(baseFeatureHeadingComponent({id: 'toughTitleHeading'}))
        const assertion = wrapper.find('#toughTitleHeading').length
        expect(assertion).toBe(1)
      })
    })

    describe('component behavior', () => {
      it('can have an id', () => {
        const wrapper = shallow(baseFeatureHeadingComponent({id: 'titleHeadingThing'}))
        const assertion = wrapper.props().id
        expect(assertion).toBe('titleHeadingThing')
      })

      it('can pass text', () => {
        const wrapper = shallow(baseSectionHeadingComponent({text: 'notorious'}))
        const assertion = wrapper.html().includes('notorious')
        expect(assertion).toBe(true)
      })
    })
  })

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

      it('can be an h4 when level === 4', () => {
        const wrapper = shallow(baseHeadingComponent({level: 4}))
        const assertion = wrapper.html().includes('h4')
        expect(assertion).toBe(true)
      })

      it('can be an h5 when level === 5', () => {
        const wrapper = shallow(baseHeadingComponent({level: 5}))
        const assertion = wrapper.html().includes('h5')
        expect(assertion).toBe(true)
      })

      it('can be an h6 when level === 6', () => {
        const wrapper = shallow(baseHeadingComponent({level: 6}))
        const assertion = wrapper.html().includes('h6')
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
        const component = baseHeadingComponent({customStyle: { color: 'orange' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('color', 'orange')
      })

      it('allows theming the `font-weight` property', () => {
        const component = baseHeadingComponent({customStyle: { fontWeight: 'bold' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('font-weight', 'bold')
      })

      it('allows theming the `font-family` property', () => {
        const component = baseHeadingComponent({customStyle: { fontFamily: 'Arial' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('font-family', 'Arial')
      })

      it('allows theming the `margin` property', () => {
        const component = baseHeadingComponent({customStyle: { margin: '30px' } })
        const tree = create(component).toJSON()
        expect(tree).toHaveStyleRule('margin', '30px')
      })
    })
  })
})
