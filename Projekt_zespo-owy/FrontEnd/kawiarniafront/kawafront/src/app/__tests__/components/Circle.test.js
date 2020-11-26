import React from "react";
import { mount } from "enzyme";
import Map from "../../components/Circle/Circle";
it("mount <Circle/>", () => {
  const wrapper = mount(<Map />);
  expect(
    wrapper.findWhere((node) => node.name() === "div").length
  ).toEqual(1);
});
