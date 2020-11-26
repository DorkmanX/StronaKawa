import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kURL } from "../helpers/consts";
import historyActions from "../redux/history/actions";
import { getFetchHeader } from "../helpers";
import useToken from "../hooks/useToken";

export default () => {
  const dispatch = useDispatch();
  const token = useToken();
  const fetchHistory = () => {
    fetch(`${kURL}/histories`, getFetchHeader("GET", token, null))
      .then((res) => res.json())
      .then((json) => {
        dispatch(historyActions.fetchHistorySuccess(json));
        console.log("x");
      });
  };
  useEffect(fetchHistory, []);
};
