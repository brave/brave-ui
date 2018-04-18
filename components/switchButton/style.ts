/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { SwitchButtonProps } from './index'
import theme from '../theme'

/**
 * Wrapper for the switch toggle
 */
const StyledSwitchButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  ${(p: SwitchButtonProps) => p.disabled
    ? css`
      opacity: 0.3;
      user-select: none;
    ` : ''
  }
` as any

/**
 * Helper labels
 */
 const StyledSwitchButtonLeftLabel = styled.label`
  margin-right: 10px;
` as any

const StyledSwitchButtonRightLabel = styled.label`
  margin-left: 10px;
` as any

/**
 * Input Style
 * Set this as display: none as we have our own hacked element
 */
const StyledCheckbox = styled.input`
  display: none;
` as any

/**
 * Wrapper for the switch knob
 * This is the main (white) switch area
 */
 const StyledSwitchButton = styled.label`
  width: ${(p: SwitchButtonProps) => p.small ? '40px' : '48px'};
  height: ${(p: SwitchButtonProps) => p.small ? '14px' : '16px'};
  border-radius: ${(p: SwitchButtonProps) => p.small ? '14px' : '16px'};
  background: ${theme.switchButton.uncheckedBg};
  box-sizing: border-box;
  padding: 0 2px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 1px 1px 1px #bbb;
  transition: all 0.4s;

  &:active {
    box-shadow: inset 0 0 0 ${(p: SwitchButtonProps) => p.small ? '40px' : '48px'} #bbb;
  }

  &:active > i {
    width: ${(p: SwitchButtonProps) => p.small ? '14px' : '16px'};
  }

  ${(p: SwitchButtonProps) => p.checked
    ? css`
      box-shadow: ${theme.switchButton.checkedBg};
      border: none;

      &:active > i {
        margin-left: calc(90% - ${(p: SwitchButtonProps) => p.small ? '10px' : '12px'})
      }
    ` : ''
  }
` as any

/**
 * Switch toggle knob
 */
const StyledSwitchButtonKnob = styled.i`
  box-sizing: border-box;
  height: calc(${(p: SwitchButtonProps) => p.small ? '14px' : '16px'} - 4px);
  width: calc(${(p: SwitchButtonProps) => p.small ? '14px' : '16px'} - 4px);
  border-radius: ${(p: SwitchButtonProps) => p.small ? '14px' : '16px'};
  background: ${theme.switchButton.knob};
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  box-shadow: 0 2px 2px rgba(0,0,0,0.25);
  pointer-events: none;

  ${(p: SwitchButtonProps) => p.checked
    ? css`
      margin-left: calc(100% - ${(p: SwitchButtonProps) => p.small ? '10px' : '12px'});
      box-shadow: 0 2px 2px rgba(0,0,0,0.25);
    ` : ''
  }
` as any

export {
  StyledSwitchButtonWrapper,
  StyledSwitchButtonLeftLabel,
  StyledSwitchButtonRightLabel,
  StyledCheckbox,
  StyledSwitchButton,
  StyledSwitchButtonKnob
}
