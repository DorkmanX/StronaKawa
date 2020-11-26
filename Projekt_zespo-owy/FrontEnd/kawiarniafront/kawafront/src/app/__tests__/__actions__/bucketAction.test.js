import actions from "../../redux/bucket/actions";
import types from "../../redux/bucket/types";


describe("actions", () => {
  it("testing addItemToBucket", () => {
    const payload = {};
    const expectedAction = {
      type: types.ADD_ITEM_TO_BUCKET,
      payload: payload,
    };
    expect(actions.addItemToBucket(payload)).toEqual(expectedAction);
  });
});
describe("actions", () => {
  it("testing deleteItemFromBucket", () => {
    const payload = {};
    const expectedAction = {
      type: types.DELETE_ITEM_FROM_BUCKET,
      payload: payload,
    };
    expect(actions.deleteItemFromBucket(payload)).toEqual(expectedAction);
  });
});
describe("actions", () => {
  it("testing toggleElemetToPay", () => {
    const payload = {};
    const expectedAction = {
      type: types.TOGGLE_ELEMENT_TO_PAY,
      payload: payload,
    };
    expect(actions.toggleElementToPay(payload)).toEqual(expectedAction);
  });
});
describe("actions", () => {
  it("testing saveFetchedBucket", () => {
    const payload = {};
    const expectedAction = {
      type: types.SAVE_FETCHED_BUCKET,
      payload: payload,
    };
    expect(actions.saveFetchedBucket(payload)).toEqual(expectedAction);
  });
});
