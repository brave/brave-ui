import * as React from 'react'

const evidenceObject = {
  test: 'This is a test string that should not be present in any client bundle'
}

export interface Props {
  filler?: number
}

export default class EvidenceComponent extends React.PureComponent<Props, {}> {
  static test = evidenceObject.test
  render () {
    return <div>{evidenceObject.test}</div>
  }
}
