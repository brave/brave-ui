/* This Source Code Form is subject to the terms of the Mozilla Public
* License. v. 2.0. If a copy of the MPL was not distributed with this file.
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { SwitchButtonProps } from './index'
import theme from '../theme'
import { setSize } from '../helpers'

/**
* Wrapper for the switch button
* Wraps both labels and the switch
*/
const StyledSwitchButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;

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
  font-size: ${(p: SwitchButtonProps) => setSize(p, '24px', 'inherit', 'inherit')};
  margin-left: ${(p: SwitchButtonProps) => setSize(p, '18px', '10px', '10px')};
  margin-right: ${(p: SwitchButtonProps) => setSize(p, '18px', '10px', '10px')};
  font-weight: 400;
` as any

/**
* The switch button itself
*/
const StyledSwitchButton = styled.input`
  box-sizing: border-box;
  -webkit-appearance: none;
  position: relative;
  width: ${(p: SwitchButtonProps) => setSize(p, '60px', '48px', '40px')};
  height: ${(p: SwitchButtonProps) => setSize(p, '26px', '16px', '14px')};
  border-radius: ${(p: SwitchButtonProps) => setSize(p, '26px', '16px', '14px')};
  border: 2px solid ${theme.switchButton.uncheckedBg};
  padding: 0 2px;
  background-color: white;
  outline: none;
  transition: linear 0.2s;
  box-shadow:
    inset
    -${(p: SwitchButtonProps) => setSize(p, '33px', '31px', '25px')} 0px 0px 0px
    ${theme.switchButton.uncheckedBg};

  &:checked {
    border: 2px solid ${theme.switchButton.checkedBg};
    box-shadow:
      inset
      ${(p: SwitchButtonProps) => setSize(p, '33px', '31px', '25px')} 0px 0px 0px
      ${theme.switchButton.checkedBg};
  }
` as any

export {
  StyledSwitchButtonWrapper,
  StyledSwitchButtonLabel,
  StyledSwitchButton
}
