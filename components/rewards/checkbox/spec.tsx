/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Checkbox from './index'

describe('List tests', () => {
  const baseComponent = (props?: object) => <Checkbox
    value={{'yt': true, 'tw': false, 'inst': false}}
    id={'checkbox'}
    multiple={false}
    title={'Enable ability to give tips on ‘Like’ posts'}
  >
    <div data-key='yt'>YouTube</div>
    <div data-key='tw'>Twitter</div>
    <div data-key='inst'>Instagram</div>
  </Checkbox>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#checkbox').length
      expect(assertion).toBe(1)
    })
  })
})
