export function fontStack (fonts: any) {
  return fonts.map((font: any) => (
    font.includes(' ') ? `"${font}"` : font)).join(', ')
}
