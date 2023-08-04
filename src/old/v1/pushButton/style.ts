/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { PushButtonProps } from './index'
import { setTheme, setValueBasedOnSize } from '../../../helpers'
import newTheme from '../newTheme'

const StyledPushButton = styled.button<PushButtonProps>`
  font-size: ${(p: PushButtonProps) => setValueBasedOnSize(p.size, '13px', undefined, '16px')};
  min-width: ${(p: PushButtonProps) => setValueBasedOnSize(p.size, '112px', undefined, '190px')};
  min-height: ${(p: PushButtonProps) => setValueBasedOnSize(p.size, '40px', undefined, '52px')};
  border-radius: ${(p: PushButtonProps) => setValueBasedOnSize(p.size, '20px', undefined, '32px')};
  text-transform: ${(p: PushButtonProps) => setTheme(p.customStyle, 'textTransform')};
  line-height: ${(p: PushButtonProps) => setValueBasedOnSize(p.size, '26px', undefined, '42px')};
  font-weight: ${(p: PushButtonProps) => setTheme(p.customStyle, 'fontWeight')};
  text-decoration: none;
  font-family: inherit;
  position: relative;
  display: inline-block;
  text-align: center;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: none;
  width: auto;
  white-space: nowrap;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  -webkit-app-region: no-drag;
  cursor: pointer;
  user-select: none;
  transition: .1s opacity, .1s background;
  letter-spacing: 1px;

  &:active {
    bottom: -1px;
  }

  ${(p: PushButtonProps) => p.disabled
    ? css`
    pointer-events: none;
    animation: none;
    opacity: 0.25;
    ` : ''
  }

  ${(p: PushButtonProps) => p.color === 'default'
    ? css`
      color: ${newTheme.pushButton.default.color};
      stroke: ${newTheme.pushButton.default.color};
      background-color: ${newTheme.pushButton.default.bg};

      &:hover {
        color: ${newTheme.pushButton.default.hoverColor};
      }
    `
    : ''
  }

  ${(p: PushButtonProps) => p.color === 'primary'
    ? css`
      background: ${newTheme.pushButton.primary.background};
      color: ${newTheme.pushButton.primary.color};
      stroke: ${newTheme.pushButton.primary.color};

      &:hover {
        opacity: 0.9;
      }
    ` : ''
  }

  ${(p: PushButtonProps) => p.color === 'secondary'
    ? css`
      background: ${newTheme.pushButton.secondary.background};
      border: 2px solid ${newTheme.pushButton.secondary.borderColor};
      color: ${newTheme.pushButton.secondary.color};
      stroke: ${newTheme.pushButton.secondary.color};

      &:hover {
        border: 2px solid ${newTheme.pushButton.secondary.borderHoverColor};
        color: ${newTheme.pushButton.secondary.hoverColor};
        stroke: ${newTheme.pushButton.secondary.hoverColor};
      }
    ` : ''
  }
`

const StyledPushButtonLink = StyledPushButton.withComponent('a')

export {
  StyledPushButton,
  StyledPushButtonLink
}
