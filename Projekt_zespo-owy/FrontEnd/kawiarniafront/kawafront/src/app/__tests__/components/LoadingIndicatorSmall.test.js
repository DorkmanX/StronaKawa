import React from "react";
import { mount } from "enzyme";
import LoadingIndicatorSmall from "../../components/LoadingIndicatorSmall/LoadingIndicatorSmall";

it("mount <LoadingIndicatorSmall/>", () => {
  expect(mount(<LoadingIndicatorSmall />).children().length).toEqual(1);
});
