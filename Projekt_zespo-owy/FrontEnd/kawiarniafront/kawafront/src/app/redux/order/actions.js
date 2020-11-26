import types from "./types";
const setOrderAdress = (payload) => ({ type: types.SET_ORDER_ADRESS, payload });
const addEspresso = () => ({ type: types.ADD_ESPRESSO });
const addMilk = () => ({ type: types.ADD_MILK });
const deleteEspresso = () => ({ type: types.DELETE_ESPRESSO });
const deleteMilk = () => ({ type: types.DELETE_MILK });
const toggleChocolate = () => ({ type: types.TOGGLE_CHOCOLATE });
const setPresetOfCoffee = (payload) => ({
  type: types.SET_PRESET_OF_COFFEE,
  payload,
});
const setLatLng = (payload) => ({ type: types.SET_LAT_LNG, payload });
const addWater = () => ({ type: types.ADD_WATER });
const deleteWater = () => ({ type: types.DELETE_WATER });
const clearOrder = ()=>({type:types.CLEAR_ORDER})
export default {
  addEspresso,
  addMilk,
  addWater,
  deleteEspresso,
  deleteMilk,
  deleteWater,
  toggleChocolate,
  setPresetOfCoffee,
  setLatLng,
  setOrderAdress,
  clearOrder
};
