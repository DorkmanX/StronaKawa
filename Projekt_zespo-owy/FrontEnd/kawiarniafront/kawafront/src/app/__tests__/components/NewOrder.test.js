import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import NewOrder from "../../components/NewOrder/NewOrder";
import toJson from "enzyme-to-json";

it("mount <NewOrder/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <NewOrder />
    </Provider>
  );

  expect(wrapper.findWhere((node) => node.name() === "Wrapper").length).toEqual(
    1
  );
  expect(wrapper.findWhere((node) => node.name() === "Coffee").length).toEqual(
    6
  );
  expect(wrapper.findWhere((node) => node.name() === "Section").length).toEqual(
    1
  );
  expect(wrapper.findWhere((node) => node.name() === "Payment").length).toEqual(
    0
  );
});

describe("<NewOrder/>", () => {
  describe("render()", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NewOrder />
      </Provider>
    );

    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
