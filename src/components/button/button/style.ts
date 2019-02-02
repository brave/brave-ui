/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css, ThemedStyledProps } from '../../style/theme'
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

const getTheme = (p: ThemedStyledProps<Props>) => {
  let mainColor
  let hoverColor
  let activeColor
  if (p.disabled) {
    mainColor = hoverColor = activeColor = p.theme.btnDisabled
  } else {
    switch (p.type) {
      case 'default':
        mainColor = p.theme.brandPrimary
        hoverColor = p.theme.brandPrimaryHover
        activeColor = p.theme.brandPrimaryActive
        break
      case 'accent':
        mainColor = p.theme.brandAccent
        hoverColor = p.theme.brandAccentHover
        activeColor = p.theme.brandAccentActive
        break
      case 'destructive':
        mainColor = p.theme.brandDestructive
        hoverColor = p.theme.brandDestructiveHover
        activeColor = p.theme.brandDestructiveActive
        break
      case 'subtle':
        mainColor = p.theme.brandGrey500
        hoverColor = p.theme.brandGrey400
        activeColor = p.theme.brandGrey600
        break
    }
  }
  return css`
    --button-main-color: ${mainColor};
    --button-main-color-hover: ${hoverColor};
    --button-main-color-active: ${activeColor};
  `
}

const StyledButton = styled<Props, 'button'>('button')`
  ${getTheme}
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
  font-family: Poppins, sans-serif;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  font-size: ${largeMediumSmall('14px', '14px', '13px')};
  border-radius: ${largeMediumSmall('24px', '20px', '16px', '28px')};
  width: ${p => p.size === 'call-to-action' ? '100%' : 'auto'};
  min-width: ${largeMediumSmall('116px', '104px', '88px', '235px')};
  padding: ${largeMediumSmall('14px 15px', '11px 15px', '7px 10px', '19px 15px')};
  :hover:enabled {
    --button-state-color: var(--button-main-color-hover);
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

export const StyledText = styled<Props, 'div'>('div')`
  /* min-height so that we get consistent height with / without an icon */
  min-height: var(--icon-size);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0;
  font-weight: 500;
  line-height: 1;
`

export const StyledIcon = styled<Props, 'div'>('div')`
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
    return p.icon.position === 'before'
      ? '0 var(--icon-spacing) 0 -4px'
      : '0 -4px 0 var(--icon-spacing)'
  }};
`
