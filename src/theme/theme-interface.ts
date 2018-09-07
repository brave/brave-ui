import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  color: {
    brandBrave: string,
    brandBraveInteracting: string,
    brandBraveActive: string,
    brandBraveLight: string,
    brandBat: string,
    brandBatInteracting: string,
    brandBatActive: string,
    disabled: string,
    primaryBackground: string,
    secondaryBackground: string,
    privateTabBackground: string,
    privateTabBackground2: string,
    defaultControl: string,
    defaultControlInteracting: string,
    defaultControlActive: string
    warn: string,
    warnInteracting: string,
    warnActive: string,
    subtle: string,
    subtleInteracting: string,
    subtleActive: string
  },
  fontFamily: {
    heading: string,
    body: string,
    system: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
