/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../theme'

/**
 * Main wrapper
 ****************************************************
 */
export const ShieldsPanel = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  position: relative;
  background: #FFFFFF;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

/**
 * Header
 ****************************************************
 */
export const MainToggle = styled<{}, 'section'>('section')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const TotalBlockedStats = styled<{}, 'section'>('section')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const SiteOverview = styled<{}, 'div'>('div')`
  box-sizing: border-box;
`

export const SiteInfoGrid = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
`

/**
 * Interface/privacy Rows
 ****************************************************
 */
//
export const BlockedInfoRow = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`

export const BlockedInfoRowGrid = styled<{}, 'div'>('div')`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
`

/**
 * Footer
 ****************************************************
 */
export const Footer = styled<{}, 'div'>('div')`
  box-sizing: border-box;
`

/**
 * Blocked Lists
 ****************************************************
 */
export const BlockedListContent = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background: #FFFFFF;
  // width: 100%;
  // height: 100%;
  z-index: 2;
`

export const BlockedListHeader = styled<{}, 'div'>('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`

export const BlockedListSummary = styled<{}, 'summary'>('summary')`
  &::-webkit-details-marker {
    display: none;
  }

  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
`

export const BlockedList = styled<{}, 'ul'>('ul')`
  box-sizing: border-box;
  height: 354px;
  overflow: auto;
  margin: 0;
  padding: 0;
`

export const BlockedListItemHeader = styled<{}, 'li'>('li')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr auto;
`

export const BlockedListItem = styled<{}, 'li'>('li')`
  box-sizing: border-box;
`

export const BlockedListItemWithOptions = styled<{}, 'li'>('li')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
`

export const BlockedListFooter = styled<{}, 'footer'>('footer')`
  box-sizing: border-box;
`

export const BlockedListFooterWithOptions = styled<{}, 'footer'>('footer')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`
