/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { BrowserButtonProps } from './index'
import theme from '../theme'

const StyledBrowserButton = styled.button`
  font-size: ${(p: BrowserButtonProps) => p.fontSize ? p.fontSize : '13px'};
  min-width: ${(p: BrowserButtonProps) => p.size ? p.size : '78px'};
  min-height: ${(p: BrowserButtonProps) => p.size ? p.size : '32px'};
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

  ${(p: BrowserButtonProps) => p.disabled
    ? css`
    pointer-events: none;
    animation: none;
    opacity: 0.25;
    ` : ''
  }

  ${(p: BrowserButtonProps) => p.color === 'default'
    ? css`
      color: ${theme.browserButton.default.color};
      background-color: ${theme.browserButton.default.bg};

      &:hover {
        color: ${theme.browserButton.default.hoverColor};
      }
    `
    : ''
  }

  ${(p: BrowserButtonProps) => p.color === 'primary'
    ? css`
      background: linear-gradient(
        ${theme.browserButton.primary.gradient1},
        ${theme.browserButton.primary.gradient2}
      );
      border-left: 2px solid ${theme.browserButton.primary.borderColor};
      border-right: 2px solid ${theme.browserButton.primary.borderColor};
      border-top: 2px solid ${theme.browserButton.primary.gradient1};
      border-bottom: 2px solid ${theme.browserButton.primary.gradient1};
      color: ${theme.browserButton.primary.color};

      &:hover {
        border: 2px solid ${theme.browserButton.primary.borderHoverColor};
        color: ${theme.browserButton.primary.hoverColor};
      }
    ` : ''
  }

  ${(p: BrowserButtonProps) => p.color === 'secondary'
    ? css`
      background: linear-gradient(
        ${theme.browserButton.secondary.gradient1},
        ${theme.browserButton.secondary.gradient2}
      );
      border: 1px solid ${theme.browserButton.secondary.borderColor};
      color: ${theme.browserButton.secondary.color};

      &:hover {
        border: 1px solid ${theme.browserButton.secondary.borderHoverColor};
        color: ${theme.browserButton.secondary.hoverColor};
      }
    ` : ''
  }
` as any

 export { StyledBrowserButton }
