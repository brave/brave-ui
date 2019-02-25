import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string
  color: {
    brand: {
      brave: string
      braveHover: string
      braveActive: string
      rewards: string
      rewardsHover: string
      rewardsActive: string
    }
    intent: {
      error: string
      failure: string
      info: string
      warn: string
      success: string
    }
    btn: {
      danger: string
      dangerHover: string
      dangerActive: string
      default: string
      defaultHover: string
      defaultActive: string
      disabled: string
    }
    bodyText: string
    inputBorder: string
  }
  breakpoint: string[]
  maxWidth: string[]
  spacing: string[]
  borderRadius: string[]
  shadows: {
    small: string
    default: string
    large: string
    formControl: string
    formControlFocus: string
    modalOverlayBackground: string
  }
  transitionSpeed: string[]
  fontFamily: {
    heading: string
    body: string
    code: string
  }
  fontWeight: string[]
  fontSize: string[]
  lineHeight: string[]
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
