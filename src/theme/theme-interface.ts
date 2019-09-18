import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string,
  palette: { [key: string]: string }
  color: {
    contextMenuBackground: string
    contextMenuForeground: string
    brandBraveSubtleBackground: string
    brandBraveHover: string
    brandBraveMain: string
    brandBravePressed: string
    brandBraveOutline: string
    brandBrave: string
    brandBraveActive: string
    brandBatSubtleBackground: string
    brandBatHover: string
    brandBatMain: string
    brandBatPressed: string
    brandBatOutline: string
    brandBat: string
    brandBatInteracting: string
    brandBatActive: string
    detailDescription: string
    disabled: string
    disabledResourceBlocked: string
    primaryBackground: string
    secondaryBackground: string
    modalOverlayBackground: string
    defaultButtonText: string
    defaultButtonBorder: string
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
    text: string
    panelBackground: string
    panelBackgroundSecondary: string
    lionLogo: string
    inputBorder: string
    separatorLine: string
  }
  fontFamily: {
    heading: string
    body: string
    system: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
