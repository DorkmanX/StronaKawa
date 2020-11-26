import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import DeleteItemFromBucket from '../../components/DeleteItemFromBucket/DeleteItemFromBucket'
it("mount <DeleteItemFromBucket />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <DeleteItemFromBucket />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Wrapper').length).toEqual(1)
});
