/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import MediaContent from '../../mediaContent'
import { Grid, Column } from '../../gridSystem'

export interface InfoCardProps {
  title?: string
  description?: string
  icon?: string
}

export interface InfoCardsProps {
  infoItems?: InfoCardProps[]
}

class InfoCard extends React.PureComponent<InfoCardProps, {}> {

  render () {
    const { title, description, icon } = this.props

    return (
      <div>
        <MediaContent media={icon}/>
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
      
    return <>
      <Grid columns={infoItems.length}>
        {
          infoItems.map((item: InfoCardProps) => {
            return <>
              <Column size={1}>
                <InfoCard 
                  title={item.title} 
                  description={item.description}
                  icon={item.icon}/>
              </Column>
            </>
          })
        }
      </Grid>
    </>
  }
}

export {
  InfoCard,
  InfoCards
}