/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

const StyledInfoCard = styled.div`
  height: 310px;
  border-radius: 4px;
  text-align:center;
  padding: 15px;
  box-shadow: 0 0 10px 0 rgba(99,105,110,0.12);
` as any

const StyledTitle = styled.strong`
  color: #222326;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
` as any

const StyledDesc = styled.p`
  color: #484B4E;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
` as any

 export {
  StyledTitle,
  StyledDesc,
  StyledInfoCard
 }
