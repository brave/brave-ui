/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { PushButtonProps } from './index'
import theme from '../theme'

const StyledPushButton = styled.button`
  font-size: ${(p: PushButtonProps) => p.fontSize ? p.fontSize : '13px'};
  min-width: ${(p: PushButtonProps) => p.size ? p.size : '78px'};
  min-height: ${(p: PushButtonProps) => p.size ? p.size : '32px'};
  position: relative;
  display: inline-block;
  text-align: center;
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 2px;
  background-size: 16px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: none;
  line-height: 1.25;
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
      color: ${theme.pushButton.default.color};
      background-color: ${theme.pushButton.default.bg};

      &:hover {
        color: ${theme.pushButton.default.hoverColor};
      }
    `
    : ''
  }

  ${(p: PushButtonProps) => p.color === 'primary'
    ? css`
      background: linear-gradient(
        ${theme.pushButton.primary.gradient1},
        ${theme.pushButton.primary.gradient2}
      );
      border-left: 2px solid ${theme.pushButton.primary.borderColor};
      border-right: 2px solid ${theme.pushButton.primary.borderColor};
      border-top: 2px solid ${theme.pushButton.primary.gradient1};
      border-bottom: 2px solid ${theme.pushButton.primary.gradient1};
      color: ${theme.pushButton.primary.color};

      &:hover {
        border: 2px solid ${theme.pushButton.primary.borderHoverColor};
        color: ${theme.pushButton.primary.hoverColor};
      }
    ` : ''
  }

  ${(p: PushButtonProps) => p.color === 'secondary'
    ? css`
      background: linear-gradient(
        ${theme.pushButton.secondary.gradient1},
        ${theme.pushButton.secondary.gradient2}
      );
      border: 1px solid ${theme.pushButton.secondary.borderColor};
      color: ${theme.pushButton.secondary.color};

      &:hover {
        border: 1px solid ${theme.pushButton.secondary.borderHoverColor};
        color: ${theme.pushButton.secondary.hoverColor};
      }
    ` : ''
  }
` as any

 export { StyledPushButton }
