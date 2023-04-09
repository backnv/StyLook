import React from "react";
import { shallow } from "enzyme";
import SliderBeforeAfter from "./slider-before-after";

describe("SliderBeforeAfter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SliderBeforeAfter />);
    expect(wrapper).toMatchSnapshot();
  });
});
