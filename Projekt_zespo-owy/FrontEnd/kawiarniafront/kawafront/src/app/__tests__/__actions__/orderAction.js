import actions from "../../redux/order/actions";
import types from "../../redux/order/types";

describe("testing order actions", () => {
  it("testing addEspresso", () => {
    const expectedAction = {
      type: types.ADD_ESPRESSO,
    };
    expect(actions.addEspresso()).toEqual(expectedAction);
  });
});

describe("testing order actions", () => {
  it("testing deleteEspresso", () => {
    const expectedAction = {
      type: types.DELETE_ESPRESSO,
    };
    expect(actions.deleteEspresso()).toEqual(expectedAction);
  });
});
describe("testing order actions", () => {
  it("testing addWater", () => {
    const expectedAction = {
      type: types.ADD_WATER,
    };
    expect(actions.addWater()).toEqual(expectedAction);
  });
});

describe("testing order actions", () => {
  it("testing deleteWater", () => {
    const expectedAction = {
      type: types.DELETE_WATER,
    };
    expect(actions.deleteWater()).toEqual(expectedAction);
  });
});
describe("testing order actions", () => {
  it("testing addMilk", () => {
    const expectedAction = {
      type: types.ADD_MILK,
    };
    expect(actions.addMilk()).toEqual(expectedAction);
  });
});

describe("testing order actions", () => {
  it("testing deleteMilk", () => {
    const expectedAction = {
      type: types.DELETE_MILK,
    };
    expect(actions.deleteMilk()).toEqual(expectedAction);
  });
});
describe("testing order actions", () => {
  it("testing toggleChocolate", () => {
    const expectedAction = {
      type: types.TOGGLE_CHOCOLATE,
    };
    expect(actions.toggleChocolate()).toEqual(expectedAction);
  });
});
describe("testing order actions", () => {
  it("testing setPresetOfCoffee", () => {
    const expectedAction = {
      type: types.SET_PRESET_OF_COFFEE,
    };
    expect(actions.setPresetOfCoffee()).toEqual(expectedAction);
  });
});

describe("testing order actions", () => {
  it("testing setLatLng", () => {
    const payload = {};
    const expectedAction = {
      type: types.SET_LAT_LNG,
      payload,
    };
    expect(actions.setLatLng(payload)).toEqual(expectedAction);
  });
});
