import React from "react";
import { mount } from "enzyme";
import Map from "../../components/Map/Map";
import { Provider } from "react-redux";
import store from "../../../store/store";
it("mount <Map/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Map />
    </Provider>
  );
  expect(
    wrapper.findWhere((node) => node.name() === "Container").length
  ).toEqual(1);
  expect(wrapper.findWhere((node) => node.name() === "Input").length).toEqual(
    0
  );
});
