import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import ParallaxBackground from "../../components/ParallaxBackground/ParallaxBackground";
it("mount <ParallaxBackground />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <ParallaxBackground />
    </Provider>
  );
  expect(wrapper.findWhere((node) => node.name() === "div").length).toEqual(
    1
  );
});
