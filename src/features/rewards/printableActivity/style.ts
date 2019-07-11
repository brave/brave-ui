/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'

export const StyledWrapper = styled<{}, 'div'>('div')`
  background-color: white;
`

export const StyledMarginWrapper = styled<{}, 'div'>('div')`
  font-family: ${p => p.theme.fontFamily.body};
  margin: 50px;
`

export const StyledTitle = styled<{}, 'div'>('div')`
  font-weight: 600;
  color: #1B1D2F;
  font-family: ${p => p.theme.fontFamily.heading};
  font-size: 16px;
  line-height: 2;
`

export const StyledSubTitle = styled<{}, 'span'>('span')`
  color: #838391;
  font-weight: normal;
`

export const StyledHeader = styled<{}, 'div'>('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const StyledLeft = styled<{}, 'div'>('div')`
  flex-basis: 40%;
`

export const StyledRight = styled<{}, 'div'>('div')`
  flex-basis: 378px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-bottom: 45px;
`

export const StyledSelectOption = styled<{}, 'div'>('div')`
  font-size: 22px;
  font-weight: 300;
  color: #4C54D2;
`

export const StyledIconWrap = styled<{}, 'div'>('div')`
  margin-bottom: 103px;
  display: flex;
`

export const StyledIcon = styled<{}, 'button'>('button')`
  display: flex;
  margin-right: 35px;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`

export const StyledIconText = styled<{}, 'div'>('div')`
  font-size: 14px;
  line-height: 1.43;
  color: #838391;
  margin-left: 13px;
`

export const StyledBalance = styled<{}, 'div'>('div')`
  margin-top: 41px;
`

export const StyledTables = styled<{}, 'div'>('div')`
  margin: 0 -50px;
  padding: 0 50px;
`

export const StyledWarning = styled<{}, 'div'>('div')`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ebecf0;
  border-bottom: 1px solid #ebecf0;
  margin: 0 -50px;
  padding: 17px 50px 17px;
  align-items: flex-start;
`

export const StyledWarningText = styled<{}, 'div'>('div')`
  max-width: 508px;
  font-family: Muli, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
  padding-left: 8px;
`

export const StyledNote = styled<{}, 'div'>('div')`
  max-width: 508px;
  margin-top: 46px;
  font-family: Muli, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
`

export const StyledTableTitle = styled<{}, 'div'>('div')`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  line-height: 2.79;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  text-transform: uppercase;
  padding-top: 14px;
  margin-top: 28px;
`

export const StyledTableSubTitle = styled<{}, 'div'>('div')`
  font-size: 14px;
  font-weight: 300;
  line-height: 2.79;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  text-transform: none;
`

export const StyledVerified = styled<{}, 'div'>('div')`
  display: flex;
  font-size: 12px;
  align-items: center;
  line-height: 2;
  color: #9e9fab;
  padding: 11px 0 32px;
`

export const StyledVerifiedText = styled<{}, 'div'>('div')`
  margin-left: 5px;
`

export const StyledClosing = styled<{}, 'div'>('div')`
  margin-top: -10px;
`

export const StyledActionIcon = styled<{}, 'span'>('span')`
  color: #A1A8F2;
  width: 27px;
`

export const StyledAlertWrapper = styled<{}, 'div'>('div')`
  color: #E9AB18;
  width: 20px;
  margin-left: 3px;
`

export const StyledWarningWrapper = styled<{}, 'div'>('div')`
  display: flex;
`

export const StyledVerifiedIcon = styled<{}, 'div'>('div')`
  display: flex;
  color: #392DD1;
  width: 24px;
  height: 24px;
`
