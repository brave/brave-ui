/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

const formatId = (componentName) => componentName.toLowerCase()
const themePath = (rewardsPath) => {
  return rewardsPath ? '../../../' : '../../'
}

module.exports.index = (componentName) => `\
/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import * as React from 'react'
import { StyledWrapper } from './style'

export interface Props {
  id?: string
}

export default class ${componentName} extends React.PureComponent<Props, {}> {
  render () {
    const { id } = this.props

    return (
      <StyledWrapper id={id}>

      </StyledWrapper>
    )
  }
}
`

module.exports.style = () => `\
/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import styled from 'styled-components'

export const StyledWrapper = styled<{}, 'div'>('div')\`
  display: flex;
\`
`

module.exports.spec = (componentName, rewardsPath) => `\
/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ${componentName} from './index'
import { TestThemeProvider } from '${themePath(rewardsPath)}theme'

describe('${componentName} tests', () => {
  const baseComponent = (props?: object) => <TestThemeProvider><${componentName} id='${formatId(componentName)}' {...props} /></TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#${formatId(componentName)}').length
      expect(assertion).toBe(1)
    })
  })
})
`
