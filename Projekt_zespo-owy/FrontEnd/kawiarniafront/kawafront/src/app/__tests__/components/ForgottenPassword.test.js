import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import ForgottenPassword from "../../components/ForgottenPassword/ForgottenPassword";
it("mount <DeleteItemFromBucket />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <ForgottenPassword />
    </Provider>
  );
  expect(wrapper.findWhere((node) => node.name() === "Wrapper").length).toEqual(
    1
  );
});
