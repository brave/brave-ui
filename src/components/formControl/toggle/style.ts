import styled, { css, ThemedStyledProps } from '../../style/theme'
import { Props } from './index'
import color from '@ctrl/tinycolor'

function defaultSmall (
  defaultValue: any,
  smallValue: any
) {
  return (p: Props) => {
    switch (p.size) {
      case 'default':
        return defaultValue
      case 'small':
        return smallValue
    }
  }
}

const getTheme = (p: ThemedStyledProps<Props>) => {
  let bulletColor = '#FFFFFF'
  let bulletHoverColor = '#FFFFFF'
  let bulletActiveColor = '#FFFFFF'
  let sliderColor = p.theme.brandGrey300
  let sliderHoverColor = p.theme.brandGrey400
  let focusColor = color(p.theme.brandPrimary).setAlpha(.4).toHslString()

  if (p.checked) {
    bulletColor = p.theme.brandPrimary
    bulletHoverColor = p.theme.brandPrimaryHover
    bulletActiveColor = p.theme.brandPrimaryActive
  }

  return css`
  --toggle-bullet-color: ${bulletColor};
  --toggle-bullet-hoverColor: ${bulletHoverColor};
  --toggle-bullet-activeColor: ${bulletActiveColor};
  --toggle-bullet-focus: ${p.theme.boxShadow.size} ${focusColor};
  --toggle-slider-color: ${sliderColor};
  --toggle-slider-hoverColor: ${sliderHoverColor}
  `
}

const moveBullet = (p: Props) => {
  let translate = '22px'
  if (p.size === 'small') {
    translate = '16px'
  }
  if (!p.checked) {
    translate = '0'
  }

  return css`
  --toggle-bullet-translate: translateX(${translate});
  `
}

// TODO: the Focus of this element needs hooked up correctly.
// The styling is right but tabbing to the element in the dom doesn't work.
export const StyledBullet = styled<Props, 'div'>('div')`
  ${getTheme};
  ${moveBullet};
  position: absolute;
  cursor: pointer;
  height: ${defaultSmall('20px', '16px')};
  width: ${defaultSmall('20px', '16px')};
  background-color: var(--toggle-bullet-color);
  border-radius: ${(p) => p.theme.borderRadius.circle};
  box-shadow: ${(p) => p.theme.dropShadow.small};
  transform: var(--toggle-bullet-translate);
  transition: ${(p) => p.theme.transition.default};
`

export const StyledSlider = styled<Props, 'div'>('div')`
  ${getTheme};
  position: absolute;
  top: ${defaultSmall('6px', '5px')};
  height: ${defaultSmall('8px', '6px')};
  width: ${(p) => p.size === 'small' ? '28px' : '42px'};
  background-color: var(--toggle-slider-color);
  border-radius: ${(p) => p.theme.borderRadius.small};
  transition: ${(p) => p.theme.transition.default};
`

export const StyleToggle = styled<Props, 'div'>('div')`
  position: relative;
  display: inline-block;
  height: ${(p) => p.size === 'small' ? '16px' : '20px'};
  width: ${(p) => p.size === 'small' ? '28px' : '42px'};
  transition: ${(p) => p.theme.transition.default};
  pointer-events: ${(p) => p.disabled ? 'none' : ''};
  opacity: ${(p) => p.disabled ? p.theme.disabledAlpha : ''};


  ${StyledSlider} {
    background-color: var(--toggle-slider-color);
  }

  :hover {
    ${StyledSlider} {
      background-color: var(--toggle-slider-hoverColor);
    }
  }

  :active {
    ${StyledBullet} {
      background-color: var(--toggle-bullet-activeColor);
    }
  }
`

export const StyledWrapper = styled<Props, 'div'>('div')`
  display: flex;
`
  // :focus {
  //   ${StyledBullet} {
  //     box-shadow: var(--toggle-bullet-focus);
  //   }
  // }
  // TODO: This focus functionality needs work. Also need to fire the toggle event on pressing Enter on keyboard.
