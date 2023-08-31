/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Button from './index'
import { TestThemeProvider } from '../../../theme'

describe('Button tests', () => { 
  const baseComponent = (props?: object) => <TestThemeProvider><Button id='button' text='test' {...props} /></TestThemeProvider>

  beforeEach(() => {
    jest.clearAllMocks()
  });

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

  describe('onClick test', () => {
    it('Should fire exactly once', () => {
     const onClick = jest.fn()
     const wrapper = shallow(baseComponent({onClick}))
     wrapper.find('#button').simulate('click')
     expect(onClick.mock.calls.length).toEqual(1)
    });
  })
})
