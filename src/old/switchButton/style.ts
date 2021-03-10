/* This Source Code Form is subject to the terms of the Mozilla Public
 License. v. 2.0. If a copy of the MPL was not distributed with this file.
 You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import defaultTheme from '../defaultTheme'
import { setValueBasedOnSize, setTheme } from '../../helpers'

interface SwitchButtonTheme {
  labelColor?: string
  userSelect?: string
}

export type StyleProps = {
  disabled?: boolean
  customStyle?: SwitchButtonTheme
  switchSize?: 'large' | 'medium' | 'small'
}

/**
 * Wrapper for the switch button
 * Wraps both labels and the switch
 */
const StyledSwitchButtonWrapper = styled.div<StyleProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: inherit;
  color: inherit;

  ${(p) => p.disabled && css`
    opacity: 0.3;
    user-select: none;`
  }
`

/**
 * Label for the switch button
 * Sets the styles for both left and right labels
 */
const StyledSwitchButtonLabel = styled.label<StyleProps>`
  box-sizing: border-box;
  font-size: ${(p) => setValueBasedOnSize(p.switchSize, 'inherit', 'inherit', '24px')};
  margin-left: ${(p) => setValueBasedOnSize(p.switchSize, '10px', '10px', '18px')};
  margin-right: ${(p) => setValueBasedOnSize(p.switchSize, '10px', '10px', '18px')};
  font-weight: 400;
  font-family: inherit;
  color: ${(p) => setTheme(p.customStyle, 'labelColor') || 'inherit'};
  user-select: ${(p) => setTheme(p.customStyle, 'userSelect') || 'none'};
`

/**
 * The switch button itself
 */
const StyledSwitchButton = styled.input<StyleProps>`
  box-sizing: border-box;
  appearance: none;
  position: relative;
  min-width: ${(p) => setValueBasedOnSize(p.switchSize, '48px', '40px','60px')};
  height: ${(p) => setValueBasedOnSize(p.switchSize, '16px', '14px', '26px')};
  border-radius: ${(p) => setValueBasedOnSize(p.switchSize, '16px', '14px', '26px')};
  border: 2px solid ${defaultTheme.switchButton.uncheckedBg};
  padding: 0 2px;
  background-color: white;
  outline: none;
  transition: linear 0.2s;
  box-shadow:
    inset
    -${(p) => setValueBasedOnSize(p.switchSize, '31px', '25px', '33px')} 0px 0px 0px
    ${defaultTheme.switchButton.uncheckedBg};

  &:checked {
    border: 2px solid ${defaultTheme.switchButton.checkedBg};
    box-shadow:
      inset
      ${(p) => setValueBasedOnSize(p.switchSize, '31px', '25px', '33px')} 0px 0px 0px
      ${defaultTheme.switchButton.checkedBg};
  }
`

export {
  StyledSwitchButtonWrapper,
  StyledSwitchButtonLabel,
  StyledSwitchButton
}
