import React from "react";
import { mount } from "enzyme";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

it("mounting <LoadingIndicator/>", () => {
  const loadingIndicator = mount(<LoadingIndicator />);
  expect(loadingIndicator.children().length).toEqual(1)
});
