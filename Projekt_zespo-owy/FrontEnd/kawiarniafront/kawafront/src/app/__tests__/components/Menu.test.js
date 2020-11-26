import React from "react";
import { mount } from "enzyme";
import Menu from "../../components/Menu/Menu";
import { Provider } from "react-redux";
import store from "../../../store/store";
it("mount <Menu/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Menu />
    </Provider>
  );
  expect(wrapper.findWhere((node) => node.name() === "Block").length).toEqual(
    6
  );
});
