import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Panel from "../../components/Panel/Panel";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
it("mount <Panel/>", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Panel />
    </Provider>
  );
  expect(wrapper.findWhere((node) => node.name() === "Switch").length).toEqual(
    1
  );
});

