import React from "react";
import { shallow } from "enzyme";
import Constructor from "./constructor";

describe("Constructor", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Constructor />);
    expect(wrapper).toMatchSnapshot();
  });
});
