/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { TestThemeProvider } from '../../../theme'
import Card from './index'

describe('card tests', () => {
  const baseComponent = (props?: object) => (
    <TestThemeProvider>
      <Card testId='testCard' {...props} />
    </TestThemeProvider>
  )
  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const testId = 'toughCard'
      const wrapper = shallow(baseComponent({testId}))
      const assertion = wrapper.find({['data-test-id']: testId})
      expect(assertion).toBeTruthy()
    })
  })
})
