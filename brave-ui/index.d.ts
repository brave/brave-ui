/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/// <reference types="react" />

declare module "brave-ui" {
  export import ActionButton = __BraveUI.Components.ActionButton
  export import Anchor = __BraveUI.Components.Anchor
  export import BrowserSelect = __BraveUI.Components.BrowserSelect
  export import BrowserText = __BraveUI.Components.BrowserText
  export import Column = __BraveUI.Components.Column
  export import ContentToggle = __BraveUI.Components.ContentToggle
  export import Grid = __BraveUI.Components.Grid
  export import Separator = __BraveUI.Components.Separator
  export import SwitchButton = __BraveUI.Components.SwitchButton
}

declare namespace __BraveUI {
  namespace Props {
      interface ActionButton {
          id?: string
          onClick?: () => void
          text: string
          // Component style
          height?: string
          fontSize?: string
          color?: string
          padding?: string
      }

      interface Anchor {
          href: string
          noStyle: boolean
          target: '_blank' | '_parent' | '_self' | '_top'
          text: string
      }

      interface BrowserSelect {
          titleName: string
          id?: string
          autoFocus?: boolean
          disabled?: boolean
          value: string
          onChange: (e?: HTMLSelectElement) => void
          children: React.ReactNode
      }

      interface BrowserText {
          id?: string
          onClick?: () => {}
          text: string | number
          // Component style
          noSelect?: boolean
          fontSize?: string
          color?: string
          padding?: string
          bold?: boolean
      }

      interface Column {
          id?: string
          size?: number
          children: React.ReactNode
          // Component style
          noSelect?: boolean
          align?: string
          verticalAlign?: string
          background?: string
      }

      interface ContentToggle {
          id?: string
          summary: string
          open: boolean
          defaultOpen?: boolean
          withSeparator?: boolean
          children?: React.ReactNode
          onClick: () => void
      }

      interface Grid {
          id?: string
          disabled?: boolean
          children: React.ReactNode
          style?: any // TODO what should be here?
          // Component style
          gap?: string
          padding?: string
          width?: string
          height?: string
          textColor?: string
          background?: string
      }

      interface Separator {
          noMargin?: boolean
      }

      interface SwitchButton {
          id: string
          readOnly?: boolean
          disabled?: boolean
          autoFocus?: boolean
          leftText?: string
          rightText?: string
          checked?: boolean
          onChange?: (e: HTMLSelectElement) => void
      }
  }

  namespace Components {
      export class Anchor extends React.PureComponent<Props.Anchor> {}
      export class ActionButton extends React.PureComponent<Props.ActionButton> {}
      export class BrowserSelect extends React.PureComponent<Props.BrowserSelect> {}
      export class BrowserText extends React.PureComponent<Props.BrowserText> {}
      export class Column extends React.PureComponent<Props.Column> {}
      export class ContentToggle extends React.PureComponent<Props.ContentToggle> {}
      export class Grid extends React.PureComponent<Props.Grid> {}
      export class Separator extends React.PureComponent<Props.Separator> {}
      export class SwitchButton extends React.PureComponent<Props.SwitchButton> {}
  }
}
