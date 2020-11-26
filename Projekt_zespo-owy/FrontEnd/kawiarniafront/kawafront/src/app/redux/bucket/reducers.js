import types from "./types";
const INITIAL_STATE = {
  bucketItems: [],
  itemToDelete: null,
  isFetching: false,
};

const bucketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CLEAR_BUCKET: {
      return { ...state, bucketItems: [], itemToDelete: null };
    }
    case types.FETCH_BUCKET_SUCCESS: {
      return { ...state, bucketItems: action.payload, isFetching: false };
    }
    case types.FETCH_BUCKET_REQUEST: {
      return { ...state, isFetching: true };
    }
    case types.FETCH_BUCKET_FAILURE: {
      return { ...state, isFetching: false, error: action.payload };
    }
    case types.ADD_ITEM_TO_BUCKET: {
      
      action.payload.isSelectedToPay = action.payload.isSelectedToPay || false;
      const newData = Array.from(state.bucketItems);

      newData.push(action.payload);
      return { ...state, bucketItems: newData };
    }
    case types.DELETE_ITEM_FROM_BUCKET: {
      const newData = Array.from(state.bucketItems);
      newData.splice(action.payload, 1);

      return { ...state, bucketItems: newData };
    }
    case types.SET_ELEMENT_TO_DELETE: {
      return { ...state, itemToDelete: state.bucketItems[action.payload] };
    }
    case types.TOGGLE_ELEMENT_TO_PAY: {
      const newData = Array.from(state.bucketItems);
      newData[action.payload].isSelectedToPay = !newData[action.payload]
        .isSelectedToPay;
      return { ...state, bucketItems: newData };
    }
    case types.SAVE_FETCHED_BUCKET: {
      return { ...state, bucketItems: action.payload };
    }
    default:
      return { ...state };
  }
};
export default bucketReducer;
