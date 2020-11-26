import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import Delivery from "../../components/Delivery/Delivery";
it("mount <Delivery />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Delivery />
    </Provider>
  );
  expect(wrapper.findWhere((node) => node.name() === "Wrapper").length).toEqual(
    1
  );
});
