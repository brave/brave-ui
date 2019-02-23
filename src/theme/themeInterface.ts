import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string,
  color: {
    brandBrave: string
    brandBraveInteracting: string
    brandBraveActive: string
    brandBraveLight: string
    brandBat: string
    brandBatInteracting: string
    brandBatActive: string
    detailDescription: string
    disabled: string
    primaryBackground: string
    secondaryBackground: string
    modalOverlayBackground: string
    defaultControl: string
    defaultControlInteracting: string
    defaultControlActive: string
    warn: string
    warnInteracting: string
    warnActive: string
    subtle: string
    subtleBackground: string
    subtleExclude: string
    subtleInteracting: string
    subtleActive: string
  }
  fontFamily: {
    heading: string
    body: string
    system: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
