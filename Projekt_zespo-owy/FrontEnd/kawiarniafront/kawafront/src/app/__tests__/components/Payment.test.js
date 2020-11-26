import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import Payment from "../../components/Payment/Payment";

it("mount <Payment/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Payment />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='Block').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='ToastContainer').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='Span').length).toEqual(1)
  expect(wrapper.findWhere(node=>node.name()==='P').length).toEqual(1)
});
