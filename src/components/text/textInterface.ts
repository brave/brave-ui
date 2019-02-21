export default interface IText {
  margin?: string
  padding?: string
  fontSize?: number
  color?: Color
  lineHeight?: LineHeight
  fontWeight?: FontWeight
  children: React.ReactNode
  isItalic?: boolean
  tag?: any // might be better to tie this to a HTMLElementTagNameMap but not working atm
}

// Colors are named this way to be agnostic of color association. To play
// nicely with light and dark themes and retain contrast integrity, the colors fade
// while utilizing the color behind them in both light and dark instances.
export type Color = 'default' | 'defaultFade15' | 'defaultFade30' | 'defaultFade50'
export type LineHeight = 'default' | 'large' | 'zero'
export type FontWeight = 'regular' | 'bold' | 'light'
