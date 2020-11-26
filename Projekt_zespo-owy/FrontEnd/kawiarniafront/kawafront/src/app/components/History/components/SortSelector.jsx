import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import historyActions from "../../../redux/history/actions";
//import useToken from "../../../hooks/useToken";
const SortSelector = () => {
  const [actualSortRequest, setActualSortRequest] = useState("timeDesc");
  const dispatch = useDispatch();
  //const token = useToken();
  const history = useSelector((state) => state.history);
  function handleChange(e) {
    const { value } = e.target;

    switch (value) {
      case "timeDesc":
        break;
      case "timeAsc":
        setActualSortRequest(value);
        break;
      case "priceAsc":
     //   dispatch(historyActions.fetchHistory(token));
        dispatch(
          historyActions.fetchHistorySuccess({
            historyVms: history.historyItems.sort((a, b) => a.price > b.price),
          })
        );
        break;
      case "priceDesc":
       // dispatch(historyActions.fetchHistory(token));
        dispatch(
          historyActions.fetchHistorySuccess({
            historyVms: history.historyItems.sort((a, b) => a.price > b.price),
          })
        );
        break;
      default:
        break;
    }
  }
  return (
    <div className="radio">
      <div className="radio__field">
        <label>
          <input
            onChange={handleChange}
            type="radio"
            value="timeDesc"
            checked={actualSortRequest === "timeDesc"}
          />
          Time descend
        </label>
      </div>
      <div className="radio__field">
        <label>
          <input
            onChange={handleChange}
            type="radio"
            value="timeAsc"
            checked={actualSortRequest === "timeAsc"}
          />
          Time ascend
        </label>
      </div>
      <div className="radio__field">
        <label>
          <input
            onChange={handleChange}
            type="radio"
            value="priceAsc"
            checked={actualSortRequest === "priceAsc"}
          />
          Price ascend
        </label>
      </div>
      <div className="radio__field">
        <label>
          <input
            onChange={handleChange}
            type="radio"
            value="priceDesc"
            checked={actualSortRequest === "priceDesc"}
          />
          Price descend
        </label>
      </div>
    </div>
  );
};
export default SortSelector;
