import types from "./types";
const INITIAL_STATE = {
  historyItems: [],
  isFetching: false,
  itemCounter: 0,
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SORT_HISTORY: {
      let newHistory = Array.from(state.historyItems);
      
      switch (action.payload.actualSortRequest) {
        case "priceAsc":
          newHistory = state.historyItems.sort((a, b) => a.price > b.price);
          return { ...state, historyItems: newHistory };
        case "priceDesc":
          newHistory = state.historyItems.sort((a, b) => a.price < b.price);
          return { ...state, historyItems: newHistory };
        default:
          return { ...state };
      }
    }
    case types.FETCH_HISTORY_REQUEST: {
      return { ...state, isFetching: true };
    }
    case types.FETCH_HISTORY_FAILURE: {
      return { ...state, isFetching: false, error: action.payload };
    }
    case types.FETCH_HISTORY_SUCCESS: {
      let items = action.payload.historyVms;
      items.map((item) => (item.isCollapsed = false));
      return {
        ...state,
        historyItems: items,
        isFetching: false,
        itemCounter: action.payload.counter,
      };
    }
    case types.TOGGLE_ORDER_DETAILS_VISIBLE: {
      const idx = action.payload;
      let newData = Array.from(state.historyItems);
      newData[idx].isCollapsed = !newData[idx].isCollapsed;

      return { ...state, historyItems: newData };
    }
    default:
      return { ...state };
  }
};
export default historyReducer;
