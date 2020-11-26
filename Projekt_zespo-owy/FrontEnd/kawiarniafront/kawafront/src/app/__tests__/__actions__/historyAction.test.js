import actions from "../../redux/history/actions";
import types from "../../redux/history/types";

describe("actions", () => {
  it("testing toggleOrderDetailsVisible", () => {
    const payload = {};
    const expectedAction = {
      type: types.TOGGLE_ORDER_DETAILS_VISIBLE,
      payload: payload,
    };
    expect(actions.toggleOrderDetailsVisible(payload)).toEqual(expectedAction);
  });
});
