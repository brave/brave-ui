/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css, ThemedStyledProps } from '../style/theme'
import { Props } from './index'

function largeMediumSmall (largeValue: any, mediumValue: any, smallValue: any, ctaValue?: any) {
  return (p: Props) => {
    switch (p.size) {
      case 'large':
        return largeValue
      case 'medium':
        return mediumValue
      case 'small':
        return smallValue
      case 'call-to-action':
        return (ctaValue == null) ? largeValue : ctaValue
    }
  }
}

const getThemeColors = (p: ThemedStyledProps<Props>) => {
  let mainColor
  let hoverColor
  let activeColor
  if (p.disabled) {
    mainColor = hoverColor = activeColor = p.theme.color.btn.disabled
  } else {
    switch (p.type) {
      case 'accent':
        if (p.brand === 'brave') {
          mainColor = p.theme.color.brand.brave
          hoverColor = p.theme.color.brand.braveHover
          activeColor = p.theme.color.brand.braveActive
        } else if (p.brand === 'rewards') {
          mainColor = p.theme.color.brand.rewards
          hoverColor = p.theme.color.brand.rewardsHover
          activeColor = p.theme.color.brand.rewardsActive
        }
        break
      case 'default':
        mainColor = p.theme.color.btn.default
        hoverColor = p.theme.color.btn.defaultHover
        activeColor = p.theme.color.btn.defaultActive
        break
      case 'danger':
        mainColor = p.theme.color.btn.danger
        hoverColor = p.theme.color.btn.dangerHover
        activeColor = p.theme.color.btn.dangerActive
        break
      case 'subtle':
        mainColor = '#AEB1C2' // this is being deprecated
        hoverColor = '#C2C4CF' // this is being deprecated
        activeColor = '#84889C' // this is being deprecated
        break
    }
  }
  return css`
    --button-main-color: ${mainColor};
    --button-main-color-hover: ${hoverColor};
    --button-main-color-active: ${activeColor};
  `
}

const StyledButton = styled.button<Props>`
  ${getThemeColors}
  --button-state-color: var(--button-main-color);
  --icon-size: ${largeMediumSmall('18px', '16px', '14px')};
  --icon-spacing: ${largeMediumSmall('6px', '6px', '6px')};
  --webkit-appearance: none;
  box-sizing: border-box;
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: ${p => p.icon && p.icon.position === 'after' ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fontFamily.heading};
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  font-size: ${largeMediumSmall('14px', '14px', '13px')};
  border-radius: ${largeMediumSmall('24px', '20px', '16px', '28px')};
  width: ${p => p.size === 'call-to-action' ? '100%' : 'auto'};
  padding: ${largeMediumSmall('10px 20px', '7px 18px', '4px 16px', '19px 15px')};
  :hover:enabled {
    --button-state-color: var(--button-main-color-hover);
    transition: ${p => p.theme.transitionSpeed[1]};
  }
  :active:enabled {
    --button-state-color: var(--button-main-color-active);
  }
`

export default StyledButton

export const PrimaryButton = styled(StyledButton)`
  color: #fff;
  background: var(--button-state-color);
  border: 1px solid var(--button-state-color);
`

export const SecondaryButton = styled(StyledButton)`
  border: 1px solid;
  color: var(--button-state-color);
`

export const TertiaryButton = styled(StyledButton)`
  color: var(--button-state-color);
`

export const StyledText = styled.div<Props>`
  /* min-height so that we get consistent height with / without an icon */
  min-height: var(--icon-size);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0;
  font-weight: 400;
  text-transform: ${p => p.size === 'call-to-action' ? 'uppercase' : 'none'};
  line-height: 1;
`

export const StyledIcon = styled.div<Props>`
  display: block;
  line-height: 0;
  height: var(--icon-size);
  width: var(--icon-size);
  margin: ${(p) => {
    // no margin required if only 1 content item
    if (!p.text || !p.icon) return null
    // -4px is a universal 'fix' to make the icons appear more aligned
    // with the text.
    // Consider removing this if not all icons are looking great with it,
    // and designers can address in icons, or accept the alignment.
    return p.icon.position === 'before' ? '0 var(--icon-spacing) 0 -4px' : '0 -4px 0 var(--icon-spacing)'
  }};
`
