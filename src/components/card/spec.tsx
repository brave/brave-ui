/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Card from './index'

describe('card tests', () => {
  const baseComponent = (props?: object) => (
    <Card testId='testCard' {...props} />
  )
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent({testId: 'toughCard'}))
      const assertion = wrapper.props()['data-test-id']
      expect(assertion).toBe('toughCard')
    })
  })
})
