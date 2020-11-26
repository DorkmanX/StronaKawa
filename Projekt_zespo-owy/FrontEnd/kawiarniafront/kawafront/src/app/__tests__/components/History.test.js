import React from "react";
import { shallow ,mount} from "enzyme";
import History from "../../components/History/History";
import { Provider } from "react-redux";
import store from "../../../store/store";
it("render <History/>", () => {
  shallow(
    <Provider store={store}>
      <History />
    </Provider>
  );
});
it("mount <History/>", () => {
    mount(
      <Provider store={store}>
        <History />
      </Provider>
    );
  });
  