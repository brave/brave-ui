/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, {css} from 'styled-components'
import { Props } from './index'

export const StyledWrapper = styled.div`
  position: relative;
  display: block;
  
  ${(p: Props) => p.disabled
    ? css`
      pointer-events: none;
      animation: none;
      opacity: 0.25;
    ` : ''
    }
    
  ${(p: Props) => p.size === 'small'
    ? css`
      width: 30px;
      height: 18px;
    ` : ''
    }
  
  ${(p: Props) => p.size === 'medium'
    ? css`
      width: 40px;
      height: 24px;
    ` : ''
    }
` as any

export const StyledSlider = styled.div`
  background: #A7ACB2;
  width: 100%;
  border-radius: 3px;
  
  ${(p: Props) => p.size === 'small'
    ? css`
      height: 6px;
      margin-top: 6px;
    ` : ''
    }
  
  ${(p: Props) => p.size === 'medium'
    ? css`
      height: 8px;
      margin-top: 8px;
    ` : ''
    }
` as any

export const StyledBullet = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 50%;
  transition: 200ms ease-out;
  
  ${(p: Props) => p.checked
    ? css`
      background-color: #6D73D2;
    ` : ''
    }
  
  ${(p: Props) => !p.checked
    ? css`
      background-color: #CDD1D5;
      transform: translate(0, calc(-50% - 4px));
    ` : ''
    }
    
  ${(p: Props) => p.size === 'small'
    ? css`
      width: 18px;
      height: 18px;
    ` : ''
    }
    
  ${(p: Props) => p.checked && p.size === 'small'
    ? css`
      transform: translate(12px, calc(-50% - 4px));
    ` : ''
    }
  
  ${(p: Props) => p.size === 'medium'
    ? css`
      width: 24px;
      height: 24px;
    ` : ''
    }
    
  ${(p: Props) => p.checked && p.size === 'medium'
    ? css`
      transform: translate(16px, calc(-50% - 4px));
    ` : ''
    }
` as any
