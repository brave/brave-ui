/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

export interface InfoCardProps {
  title?: string
  description?: string
}

export interface InfoCardsProps {
  infoItems?: InfoCardProps[]
}

class InfoCard extends React.PureComponent<InfoCardProps, {}> {

  render () {
    const { title, description } = this.props

    return (
      <div>
        {`${title}|${description}`}
      </div>
    )
  }
}

export default class InfoCards extends React.PureComponent<InfoCardsProps, {}> {

  render () {
    const { infoItems } = this.props

    if (!infoItems) {
      return null
    }
      
    return infoItems.map((item: InfoCardProps) => {
      return <InfoCard title={item.title} description={item.description}/>
    })
  }
}

export {
  InfoCard,
  InfoCards
}