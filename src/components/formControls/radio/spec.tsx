/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Radio, {Props} from './index'
import { TestThemeProvider } from '../../../theme'

describe('Radio tests', () => {
  const baseComponent = (props?: Props) => <TestThemeProvider><Radio
    value={{'5': true, '10': false, '15': false}}
    id={'radio'}
    multiple={false}
  >
    <div data-key='5'>5</div>
    <div data-key='10'>10</div>
    <div data-key='15'>15</div>
  </Radio></TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#radio').length
      expect(assertion).toBe(1)
    })
  })
})
