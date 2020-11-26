import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { mount } from "enzyme";
import VideoBackground from '../../components/VideoBackground/VideoBackground'
it("mount <RemoveAccountModal />", () => {
  const wrapper = mount(
    <Provider store={store}>
      <VideoBackground />
    </Provider>
  );
  expect(wrapper.findWhere(node=>node.name()==='video').length).toEqual(1)

});
