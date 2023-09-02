/* global jest, expect, describe, it, afterEach */
import { shallow } from "enzyme";
import * as React from "react";
import { create } from "react-test-renderer";
import { TestThemeProvider } from "../../../theme";
import Button from "./index";

describe("Button tests", () => {
  const mockedOnClick = jest.fn();

  const baseComponent = (props?: object) => (
    <TestThemeProvider>
      <Button id="button" text="test" onClick={mockedOnClick} {...props} />
    </TestThemeProvider>
  );

  describe("basic tests", () => {
    it("matches the snapshot", () => {
      const component = baseComponent();
      const tree = create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders the component", () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find("#button").length;
      expect(assertion).toBe(1);
    });
  });

  describe("behaviour tests", () => {
    it("calls onClick when clicked", () => {
      expect(mockedOnClick).not.toBeCalled();
      const wrapper = shallow(baseComponent());
      wrapper.find("#button").simulate("click");
      expect(mockedOnClick).toBeCalledTimes(1);
    });
  });
});
