/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../theme'
import palette from '../../theme/palette'

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
  grid-template-rows: auto auto auto auto;
`

/**
 * Header
 ****************************************************
 */
export const MainToggle = styled<{}, 'section'>('section')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px 24px 10px;
  border-bottom: 1px solid rgba(160, 161, 178, 0.15);

  > *:last-child {
    justify-content: flex-end;
  }
`

export const SiteOverview = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 24px 16px 36px;
  border-bottom: 1px solid rgba(160, 161, 178, 0.15);
`

export const TotalBlockedStats = styled<{}, 'section'>('section')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 80%;
  margin: 0px auto 5px;
  gap: 24px;
`

export const SiteInfo = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0px auto 5px;
  gap: 8px;
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
  border-bottom: 1px solid rgba(160, 161, 178, 0.15);
  padding: 5px 24px 4px 20px;
  // cursor: pointer;

  &:active {
    outline: none;
  }

  &:focus-within {
    outline: 1px solid ${palette.orange400};
  }
`

export const BlockedInfoRowSingle = styled(BlockedInfoRow)`
  margin-left: 54px;
  cursor: default;
  &:focus-within {
    outline: none;
  }
`

export const BlockedInfoRowForSelect = styled(BlockedInfoRow)`
  grid-template-columns: auto 1fr;
`

export const BlockedInfoRowData = styled<{}, 'div'>('div')`
  display: grid;
  grid-template-columns: auto 36px 1fr;
  grid-gap: 2px;
  align-items: center;
  outline: none;
`

export const BlockedInfoRowDataForSelect = styled(BlockedInfoRowData)`
  grid-template-columns: auto 26px 1fr;
`

/**
 * Footer
 ****************************************************
 */
export const MainFooter = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  padding: 24px;
`

/**
 * Blocked Lists
 ****************************************************
 */
export const BlockedListContent = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const BlockedListHeader = styled<{}, 'div'>('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4px;
  align-items: center;
  padding: 24px 24px 14px;
  border-bottom: 1px solid rgba(160, 161, 178, 0.15);
`

export const BlockedListSummary = styled<{}, 'summary'>('summary')`
  &::-webkit-details-marker {
    display: none;
  }

  display: grid;
  grid-template-columns: 28px 28px 1fr;
  align-items: center;
  padding: 5px 24px 5px 20px;
  border-bottom: 1px solid rgba(160, 161, 178, 0.15);
`

export const BlockedListStatic = styled<{}, 'ul'>('ul')`
  box-sizing: border-box;
  list-style-type: none;
  height: 354px;
  overflow: auto;
  margin: 0;
  padding: 6px 0;
  margin: 6px 24px;
`

export const BlockedListDynamic = styled(BlockedListStatic)`
  margin: 0;
  padding: 0;
`

export const BlockedListItemHeader = styled<{}, 'li'>('li')`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  padding: 8px 24px 8px 20px;
  margin-bottom: 6px;
  line-height: 1;
  border-top: 1px solid rgba(160, 161, 178, 0.15);
  border-bottom: 1px solid rgba(160, 161, 178, 0.15);

  &:first-of-type {
    border-top: 0;
  }
`

export const BlockedListItem = styled<{}, 'li'>('li')`
  box-sizing: border-box;
  padding: 9px 0px;
  line-height: 1;
`

export const BlockedListItemWithOptions = styled<{}, 'li'>('li')`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 9px 24px 9px 20px;

  > *:first-child {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.5;
    font-weight: 500;
    margin: 0px 10px 0px 28px;
  }
`

export const BlockedListFooter = styled<{}, 'footer'>('footer')`
  box-sizing: border-box;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(160, 161, 178, 0.15);
`

export const BlockedListFooterWithOptions = styled<{}, 'footer'>('footer')`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid rgba(160, 161, 178, 0.15);
`
