/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { SwitchButtonProps } from './index'
import defaultTheme from '../defaultTheme'
import { setValueBasedOnSize, setTheme } from '../helpers'

/**
* Wrapper for the switch button
* Wraps both labels and the switch
*/
const StyledSwitchButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: inherit;
  color: inherit;

  ${(p: SwitchButtonProps) => p.disabled && css`
    opacity: 0.3;
    user-select: none;`
  }
` as any

/**
* Label for the switch button
* Sets the styles for both left and right labels
*/
const StyledSwitchButtonLabel = styled.label`
  box-sizing: border-box;
  font-size: ${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, 'inherit', 'inherit', '24px')};
  margin-left: ${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, '10px', '10px', '18px')};
  margin-right: ${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, '10px', '10px', '18px')};
  font-weight: 400;
  font-family: inherit;
  color: ${(p: SwitchButtonProps) => setTheme(p.theme, 'labelColor') || 'inherit'};
  user-select: ${(p: SwitchButtonProps) => setTheme(p.theme, 'userSelect') || 'none'};
` as any

/**
* The switch button itself
*/
const StyledSwitchButton = styled.input`
  box-sizing: border-box;
  -webkit-appearance: none;
  position: relative;
  min-width: ${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, '48px', '40px','60px')};
  height: ${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, '16px', '14px', '26px')};
  border-radius: ${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, '16px', '14px', '26px')};
  border: 2px solid ${defaultTheme.switchButton.uncheckedBg};
  padding: 0 2px;
  background-color: white;
  outline: none;
  transition: linear 0.2s;
  box-shadow:
    inset
    -${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, '31px', '25px', '33px')} 0px 0px 0px
    ${defaultTheme.switchButton.uncheckedBg};

  &:checked {
    border: 2px solid ${defaultTheme.switchButton.checkedBg};
    box-shadow:
      inset
      ${(p: SwitchButtonProps) => setValueBasedOnSize(p.size, '31px', '25px', '33px')} 0px 0px 0px
      ${defaultTheme.switchButton.checkedBg};
  }
` as any

export {
  StyledSwitchButtonWrapper,
  StyledSwitchButtonLabel,
  StyledSwitchButton
}
