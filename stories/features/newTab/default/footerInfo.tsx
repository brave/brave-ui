/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Feature-specific components
import { Link, Navigation, IconLink, IconButton, PhotoName } from '../../../../src/features/newTab/default'

// Icons
import { SettingsAdvancedIcon, BookmarkBook, HistoryIcon, SettingsIcon } from '../../../../src/components/icons'

// Helpers
import { getLocale } from '../fakeLocale'

interface Props {
  backgroundImageInfo: any
  onClickSettings: () => void
  isSettingsMenuOpen: boolean
  showPhotoInfo: boolean
}

export default class FooterInfo extends React.PureComponent<Props, {}> {

  onKeyPressSettings = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      this.props.onClickSettings()
    }
  }

  render () {
    const {
      backgroundImageInfo,
      onClickSettings,
      isSettingsMenuOpen,
      showPhotoInfo
    } = this.props

    return (
      <>
        <div>
          {showPhotoInfo &&
          <PhotoName>
            {`${getLocale('photoBy')} `}
            <Link href={backgroundImageInfo.link} rel='noopener' target='_blank'>
              {backgroundImageInfo.author}
            </Link>
          </PhotoName>}
        </div>
        <Navigation>
          <IconButton
            onMouseDown={onClickSettings}
            disabled={isSettingsMenuOpen}
            onKeyDown={this.onKeyPressSettings}
          >
            <SettingsIcon />
          </IconButton>
          <IconLink><SettingsAdvancedIcon /></IconLink>
          <IconLink><BookmarkBook /></IconLink>
          <IconLink><HistoryIcon /></IconLink>
        </Navigation>
      </>
    )
  }
}
