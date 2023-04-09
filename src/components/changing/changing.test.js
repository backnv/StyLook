import React from "react";
import { shallow } from "enzyme";
import Changing from "./changing";

describe("Changing", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Changing />);
    expect(wrapper).toMatchSnapshot();
  });
});
