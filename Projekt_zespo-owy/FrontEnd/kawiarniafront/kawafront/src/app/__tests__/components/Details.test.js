import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import Details from '../../components/Details/Details'
it("mount <Details />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Details items={[]} />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Wrapper').length).toEqual(1)
});
