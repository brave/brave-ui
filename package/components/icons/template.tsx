import styled from 'styled-components'

export interface IconProps {
  // text description, for accessiblity
  title?: string
}

export default function GenerateIconComponentForGraphic (Graphic: JSX.Element): any {

  return styled.svg.attrs<IconProps>({
    children: [Graphic.props.children],
    viewBox: '0 0 32 32',
    'aria-hidden': (props: IconProps) => (props.title === undefined ? 'true' : undefined),
    focusable: 'false',
    role: (props: IconProps) => (props.title !== undefined ? 'img' : undefined)
  })`
    width: 100%;
    height: 100%;
    fill: currentColor;
  ` as any
}
