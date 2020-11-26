import React from "react";
import { mount } from "enzyme";
import LanguageChooser from "../../components/LanguageChooser/LanguageChooser";

it("renders <LanguageChooser/>", () => {
  const wrapper = mount(<LanguageChooser />);
  const fields = wrapper.findWhere((node) => node.name() === "Field");
  expect(fields.length).toEqual(3);
});
