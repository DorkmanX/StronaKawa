import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import SignIn from "../../components/SignIn/SignIn";

it("mount <SignIn/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Formulee').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Text').length).toEqual(3)
  expect(wrapper.findWhere(node=>node.name()==='Span').length).toEqual(21)
  expect(wrapper.findWhere(node=>node.name()==='Input').length).toEqual(10)
  expect(wrapper.findWhere(node=>node.name()==='Label').length).toEqual(10)
  expect(wrapper.findWhere(node=>node.name()==='Field').length).toEqual(12)
  expect(wrapper.findWhere(node=>node.name()==='ToastContainer').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Button').length).toEqual(1)
});
