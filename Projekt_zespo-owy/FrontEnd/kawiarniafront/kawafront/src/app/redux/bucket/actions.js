import types from "./types";
import * as API from "./fetch";
const addItemToBucket = (payload) => ({
  type: types.ADD_ITEM_TO_BUCKET,
  payload,
});
const clearBucket = () => ({ type: types.CLEAR_BUCKET });
const deleteItemFromBucket = (payload) => ({
  type: types.DELETE_ITEM_FROM_BUCKET,
  payload,
});
const setElementToDelete = (payload) => ({
  type: types.SET_ELEMENT_TO_DELETE,
  payload,
});
const toggleElementToPay = (payload) => ({
  type: types.TOGGLE_ELEMENT_TO_PAY,
  payload,
});
const saveFetchedBucket = (payload) => ({
  type: types.SAVE_FETCHED_BUCKET,
  payload,
});

const fetchBucket = (token) => async (dispatch) => {
  dispatch({ type: types.CLEAR_BUCKET });
  dispatch({ type: types.FETCH_BUCKET_REQUEST });

  try {
    const response = await API.fetchbucket(token);
    const data = await response.json();

    if (data.status) {
      switch (data.status) {
        case 401:
          dispatch({
            type: types.FETCH_BUCKET_FAILURE,
            payload: "Nieautoryzowany dostęp",
          });
          break;
        default:
          break;
      }
    } else {
      dispatch({
        type: types.FETCH_BUCKET_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
  
    dispatch({
      type: types.FETCH_BUCKET_FAILURE,
      payload: error,
    });
  }
};

export default {
  addItemToBucket,
  deleteItemFromBucket,
  setElementToDelete,
  toggleElementToPay,
  saveFetchedBucket,
  fetchBucket,
  clearBucket,
};
