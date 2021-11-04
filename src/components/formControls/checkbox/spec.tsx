/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen, getByTestId } from '@testing-library/react'
import Checkbox, { Props } from './index'
import { TestThemeProvider } from '../../../theme'

function TestCheckbox(props: {id: string}) {
  return (
    <Checkbox
      value={{ 'yt': true, 'tw': false, 'inst': false }}
      testId={props.id}
      multiple={false}
    >
      <div data-key='yt'>YouTube</div>
      <div data-key='tw'>Twitter</div>
      <div data-key='inst'>Instagram</div>
    </Checkbox>
  )
}

function getCheckboxElementByTestId (container: HTMLElement, testId: string) {
  // Can't use getByTestId since Checkbox uses data-test-id instead of data-testid
  return container.querySelector<HTMLElement>(`[data-test-id=${testId}]`)
}

describe('Checkbox tests', () => {
  const baseComponent = (props?: Props) =>
    <TestThemeProvider>
      <TestCheckbox id={'checkbox'} />
    </TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const test = render(baseComponent())
      const element = getCheckboxElementByTestId(test.container, 'checkbox')
      expect(element).toBeInTheDocument()
    })

    it('is focusable', () => {
      const testContent = (
        <TestThemeProvider>
          <Checkbox value={{a: true}} testId={'checkbox1'}><span data-key="a">first</span></Checkbox>
          <Checkbox value={{a: true}} testId={'checkbox2'}><span data-key="a">second</span></Checkbox>
        </TestThemeProvider>
      )
      const test = render(testContent)
      const first = getCheckboxElementByTestId(test.container, 'checkbox1')
      const second = getCheckboxElementByTestId(test.container, 'checkbox2')
      expect(first).toBeTruthy()
      expect(second).toBeTruthy()
      const firstCheck = getByTestId(first, 'checkbox-child-0')
      const secondCheck = getByTestId(second, 'checkbox-child-0')
      firstCheck.focus()
      expect(firstCheck).toHaveFocus()
      userEvent.tab()
      expect(secondCheck).toHaveFocus()
    })

    it('can be used by keyboard', () => {
      const onClickFirst = jest.fn()
      const onClickSecond = jest.fn()

      const testContent = (
        <TestThemeProvider>
          <Checkbox value={{a: true}} testId={'checkbox1'} onChange={onClickFirst}><span data-key="a">first</span></Checkbox>
          <Checkbox value={{a: true}} testId={'checkbox2'} onChange={onClickSecond}><span data-key="a">second</span></Checkbox>
        </TestThemeProvider>
      )
      const test = render(testContent)
      // Can't use getByTestId since Checkbox uses data-test-id instead of data-testid
      const first = getCheckboxElementByTestId(test.container, 'checkbox1')
      const second = getCheckboxElementByTestId(test.container, 'checkbox2')
      expect(first).toBeTruthy()
      expect(second).toBeTruthy()
      const firstCheck = getByTestId(first, 'checkbox-child-0')
      const secondCheck = getByTestId(second, 'checkbox-child-0')
      expect(onClickFirst).toHaveBeenCalledTimes(0)
      firstCheck.focus()
      // Note(petemill): Using [enter] for all cases as cannot get space to work via ' ' or [space]
      userEvent.keyboard('[enter]')
      expect(onClickFirst).toHaveBeenCalledTimes(1)
      userEvent.tab()
      expect(onClickSecond).toHaveBeenCalledTimes(0)
      userEvent.keyboard('[enter]')
      expect(onClickSecond).toHaveBeenCalledTimes(1)
      expect(onClickFirst).toHaveBeenCalledTimes(1)
    })
  })
})
