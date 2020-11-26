import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import AdressSelector from '../../components/AdressSelector/AdressSelector'
it("mount <AdressSelector />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <AdressSelector />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Wrapper').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Container').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Input').length).toEqual(4)
  expect(wrapper.findWhere(node=>node.name()==='Button').length).toEqual(1)

});
