import React from "react";
import { shallow } from "enzyme";
import Subscribe from "./subscribe";

describe("Subscribe", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Subscribe />);
    expect(wrapper).toMatchSnapshot();
  });
});
