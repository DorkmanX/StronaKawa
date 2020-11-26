import React from "react";
import { mount } from "enzyme";
import CoffeeCup from "../../components/CoffeeCup/CoffeeCup";
import { Provider } from "react-redux";
import store from "../../../store/store";

it("mount <CoffeeCup/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <CoffeeCup />
    </Provider>
  );
  expect(wrapper.findWhere((node) => node.name() === "Ear").length).toEqual(1);
  expect(wrapper.findWhere((node) => node.name() === "Block").length).toEqual(1);
  expect(wrapper.findWhere((node) => node.name() === "Properties").length).toEqual(1);
  expect(wrapper.findWhere((node) => node.name() === "ScrollButton").length).toEqual(0);

});
