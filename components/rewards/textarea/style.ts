/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { Props } from './index';

export const StyledWrapper = styled.div`
  max-width: ${(p: Props) => p.theme && p.theme.maxWidth ? p.theme.maxWidth : '254px'};
  width: 100%;
` as any

export const StyledArea = styled.textarea`
  width: 100%;
  font-family: Muli;
  border: 1px solid #DFDFE8;
  border-radius: 6px;
  padding: 20px 15px;
  font-size: 16px;
  line-height: 26px;
` as any
