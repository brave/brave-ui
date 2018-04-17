/* global expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { Grid, Column } from '../gridSystem'

describe('gridSystem tests', () => {
  describe('grid component', () => {
    it('matches the snapshot', () => {
      const component = <Grid />
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(<Grid id='grid' />)
      const assertion = wrapper.find('#grid').length
      expect(assertion).toBe(1)
    })

    it('defines a custom padding', () => {
      const wrapper = shallow(<Grid padding='20px' />)
      const assertion = wrapper.props().padding
      expect(assertion).toEqual('20px')
    })

    it('defines a custom gap', () => {
      const wrapper = shallow(<Grid gap='10px' />)
      const assertion = wrapper.props().gap
      expect(assertion).toEqual('10px')
    })

    it('defines a custom width', () => {
      const wrapper = shallow(<Grid width='13px' />)
      const assertion = wrapper.props().width
      expect(assertion).toEqual('13px')
    })

    it('defines a custom background', () => {
      const wrapper = shallow(<Grid background='cyan' />)
      const assertion = wrapper.props().background
      expect(assertion).toEqual('cyan')
    })
  })

  describe('column component', () => {
    it('matches the snapshot', () => {
      const component = <Column />
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(<Column id='column' />)
      const assertion = wrapper.find('#column').length
      expect(assertion).toBe(1)
    })

    it('defines a custom align', () => {
      const wrapper = shallow(<Column align='flex-start' />)
      const assertion = wrapper.props().align
      expect(assertion).toEqual('flex-start')
    })

    it('defines a custom verticalAlign', () => {
      const wrapper = shallow(<Column verticalAlign='flex-end' />)
      const assertion = wrapper.props().verticalAlign
      expect(assertion).toEqual('flex-end')
    })

    it('defines a custom background', () => {
      const wrapper = shallow(<Column background='purple' />)
      const assertion = wrapper.props().background
      expect(assertion).toEqual('purple')
    })
  })
})
