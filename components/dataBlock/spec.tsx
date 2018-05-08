/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { DataBlock, DataItem } from '../dataBlock'

describe('dataBlock tests', () => {
  const baseDataBlockComponent = (props?: object) => <DataBlock {...props} />
  const baseDataItemComponent = (props?: object) => <DataItem {...props} />

  describe('dataBlock component tests', () => {
    it('matches the snapshot', () => {
      const component = baseDataBlockComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseDataBlockComponent({id: 'toughDataBlock'}))
      const assertion = wrapper.find('#toughDataBlock').length
      expect(assertion).toBe(1)
    })

    it('can have an id', () => {
      const wrapper = shallow(baseDataBlockComponent({id: 'dataBlockThing'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('dataBlockThing')
    })
  })

  describe('dataItem component tests', () => {
    it('matches the snapshot', () => {
      const component = baseDataItemComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseDataItemComponent({id: 'toughDataItem'}))
      const assertion = wrapper.find('#toughDataItem').length
      expect(assertion).toBe(1)
    })

    it('can have an id', () => {
      const wrapper = shallow(baseDataItemComponent({id: 'dataItemThing'}))
      const assertion = wrapper.props().id
      expect(assertion).toBe('dataItemThing')
    })

    it('can have a custom color', () => {
      const wrapper = shallow(baseDataItemComponent({color: 'purple'}))
      const assertion = wrapper.props().color
      expect(assertion).toBe('purple')
    })

    it('can pass a custom counter', () => {
      const wrapper = shallow(baseDataItemComponent({counter: '123123'}))
      const assertion = wrapper.html().includes('123123')
      expect(assertion).toBe(true)
    })

    it('can pass a custom text', () => {
      const wrapper = shallow(baseDataItemComponent({text: 'yolo'}))
      const assertion = wrapper.html().includes('yolo')
      expect(assertion).toBe(true)
    })

    it('can pass a custom description', () => {
      const wrapper = shallow(baseDataItemComponent({description: 'WHAZZUP'}))
      const assertion = wrapper.html().includes('WHAZZUP')
      expect(assertion).toBe(true)
    })
  })
})
