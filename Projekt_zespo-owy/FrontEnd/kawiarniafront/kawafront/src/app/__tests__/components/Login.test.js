import React from "react";
import { mount } from "enzyme";
import Login from "../../components/Login/Login";
import { Provider } from "react-redux";
import store from "../../../store/store";
it("mount <Login/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Container').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Redirect').length).toEqual(0)
  expect(wrapper.findWhere(node=>node.name()==='Formulee').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='ToastContainer').length).toEqual(1)
});
