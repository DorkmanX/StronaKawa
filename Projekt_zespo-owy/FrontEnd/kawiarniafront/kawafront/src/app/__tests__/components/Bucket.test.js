import React from "react";
import { mount } from "enzyme";
import Bucket from "../../components/Bucket/Bucket";
import { Provider } from "react-redux";
import store from "../../../store/store";

it("mount <Bucket/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Bucket />
    </Provider>
  );
  expect(wrapper.findWhere((node) => node.name() === "Info").length).toEqual(1);
  expect(wrapper.findWhere((node) => node.name() === "Block").length).toEqual(1);
  expect(wrapper.findWhere((node) => node.name() === "ToastContainer").length).toEqual(1);

});
