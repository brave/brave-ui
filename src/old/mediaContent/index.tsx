/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  StyledMediaContent,
  StyledMedia,
  StyledMediaBody
} from './style'

export interface MediaTheme {
  width?: string
  margin?: string
}

export interface MediaContentProps {
  id?: string
  media?: string
  children?: React.ReactNode
  customStyle?: MediaTheme
}

class MediaContent extends React.PureComponent<MediaContentProps, {}> {
  render () {
    const { id, media, customStyle, children } = this.props
    return (
      <StyledMediaContent id={id}>
        <StyledMedia src={media} customStyle={customStyle} />
        <StyledMediaBody customStyle={customStyle}>{children}</StyledMediaBody>
      </StyledMediaContent>
    )
  }
}

export default MediaContent
