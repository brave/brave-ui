/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'

export const StyledWrapper = styled<{}, 'div'>('div')`
  display: inline-block;
  font-family: ${p => p.theme.fontFamily.body};
  line-height: 1.5;
`

export const StyledTitle = styled<{}, 'div'>('div')`
  color: ${p => p.theme.color.text};
  font-family: ${p => p.theme.fontFamily.heading};
  font-size: 18px;
`

export const StyledSubTitle = styled<{}, 'span'>('span')`
  color: inherit;
`

export const StyledHeader = styled<{}, 'div'>('div')`
  display: flex;
  margin: 0 0 48px;
`

export const StyledLeft = styled<{}, 'div'>('div')`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: 0 48px 0 0;
`

export const StyledRight = styled<{}, 'div'>('div')`
  display: flex;
  flex-direction: column;
  flex: 3;
`

export const StyledSelectOption = styled<{}, 'div'>('div')`
  font-size: 18px;
  color: #4c54d2;
`

export const StyledIconWrap = styled<{}, 'div'>('div')`
  margin-bottom: 60px;
  display: flex;
`

export const StyledIcon = styled<{}, 'button'>('button')`
  display: flex;
  margin-right: 32px;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`

export const StyledIconPDF = styled<{}, 'button'>('button')`
  display: none;
  margin-right: 35px;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`

export const StyledIconText = styled<{}, 'div'>('div')`
  font-size: 14px;
  color: ${p => p.theme.color.text};
  margin-left: 8px;
`

export const StyledBalance = styled<{}, 'div'>('div')`
  display: none;
  margin-top: 41px;
`

export const StyledTables = styled<{}, 'div'>('div')`
  background-color: #f9f9fd;
  padding: 24px;
  border-radius: 8px;
`

export const StyledWarning = styled<{}, 'div'>('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-top: 1px solid #EFEFEF;
`

export const StyledWarningText = styled<{}, 'div'>('div')`
  font-size: 12px;
  color: ${p => p.theme.color.text};
  margin: 0 0 0 12px;
`

export const StyledNote = styled<{}, 'div'>('div')`
  font-size: 12px;
  color: ${p => p.theme.color.text};
  padding: 24px;
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
  color: #a1a8f2;
  width: 27px;
`

export const StyledAlertWrapper = styled<{}, 'div'>('div')`
  color: #e9ab18;
  width: 20px;
  height: 20px;
  display: flex;
  margin: 4px;
`

export const StyledWarningWrapper = styled<{}, 'div'>('div')`
  display: flex;
  align-items: center;
`

export const StyledVerifiedIcon = styled<{}, 'div'>('div')`
  display: flex;
  color: #392dd1;
  width: 24px;
  height: 24px;
`
