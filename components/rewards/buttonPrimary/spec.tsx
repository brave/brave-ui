/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ButtonPrimary from './index'

describe('ButtonPrimary tests', () => {
  const baseComponent = (props?: object) => <ButtonPrimary id='button' {...props} />

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#button').length
      expect(assertion).toBe(1)
    })
  })
})
