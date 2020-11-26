import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Account from "../../components/Account/Account";
it("mount <Account/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Account />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Container').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Field').length).toEqual(11)
  expect(wrapper.findWhere(node=>node.name()==='Span').length).toEqual(22)
  expect(wrapper.findWhere(node=>node.name()==='Text').length).toEqual(3)
  expect(wrapper.findWhere(node=>node.name()==='Label').length).toEqual(11)
});
