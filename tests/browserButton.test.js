/* global expect, describe, it, afterEach */
import React from 'react'
import {mount} from 'enzyme'
import renderer from 'react-test-renderer'
import {resumeStyleInjection} from './lib/utils'
import BrowserButton from '../brave-ui/src/browserButton'

describe('browserButton tests', () => {
  afterEach(() => {
    // Note: this is required for every test file
    // see utils.resumeStyleInjection for more info
    resumeStyleInjection()
  })

  it('matches the snapshot', () => {
    const component = <BrowserButton label='browserButton as default' />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component', () => {
    const wrapper = mount(<BrowserButton />)
    const assertion = wrapper.find('[data-test-id="browserButton"]').length
    expect(assertion).toBe(1)
  })
})
