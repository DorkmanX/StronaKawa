import types from "./types";
import * as API from "./fetch";
const clearUserInputs = () => ({ type: types.CLEAR_USER_INPUTS });
const deleteError = () => ({ type: types.DELETE_ERROR });
const loginUser = (payload) => ({ type: types.LOGIN_USER, payload });
const logoutUser = () => ({ type: types.LOGOUT_USER });
const changeInputValue = (payload) => ({
  type: types.CHANGE_INPUT_VALUE,
  payload,
});

const fetchUser = (user) => async (dispatch) => {
  dispatch({ type: types.FETCH_USER_REQUEST });

  try {
    console.log("loguje")
    const response = await API.fetchUser(user);
    console.log("po logowaniu")
    const data = await response.json();

    if (data.status) {
      switch (data.status) {
        case 401:
          dispatch({
            type: types.FETCH_USER_FAILURE,
            payload: "Błędny login lub hasło",
          });
          break;
        case 200:
          dispatch({
            type: types.FETCH_USER_SUCCESS,
            payload: data,
          });
          break;
        default:
          break;
      }
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.FETCH_USER_FAILURE,
      payload: "Something went wrong.",
    });
  }
};
const fetchRegisterUser = (user) => async (dispatch) => {
  dispatch({ type: types.FETCH_REGISTER_USER_REQUEST });
  
  try {
    const response = await API.fetchRegisterUser(user);
    const data = await response.json();
    console.log(data.status);

    switch (data.status) {
      case 201:
        dispatch({
          type: types.FETCH_REGISTER_USER_SUCCESS,
          payload: data.user,
        });
        break;
      default:

        dispatch({
          type: types.FETCH_REGISTER_USER_FAILURE,
          payload: data.message,
        });
        break;
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: types.FETCH_REGISTER_USER_FAILURE, payload: err });
  }
};

export default {
  loginUser,
  logoutUser,
  changeInputValue,
  fetchUser,
  clearUserInputs,
  fetchRegisterUser,
  deleteError,
};
