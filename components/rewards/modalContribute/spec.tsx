/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ModalContribute from './index'

describe('ModalContribute tests', () => {
  const baseComponent = (props?: object) => <ModalContribute id='modal' {...props} />

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#modal').length
      expect(assertion).toBe(1)
    })
  })
})
