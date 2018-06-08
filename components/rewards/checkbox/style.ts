/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, {css} from 'styled-components'
import { CheckboxProps } from './index'

export const StyledCheckboxWrapper = styled.div`
  position: relative;
  display: block;
  
  ${(p: CheckboxProps) => p.disabled
    ? css`
      pointer-events: none;
      animation: none;
      opacity: 0.25;
      ` : ''
    }
    
  ${(p: CheckboxProps) => p.size === 'small'
    ? css`
      width: 30px;
      height: 18px;
      ` : ''
    }
  
  ${(p: CheckboxProps) => p.size === 'medium'
    ? css`
      width: 42px;
      height: 24px;
      ` : ''
    }
` as any

export const StyledCheckboxSlider = styled.div`
  background: #A7ACB2;
  width: 100%;
  border-radius: 3px;
  
  ${(p: CheckboxProps) => p.size === 'small'
    ? css`
      height: 6px;
      margin-top: 6px;
      ` : ''
    }
  
  ${(p: CheckboxProps) => p.size === 'medium'
    ? css`
      height: 8px;
      margin-top: 8px;
      ` : ''
    }
` as any

export const StyledCheckboxBullet = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 50%;
  transition: 200ms ease-out;
    
  ${(p: CheckboxProps) => p.size === 'small'
    ? css`
      width: 18px;
      height: 18px;
      ` : ''
    }
  
  ${(p: CheckboxProps) => p.size === 'medium'
    ? css`
      width: 24px;
      height: 24px;
      ` : ''
    }
  
  ${(p: CheckboxProps) => p.checked
    ? css`
      background-color: #6D73D2;
      transform: translate(calc(100% + 5px), calc(-50% - 4px));
      ` : ''
    }
  
  ${(p: CheckboxProps) => !p.checked
    ? css`
      background-color: #CDD1D5;
      transform: translate(-5px, calc(-50% - 4px));
      ` : ''
    }
` as any
