import styled from 'styled-components'

export interface IconProps {
  // text description, for accessiblity
  title?: string
}

export default function GenerateIconComponentForGraphic (Graphic: JSX.Element): any {

  return styled.svg.attrs((props: IconProps) => ({
    children: [Graphic.props.children],
    viewBox: '0 0 32 32',
    'aria-hidden': props.title === undefined ? 'true' : undefined,
    focusable: 'false',
    role: props.title !== undefined ? 'img' : undefined
  }))<IconProps>`
    width: 100%;
    height: 100%;
    fill: currentColor;
  `
}
