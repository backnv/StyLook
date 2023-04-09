import React from "react";
import { shallow } from "enzyme";
import TouchImage from "./touch-image";

describe("TouchImage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TouchImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
