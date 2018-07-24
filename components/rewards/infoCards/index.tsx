/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { Image, ImageTheme } from '../../v1/image'
import { Grid, Column } from '../../gridSystem'
import { 
  StyledTitle,
  StyledDesc,
  StyledInfoCard
} from './style'

export interface InfoCardProps {
  title?: string
  description?: string
  icon?: string
}

export interface InfoCardsProps {
  id?: string
  infoItems?: InfoCardProps[]
}

class InfoCard extends React.PureComponent<InfoCardProps, {}> {

  get imageTheme(): ImageTheme {
    return {
      maxWidth: '80px', 
      margin: '10px auto 20px auto'
    }
  } 

  render () {
    const { title, description, icon } = this.props
    return (
      <StyledInfoCard>
        <Image 
          src={icon}
          theme={this.imageTheme}/>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{description}</StyledDesc>
      </StyledInfoCard>
    )
  }
}

export default class InfoCards extends React.PureComponent<InfoCardsProps, {}> {

  getCards (items: InfoCardProps[]) {
    return <Grid theme={{gridGap: '40px'}} columns={items.length}>
      {items.map((item: InfoCardProps) => {
        return <>
          <Column size={1}>
            <InfoCard
              title={item.title}
              description={item.description}
              icon={item.icon}/>
          </Column>
        </>
      })}
    </Grid>
  }

  render () {
    const { id, infoItems } = this.props
    return <>
      {infoItems
        ? <div id={id}>
            {this.getCards(infoItems)}
          </div>
        : null}
    </>
  }
}

export {
  InfoCard,
  InfoCards
}