import React from "react";
import { mount } from "enzyme";
import Details from "./Details";


it(" mount <Details/>", () => {
  let details = mount(<Details items={[{ coffeeName: "Kawa", price: 30 }]} />);
  expect(details.prop("items").length).toEqual(1);
});
