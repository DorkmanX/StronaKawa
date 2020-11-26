import types from "./types";
import * as API from "./fetch";
const sortHistory = (payload) => ({ type: types.SORT_HISTORY, payload });
const fetchHistorySuccess = (payload) => ({
  type: types.FETCH_HISTORY_SUCCESS,
  payload,
});
const toggleOrderDetailsVisible = (payload) => ({
  type: types.TOGGLE_ORDER_DETAILS_VISIBLE,
  payload,
});
const fetchHistory = (token) => async (dispatch) => {
  dispatch({ type: types.FETCH_HISTORY_REQUEST });

  try {
    const response = await API.fetchHistory(token);
    const data = await response.json();

    if (data.status) {
      switch (data.status) {
        case 401:
          dispatch({
            type: types.FETCH_HISTORY_FAILURE,
            payload: "Nieautoryzowany dostęp",
          });
          break;
        case 200:
          dispatch({
            type: types.FETCH_HISTORY_SUCCESS,
            payload: data,
          });
          break;
        default:
          break;
      }
    }
  } catch (error) {
    dispatch({
      type: types.FETCH_HISTORY_FAILURE,
      payload: error,
    });
  }
};
export default {
  toggleOrderDetailsVisible,
  fetchHistorySuccess,
  fetchHistory,
  sortHistory,
};
