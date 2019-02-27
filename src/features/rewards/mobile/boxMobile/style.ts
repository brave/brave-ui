/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from '../../../../components/style/theme'
import { Type } from './index'
import Card, { CardProps } from '../../../../components/card'
import { ComponentType } from 'react'

interface StyleProps {
  open?: boolean
  float?: string
  type?: Type
  enabled?: boolean
  detailView?: boolean
  contentShown?: boolean
}

interface CardStyleProps extends CardProps {
  checked?: boolean
}

const colors: Record<Type, string> = {
  ads: '#C12D7C',
  contribute: '#9F22A1',
  donation: '#696FDC'
}

const getFixedStyling = (detailView?: boolean) => {
  if (!detailView) {
    return null
  }

  return css`
    top: 0px;
    left: 0px;
    position: fixed;
    background: #fff;
  `
}

export const StyledCard = styled(Card as ComponentType<CardStyleProps>)`
  margin-bottom: 15px;
  padding: ${p => p.checked ? '30px 30px 10px' : '30px'};
  font-family: Poppins, sans-serif;
`

export const StyledFlip = styled.div`
  display: block;
`

export const StyledContentWrapper = styled.div<StyleProps>`
  flex-wrap: wrap;
  display: ${p => p.open ? 'flex' : 'none'};
`

export const StyledLeft = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
`

export const StyledRight = styled.div`
  flex-basis: 40px;
  justify-content: flex-end;
  display: flex;
  max-height: 30px;
`

export const StyledTitle = styled.div<StyleProps>`
  height: 36px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.27;
  letter-spacing: normal;
  display: inline-block;
  vertical-align: ${p => p.contentShown ? 'top' : 'middle'};
  margin-left: ${p => p.detailView ? 10 : 0}px;
  color: ${p => {
    if (p.enabled === false) return '#838391'
    return p.type && colors[p.type] || '#4b4c5c'
  }};
  margin-top: ${p => p.contentShown ? 3 : -5}px;
`

export const StyledBreak = styled.div`
  width: 100%;
  display: block;
`

export const StyledDescription = styled.div<StyleProps>`
  width: 100%;
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  font-weight: 300;
  color: #3B3E4F;
  margin-top: ${p => p.contentShown ? 0 : -5}px;
`

export const StyledContent = styled.div<StyleProps>`
  flex-basis: 100%;
  flex-grow: 1;
  margin-top: ${p => p.contentShown ? 15 : 10}px;
  text-align: ${p => p.contentShown ? 'default' : 'center'};
`

export const StyledSettingsWrapper = styled.div<StyleProps>`
  background: #fff;
  overflow: hidden;
  display: ${p => p.open ? 'block' : 'none'};
`

export const StyledSettingsClose = styled.button`
  display: block;
  position: absolute;
  right: 15px;
  top: 30px;
  width: 21px;
  height: 21px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #DFDFE8;
`

export const StyledSettingsTitle = styled.span`
  color: #4B4C5C;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 32px;
  width: 100%;
  display: block;
  text-align: center;
  padding-top: 25px;
`

export const StyledSettingsText = styled.div`
  display: inline-block;
  vertical-align: top;
  color: #4B4C5C;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 5px;
`

export const StyleDetailsLink = styled.a`
  color: #4C54D2;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
`

export const StyledDetailInfo = styled.div`
  width: 100%;
  padding: 0px 21px 20px;
  display: block;
`

export const StyledDetailContent = styled.div`
  margin-top: 80px;
`

export const StyledChildContent = styled.div`
  width: 100%;
  display: block;
  border-top: 1px solid #E5E5EA;
`

export const StyledSettingsContent = styled.div`
  width: 100%;
  padding: 25px;
  display: block;
`

export const StyledSettingsHeader = styled.div`
  width: 100%;
  display: block;
`

export const StyledSettingsListTitle = styled.span`
  vertical-align: top;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 28px;
  display: inline-block;
  margin: 5px 0px -10px 22px;
`

export const StyledArrow = styled.span`
  color: #4C54D2;
  height: 16px;
  width: 16px;
  display: inline-block;
  vertical-align: middle;
  line-height: 16px;
`

export const StyledToggleHeader = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  ${p => getFixedStyling(p.detailView)}
  margin-top: ${p => p.detailView ? 0 : -8}px;
  padding: ${p => p.detailView ? '20px 20px 15px 13px' : '0px'};
`

export const StyledBackArrow = styled.span`
  height: 28px;
  width: 25px;
  display: inline-block;
  margin-right: -3px;
`

export const StyledFullSizeWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 999;
  overflow-y: scroll;
`

export const StyledSettingsIcon = styled.button`
  width: 27px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #A1A8F2;
`

export const StyledToggleWrapper = styled.div<StyleProps>`
  margin-right: -5px;
  margin-top: ${p => p.contentShown ? 5 : 6}px;
`
