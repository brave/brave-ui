/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from '../../../theme'
import * as CSS from 'csstype'
import { DonateType } from './index'
import palette from '../../../theme/colors'

interface Theme {
  paddingBox: CSS.PaddingProperty<1>
  sendBgColor: CSS.Color
  disabledSendColor: CSS.Color
  paddingSend: CSS.PaddingProperty<1>
  paddingFunds: CSS.PaddingProperty<1>
}

interface StyleProps {
  disabled?: boolean
  donateType?: DonateType
  isMobile?: boolean
  monthly?: boolean
}

const customStyle: Record<DonateType, Theme> = {
  big: {
    paddingBox: '0 19px 0 55px',
    sendBgColor: '#4c54d2',
    disabledSendColor: '#3e45b2',
    paddingSend: '14px 0px 13px 0px',
    paddingFunds: '13px 12px 13px 24px'
  },
  small: {
    paddingBox: '0 0 0 23px',
    sendBgColor: '#392dd1',
    disabledSendColor: '#1a22a8',
    paddingSend: '11px 0 10px 47px',
    paddingFunds: '12px 0 11px 25px'
  }
}

const getStyle = (p: StyleProps) => {
  const style = customStyle[p.donateType || 'small']

  return css`
    --donate-content-padding: ${style.paddingBox};
    --donate-send-bg: ${style.sendBgColor};
    --donate-send-color: ${p.disabled ? style.disabledSendColor : '#fff'};
    --donate-send-padding: ${style.paddingSend};
    --donate-funds-padding: ${style.paddingFunds};
  `
}

const getAmountStyle = (isMobile?: boolean) => {
  if (!isMobile) {
    return null
  }

  return css`
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
  `
}

const getIconColor = (p: StyleProps) => {
  if (p.monthly) {
    return palette.orange500
  }

  if (p.disabled) {
    return palette.purple300
  }

  return palette.blurple600
}

export const StyledWrapper = styled<StyleProps, 'div'>('div')`
  position: relative;
  font-family: ${p => p.theme.fontFamily.body};
  margin: ${p => p.isMobile ? '0 auto 8px auto' : 0}px
  ${getStyle}
`

export const StyledContent = styled<StyleProps, 'div'>('div')`
  margin-top: ${p => p.isMobile ? -30 : 0}px;
  padding: ${p => p.isMobile ? '0px' : 'var(--donate-content-padding)'};
`

export const StyledDonationTitle = styled<StyleProps, 'div'>('div')`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #fff;
  margin-bottom: ${p => p.isMobile ? 20 : 14}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 167px;
  padding-left: ${p => p.isMobile ? 20 : 0}px;
`

export const StyledSend = styled<StyleProps, 'div'>('div')`
  background: ${p => p.monthly
    ? `inherit`
    : `var(--donate-send-bg)`
  };
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: var(--donate-send-color);
  padding: var(--donate-send-padding);
  text-transform: uppercase;
  border: none;
  width: 100%;
  text-align: left;
  padding-bottom: ${p => p.monthly ? 20 : 13}px;
`

export const StyledSendButton = styled<{}, 'button'>('button')`
  display: block;
  border: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: var(--donate-send-bg);
  cursor: pointer;
`

export const StyledMonthlySendButton = styled(StyledSendButton)`
  color: ${palette.orange500};
  background: ${palette.white};
  border-radius: 20px;
  font-size: 12px;
  padding: 6px 15px;
  text-transform: none;
  width: 180px;
  font-weight: bold;
`

export const StyledButtonWrapper = styled<StyleProps, 'div'>('div')`
  display: block;
  width: ${p => p.isMobile ? 190 : 245}px;
  margin: 0 auto;
`

export const StyledIconSend = styled<StyleProps, 'span'>('span')`
  vertical-align: middle;
  display: inline-block;
  margin-right: 15px;
  color: ${p => getIconColor(p)};
  width: 27px;
  height: 27px;
`

export const StyledFunds = styled<{}, 'div'>('div')`
  font-family: Muli, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.69;
  color: #fff;
  padding: var(--donate-funds-padding);
  background: #1b1d2f;
  display: flex;
  position:absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  a {
    color: #6cc7fd;
    text-decoration: none;
  }
`

export const StyledIconFace = styled<{}, 'div'>('div')`
  flex-basis: 32px;
  margin: -7px 6px 0 0;
`

export const StyledFundsText = styled<{}, 'div'>('div')`
  flex: 1;
  margin-right: 9px;
`

export const StyledAmountsWrapper = styled<StyleProps, 'div'>('div')`
  width: 100%;
  display: block;
  ${p => getAmountStyle(p.isMobile)}
`

export const StyledContributionWrapper = styled<{}, 'div'>('div')`
  float: right;
  color: ${palette.white};
  margin: -33px -35px 0px;
`

export const StyledContributionText = styled<{}, 'span'>('span')`
  font-size: 10px;
  font-weight: 300;
  text-align: right;
  display: block;
  line-height: 12px;
  text-transform: none;
`
