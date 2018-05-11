/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import {
  StyledMediaContent,
  StyledMedia,
  StyledMediaBody
} from './style'

export interface MediaContentProps {
  id?: string,
  media?: string,
  mediaSize?: string,
  gap?: string,
  children?: React.ReactNode
}

class MediaContent extends React.PureComponent<MediaContentProps, {}> {
  render () {
    const { id, media, mediaSize, gap, children } = this.props
    return (
      <StyledMediaContent id={id} mediaSize={mediaSize} gap={gap}>
        <StyledMedia src={media} mediaSize={mediaSize} />
        <StyledMediaBody gap={gap}>{children}</StyledMediaBody>
      </StyledMediaContent>
    )
  }
}

export default MediaContent
