import types from "./types";
const INITIAL_STATE = {
  token: null,
  isFetching: false,
  isLoggedIn: false,
  isRegistered: false,
  data: {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: {
      day: "1",
      month: "1",
      year: (new Date().getFullYear() - 16).toString(),
    },
    road: "",
    houseNumber: "",
    zipcode: "",
    place: "",
    telephone: "",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.DELETE_ERROR: {
      let newState = Object.assign({}, state);
      delete newState.error;
      return { ...newState };
    }
    case types.FETCH_REGISTER_USER_SUCCESS: {
      return { ...state, isRegistered: true, isFetching: false };
    }
    case types.FETCH_REGISTER_USER_REQUEST: {
      return { ...state, isFetching: true };
    }
    case types.FETCH_REGISTER_USER_FAILURE: {
      return { ...state, error: action.payload, isFetching: false };
    }

    case types.CLEAR_USER_INPUTS: {
      const clearData = {
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        dateOfBirth: {
          day: "1",
          month: "1",
          year: (new Date().getFullYear() - 16).toString(),
        },
        road: "",
        houseNumber: "",
        zipcode: "",
        place: "",
        telephone: "",
      };
      return { ...state, data: clearData };
    }
    case types.FETCH_USER_SUCCESS: {
      
      if (state.error) {
        delete state.error;
      }
      return {
        ...state,
        isFetching: false,
        token: action.payload.token,
        isLoggedIn: true,
        data: action.payload.user,
      };
    }
    case types.FETCH_USER_FAILURE: {
      return { ...state, isFetching: false, error: action.payload };
    }
    case types.FETCH_USER_REQUEST: {
      return { ...state, isFetching: true };
    }
    case types.LOGIN_USER: {
      return { ...state, token: action.payload };
    }
    case types.LOGOUT_USER: {
      return { ...state, token: null, isLoggedIn: false };
    }
    case types.CHANGE_INPUT_VALUE: {
      const { name, value } = action.payload;

      switch (name) {
        case "day": {
          const newData = Object.assign({}, state.data);
          newData.dateOfBirth.day = value;
          return { ...state, data: newData };
        }
        case "month": {
          const newData = Object.assign({}, state.data);
          newData.dateOfBirth.month = value;
          return { ...state, data: newData };
        }
        case "year": {
          const newData = Object.assign({}, state.data);
          newData.dateOfBirth.year = value;
          return { ...state, data: newData };
        }
        case "username": {
          const newData = Object.assign({}, state.data);
          newData.username = value;
          return { ...state, data: newData };
        }
        case "email": {
          const newData = Object.assign({}, state.data);
          newData.email = value;
          return { ...state, data: newData };
        }
        case "password": {
          const newData = Object.assign({}, state.data);
          newData.password = value;
          return { ...state, data: newData };
        }
        case "telephone": {
          const newData = Object.assign({}, state.data);
          newData.telephone = value;
          return { ...state, data: newData };
        }
        case "firstName": {
          const newData = Object.assign({}, state.data);
          newData.firstName = value;
          return { ...state, data: newData };
        }
        case "lastName": {
          const newData = Object.assign({}, state.data);
          newData.lastName = value;
          return { ...state, data: newData };
        }
        case "houseNumber": {
          const newData = Object.assign({}, state.data);
          newData.houseNumber = value;
          return { ...state, data: newData };
        }
        case "road": {
          const newData = Object.assign({}, state.data);
          newData.road = value;
          return { ...state, data: newData };
        }
        case "zipcode": {
          const newData = Object.assign({}, state.data);
          newData.zipcode = value;
          return { ...state, data: newData };
        }
        case "place": {
          const newData = Object.assign({}, state.data);
          newData.place = value;
          return { ...state, data: newData };
        }
        default:
          return { ...state };
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;
