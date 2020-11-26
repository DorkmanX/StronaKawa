import actions from "../../redux/user/actions";
import types from "../../redux/user/types";

describe("actions", () => {
  it("testing clearUserInputs", () => {
    const payload = {};
    const expectedAction = {
      type: types.CLEAR_USER_INPUTS,
    };
    expect(actions.clearUserInputs(payload)).toEqual(expectedAction);
  });
});

describe("testing user actions ", () => {
  it("testing changeInputValue", () => {
    const payload = {};
    const expectedAction = {
      type: types.CHANGE_INPUT_VALUE,
      payload,
    };
    expect(actions.changeInputValue(payload)).toEqual(expectedAction);
  });
});

describe("testing user actions", () => {
  it("testing deleteError", () => {
    const expectedAction = {
      type: types.DELETE_ERROR,
    };
    expect(actions.deleteError()).toEqual(expectedAction);
  });
});

describe("testing user actions", () => {
  it("testing logoutUser", () => {
    const expectedAction = {
      type: types.LOGOUT_USER,
    };
    expect(actions.logoutUser()).toEqual(expectedAction);
  });
});
