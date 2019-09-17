/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css, ThemedStyledProps } from '../../../theme'
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
  let subtleBackgroundColor
  let hoverColor
  let mainColor
  let pressedColor
  let outlineColor
  if (p.brand === 'brave') {
    subtleBackgroundColor = p.theme.color.brandBraveSubtleBackground
    hoverColor = p.theme.color.brandBraveHover
    mainColor = p.theme.color.brandBraveMain
    pressedColor = p.theme.color.brandBravePressed
    outlineColor = p.theme.color.brandBraveOutline
  } else if (p.brand === 'rewards') {
    subtleBackgroundColor = p.theme.color.brandBatSubtleBackground
    hoverColor = p.theme.color.brandBatHover
    mainColor = p.theme.color.brandBatMain
    pressedColor = p.theme.color.brandBatPressed
    outlineColor = p.theme.color.brandBatOutline
  }
  return css`
    --brand-color-subtle: ${subtleBackgroundColor};
    --brand-color-hover: ${hoverColor};
    --brand-color-main: ${mainColor};
    --brand-color-pressed: ${pressedColor};
    --brand-style-focus-shadow: 0 0 0 4px ${outlineColor};
  `
}

const StyledButton = styled<Props, 'button'>('button')`
  ${getThemeColors}
  --icon-size: ${largeMediumSmall('18px', '16px', '14px')};
  --icon-spacing: ${largeMediumSmall('6px', '6px', '6px')};
  --webkit-appearance: none;
  box-sizing: border-box;
  background: none;
  border: none;
  outline-color: transparent;
  display: flex;
  flex-direction: ${p => p.icon && p.icon.position === 'after' ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: center;
  font-family: Muli, sans-serif;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  font-size: ${largeMediumSmall('16px', '14px', '13px')};
  border-radius: ${largeMediumSmall('24px', '20px', '16px', '28px')};
  width: ${p => p.size === 'call-to-action' ? '100%' : 'auto'};
  min-width: ${largeMediumSmall('85px', '82px', '68px', '235px')};
  padding: ${largeMediumSmall('13px 20px', '9px 16px', '5px 16px', '19px 15px')};
  opacity: ${p => p.disabled ? '0.4' : 'none'};
`

export default StyledButton

export const DefaultButton = styled(StyledButton)`
  color: ${p => p.theme.color.defaultControl};
  border: 1px solid ${p => p.theme.color.defaultButtonBorder};
  :hover:enabled {
    color: var(--brand-color-main);
    border-color: var(--brand-color-main);
  }
  :focus:enabled {
    border-color: var(--brand-color-main);
    box-shadow: var(--brand-style-focus-shadow);
  }
  :active:enabled {
    color: var(--brand-color-main);
    border-color: var(--brand-color-main);
    box-shadow: var(--brand-style-focus-shadow);
  }
`

export const PrimaryButton = styled(StyledButton)`
  color: #fff;
  background: var(--brand-color-main);
  :hover:enabled {
    background: var(--brand-color-hover);
  }
  :focus:enabled {
    background: var(--brand-color-main);
    box-shadow: var(--brand-style-focus-shadow);
  }
  :active:enabled {
    background: var(--brand-color-main);
    box-shadow: var(--brand-style-focus-shadow);
  }
`

export const SecondaryButton = styled(StyledButton)`
  color: var(--brand-color-main);
  :hover:enabled {
    background: var(--brand-color-subtle);
    color: var(--brand-color-main);
  }
  :focus:enabled {
    background: var(--brand-color-subtle);
    color: var(--brand-color-main);
    box-shadow: var(--brand-style-focus-shadow);
  }
  :active:enabled {
    background: var(--brand-color-subtle);
    color: var(--brand-color-pressed);
    box-shadow: var(--brand-style-focus-shadow);
  }
`

export const TertiaryButton = styled(StyledButton)`
  color: ${p => p.theme.color.defaultControl};
  :hover:enabled {
    background: var(--brand-color-subtle);
    color: var(--brand-color-main);
  }
  :focus:enabled {
    background: var(--brand-color-subtle);
    color: var(--brand-color-main);
    box-shadow: var(--brand-style-focus-shadow);
  }
  :active:enabled {
    background: var(--brand-color-subtle);
    color: var(--brand-color-pressed);
    box-shadow: var(--brand-style-focus-shadow);
  }
`

export const StyledText = styled<Props, 'div'>('div')`
  /* min-height so that we get consistent height with / without an icon */
  min-height: var(--icon-size);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0;
  font-weight: ${p => p.level === 'primary' ? 700 : 600};
  text-transform: ${p => p.size === 'call-to-action' ? 'uppercase' : 'none'};
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
    return p.icon.position === 'before' ? '0 var(--icon-spacing) 0 -4px' : '0 -4px 0 var(--icon-spacing)'
  }};
`
