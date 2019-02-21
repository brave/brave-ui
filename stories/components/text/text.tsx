import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '../../../src/components/style/theme'
// @ts-ignore - TODO: Make importing markdown file possible with TS.
import FootnoteMd from './docs/footnote.md'
// @ts-ignore - TODO: Make importing markdown file possible with TS.
import BodyCopyMd from './docs/bodyCopy.md'
// @ts-ignore - TODO: Make importing markdown file possible with TS.
import HeadingMd from './docs/heading.md'
// @ts-ignore
import Marked from 'storybook-readme/components/Marked' // inline Markdown component
import 'storybook-readme/styles/github-markdown-css.js' // need this absolute path for table styling

// Components
import { Footnote, BodyCopy, Heading } from '../../../src/components'

// Component container
const Container = styled.div`
  width: 800px;
  margin: 0 auto 32px;
`

// Storybook
storiesOf('Components/Text', module)
  .add('BodyCopy', () => {
    return (
      <Container>
        <Container>
          <Marked md={'# BodyCopy'} />
        </Container>
        <Container>
          <BodyCopy>Children can accept inline <strong>HTML tags to bold</strong> or make <em>the text italic though both</em> can be done via props as well.</BodyCopy>
          <BodyCopy tag={'div'}><ul><li>This unordered list</li><li>needed a div tag prop</li><li> passed instead of the default 'p'</li></ul></BodyCopy>
        </Container>
        <Container>
          <BodyCopy>This is a default BodyCopy.</BodyCopy>
          <BodyCopy>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</BodyCopy>
        </Container>
        <Container>
          <BodyCopy color={'defaultFade30'} margin={'0 0 12px'} fontWeight={'bold'}>This is BodyCopy with a 8px margin on the bottom, fontWeight set to 'bold' and the color set to 'defaultFade30'.</BodyCopy>
          <BodyCopy color={'defaultFade30'} isItalic={true}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</BodyCopy>
        </Container>
        <Container>
          <BodyCopy color={'defaultFade50'} padding={'8px'} lineHeight={'large'}>This is a BodyCopy with 8px padding, color of 'defaultFade50' and lineHeight of 'large'.</BodyCopy>
          <BodyCopy color={'defaultFade50'} padding={'8px'} lineHeight={'large'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</BodyCopy>
        </Container>
        <Marked md={BodyCopyMd} />
      </Container>
    )
  })
  .add('Heading', () => {
    return (
      <Container>
        <Container>
          <Marked md={'# Heading'} />
        </Container>
        <Container>
          <Heading fontSize={0}>Heading with fontSize 0</Heading>
          <Heading fontSize={1}>Heading with fontSize 1</Heading>
          <Heading fontSize={2}>Heading with fontSize 2</Heading>
          <Heading fontSize={3} color={'defaultFade15'}>defaultFade15 fontSize 3</Heading>
          <Heading fontSize={4} color={'defaultFade30'}>defaultFade30 fontSize 4</Heading>
          <Heading fontSize={5} color={'defaultFade50'} >defaultFade50 fontSize 5</Heading>
          <Heading fontSize={6}>Heading with fontSize 6</Heading>
          <Heading fontSize={7}>Heading with fontSize 7</Heading>
          <Heading fontSize={8}>Heading fontSize 8</Heading>
          <Heading fontSize={9}>Heading fontSize 9</Heading>
        <Marked md={HeadingMd} />
        </Container>
      </Container>
    )
  })
  .add('Footnote', () => {
    return (
      <Container>
        <Container>
          <Marked md={'# Footnote'} />
        </Container>
        <Container>
          <Footnote>Children can accept inline <strong>HTML tags to bold</strong> or make <em>the text italic though both</em> can be done via props as well.</Footnote>
          <Footnote tag={'div'}><ul><li>This unordered list</li><li>needed a div tag prop</li><li> passed instead of the default 'p'</li></ul></Footnote>
        </Container>
        <Container>
          <Footnote>This is a default Footnote.</Footnote>
          <Footnote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Footnote>
        </Container>
        <Container>
          <Footnote color={'defaultFade30'} margin={'0 0 12px'} fontWeight={'bold'}>This is Footnote with a 8px margin on the bottom, fontWeight set to 'bold' and the color set to 'defaultFade30'.</Footnote>
          <Footnote color={'defaultFade30'} isItalic={true}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Footnote>
        </Container>
        <Container>
          <Footnote color={'defaultFade50'} padding={'8px'} lineHeight={'large'}>This is a Footnote with 8px padding, color of 'defaultFade50' and lineHeight of 'large'.</Footnote>
          <Footnote color={'defaultFade50'} padding={'8px'} lineHeight={'large'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Footnote>
        </Container>
        <Marked md={FootnoteMd} />
      </Container>
    )
  })
