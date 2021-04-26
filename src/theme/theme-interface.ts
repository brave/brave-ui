import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string,
  palette: { [key: string]: string }
  color: {
    contextMenuBackground: string
    contextMenuForeground: string
    contextMenuHoverBackground: string
    contextMenuHoverForeground: string
    background01: string
    background02: string
    background03: string
    brandBrave: string
    brandBraveInteracting: string
    brandBraveActive: string
    brandBraveLight: string
    brandBat: string
    brandBatInteracting: string
    brandBatActive: string
    detailDescription: string
    disabled: string
    disabledResourceBlocked: string
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
    text: string
    text01: string
    text02: string
    text03: string
    panelBackground: string
    panelBackgroundSecondary: string
    lionLogo: string
    inputBorder: string
    separatorLine: string
    interactive01: string
    interactive02: string
    interactive03: string
    interactive04: string
    interactive05: string
    interactive06: string
    interactive07: string
    interactive08: string
    focusBorder: string
    divider01: string
    errorIcon: string
    errorText: string
    errorBorder: string
    errorBackground: string
    warningIcon: string
    warningBorder: string
    warningBackground: string
    infoIcon: string
    infoBorder: string
    infoBackground: string
    successIcon: string
    successBorder: string
    successBackground: string

  }
  fontFamily: {
    heading: string
    body: string
    system: string
  }
}

export type BraveThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
