import React from "react";
import { shallow } from "enzyme";
import Faqq from "./faqq";

describe("Faqq", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Faqq />);
    expect(wrapper).toMatchSnapshot();
  });
});
