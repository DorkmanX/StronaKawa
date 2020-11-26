import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import RemoveAccountModal from '../../components/RemoveAccountModal/RemoveAccountModal'
it("mount <RemoveAccountModal />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RemoveAccountModal />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Wrapper').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Container').length).toEqual(2)
  expect(wrapper.findWhere(node=>node.name()==='H1').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Button').length).toEqual(2)
});
