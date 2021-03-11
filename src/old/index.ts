/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

import { CSSObject } from 'styled-components'
import Anchor from './anchor'
import BoxedContent from './boxedContent'
import ContentToggleArrow from './contentToggleArrow'
import MediaContent from './mediaContent'
import Page from './page'
import Paragraph from './paragraph'
import PushButton from './pushButton'
import SelectOption from './selectOption'
import Separator from './separator'
import SwitchButton from './switchButton'
import TextLabel from './textLabel'
import UnstyledButton from './unstyledButton'
import { DataBlock, DataItem } from './dataBlock'
import { TitleHeading, SectionHeading, FeatureHeading, Heading } from './headings'

// Deprecated, do not use!
type CustomStyleProps = {
  customStyle?: CSSObject
}

export {
  Anchor,
  BoxedContent,
  ContentToggleArrow,
  CustomStyleProps,
  DataBlock,
  DataItem,
  FeatureHeading,
  Heading,
  MediaContent,
  Page,
  Paragraph,
  PushButton,
  SectionHeading,
  SelectOption,
  Separator,
  SwitchButton,
  TextLabel,
  TitleHeading,
  UnstyledButton
}
