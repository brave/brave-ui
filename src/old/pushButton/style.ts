/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { PushButtonProps } from './index'
import { setTheme } from '../../helpers'
import defaultTheme from '../defaultTheme'

const StyledPushButton = styled.button<PushButtonProps>`
  font-size: ${(p) => setTheme(p.customStyle, 'fontSize') || '13px'};
  min-width: ${(p) => setTheme(p.customStyle, 'minWidth') || '78px'};
  min-height: ${(p) => setTheme(p.customStyle, 'minHeight') || '32px'};
  font-family: inherit;
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
      color: ${defaultTheme.pushButton.default.color};
      background-color: ${defaultTheme.pushButton.default.bg};

      &:hover {
        color: ${defaultTheme.pushButton.default.hoverColor};
      }
    `
    : ''
  }

  ${(p: PushButtonProps) => p.color === 'primary'
    ? css`
      background: linear-gradient(
        ${defaultTheme.pushButton.primary.gradient1},
        ${defaultTheme.pushButton.primary.gradient2}
      );
      border-left: 2px solid ${defaultTheme.pushButton.primary.borderColor};
      border-right: 2px solid ${defaultTheme.pushButton.primary.borderColor};
      border-top: 2px solid ${defaultTheme.pushButton.primary.gradient1};
      border-bottom: 2px solid ${defaultTheme.pushButton.primary.gradient1};
      color: ${defaultTheme.pushButton.primary.color};

      &:hover {
        border: 2px solid ${defaultTheme.pushButton.primary.borderHoverColor};
        color: ${defaultTheme.pushButton.primary.hoverColor};
      }
    ` : ''
  }

  ${(p: PushButtonProps) => p.color === 'secondary'
    ? css`
      background: linear-gradient(
        ${defaultTheme.pushButton.secondary.gradient1},
        ${defaultTheme.pushButton.secondary.gradient2}
      );
      border: 1px solid ${defaultTheme.pushButton.secondary.borderColor};
      color: ${defaultTheme.pushButton.secondary.color};

      &:hover {
        border: 1px solid ${defaultTheme.pushButton.secondary.borderHoverColor};
        color: ${defaultTheme.pushButton.secondary.hoverColor};
      }
    ` : ''
  }
`

export default StyledPushButton
