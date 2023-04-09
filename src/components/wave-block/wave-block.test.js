import React from "react";
import { shallow } from "enzyme";
import WaveBlock from "./wave-block";

describe("WaveBlock", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WaveBlock />);
    expect(wrapper).toMatchSnapshot();
  });
});
